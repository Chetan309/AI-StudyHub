"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import DashboardHeader from "./dashboard/_components/DashboardHeader";
import Footer from "./dashboard/_components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  function getStartedHandler() {
    if (user) {
      router.push("/dashboard");
    } else {
      router.push("/sign-in");
    }
  }

  function aboutDeveloperHandler() {
    router.push("/aboutdeveloper");
  }

  return (
    <div className="">
      {/* Navbar */}
      <div>
        <section className="z-50 h-[500px] w-full bg-[url('/bg.png')] bg-cover bg-center p-2">
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <Link href={"/"}>
              <Image
                src={"/logo2.png"}
                height={120}
                width={300}
                alt="Logo"
                priority
              />
            </Link>

            <Button
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              onClick={aboutDeveloperHandler}
            >
              About Developer
            </Button>
          </nav>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <div
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <div className="flex items-center">
                <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
                  New
                </span>
                <span className="text-sm font-medium">
                  Check out my profile
                </span>
              </div>
              <Link
                href="https://www.linkedin.com/in/chetan-sharma-816024283/"
                target="_blank"
                className="ml-2"
              >
                <svg
                  className="ml-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>

            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Unlock study potential <span className="text-primary">with </span>
              <br></br>AI-generated resources.
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Empower your learning with personalized, instant, and efficient
              study materials.
            </p>

            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="/dashboard"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="text-gray-600 body-font ">
          <div className="container px-5 py-3 mx-auto">
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "AI-Powered Course Creation",
                  description:
                    "Generate complete course materials in minutes. The AI analyzes your topic and creates structured lessons, quizzes, and assignments tailored to your educational goals.",
                },
                {
                  title: "Personalized Learning Paths",
                  description:
                    "Customize learning experiences for different student needs. The AI adapts content difficulty and presentation style based on learning preferences and skill levels.",
                },
                {
                  title: "Interactive Exercises",
                  description:
                    "Engage students with automatically generated practice problems, case studies, and interactive scenarios. Our AI creates varied exercise types to reinforce key concepts.",
                },
                {
                  title: "Assessment Generation",
                  description:
                    "Create comprehensive assessments instantly. From multiple-choice quizzes to essay prompts, the AI generates balanced assessments that accurately measure student understanding.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="px-8 py-6 border-gray-200 border hover:border-mainColor rounded-lg hover:bg-gray-50 transition duration-300"
                >
                  <h2 className="text-lg sm:text-xl text-gray-900 font-semibold title-font mb-2">
                    {feature.title}
                  </h2>
                  <p className="leading-relaxed text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="text-gray-600 body-font bg-gray-50">
          <div className="container px-5 py-16 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Perfect For
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The AI course generator serves educators and trainers across
                various domains
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Educators",
                  description:
                    "Create supplementary materials for classroom teaching or develop complete online courses with minimal effort.",
                },
                {
                  title: "Corporate Trainers",
                  description:
                    "Design professional development programs and onboarding materials customized to your company's needs.",
                },
                {
                  title: "Online Course Creators",
                  description:
                    "Rapidly develop and iterate on course content for platforms like Udemy, Coursera, or your own website.",
                },
                {
                  title: "Subject Matter Experts",
                  description:
                    "Transform your expertise into structured educational content without needing instructional design experience.",
                },
                {
                  title: "Educational Institutions",
                  description:
                    "Support curriculum development and provide consistent learning materials across departments.",
                },
                {
                  title: "Self-Learners",
                  description:
                    "Generate personalized study guides and practice materials tailored to your learning goals.",
                },
              ].map((useCase, index) => (
                <div
                  key={index}
                  className="p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition duration-300"
                >
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-base text-gray-600">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
