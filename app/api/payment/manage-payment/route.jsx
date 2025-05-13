import { NextResponse } from "next/server";
import fetch from "node-fetch"; // Use node-fetch to make API calls

export async function POST(req) {
  const { customerId } = await req.json();

  // Make sure to validate customerId and other inputs as needed
  if (!customerId) {
    return NextResponse.json({ error: "Missing customerId" }, { status: 400 });
  }

  // Fetch the PayPal token
  const tokenResponse = await fetch(
    "https://api.sandbox.paypal.com/v1/oauth2/token",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID +
            ":" +
            process.env.PAYPAL_SECRET_KEY
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    }
  );

  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;

  // Create the billing portal session
  const portalResponse = await fetch(
    "https://api.sandbox.paypal.com/v1/billing/portal/sessions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer: customerId,
        return_url: process.env.HOST_URL,
      }),
    }
  );

  const portalSession = await portalResponse.json();

  // Return the portal session data as a response
  return NextResponse.json(portalSession);
}
