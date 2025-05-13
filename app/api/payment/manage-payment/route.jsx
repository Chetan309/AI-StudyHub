import { NextResponse } from "next/server";
import { PayPalButtons } from "@paypal/react-paypal-js";
export async function POST(req) {
  const paypal = new paypal(process.env.PAYPAL_SECRETE_KEY);

  const returnUrl = process.env.HOST_URL;
  const { customerId } = await req.json();

  const portalSession = await paypal.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  });

  return NextResponse.json(portalSession);
}