import BGGradient from "@/components/common/bg-gradient";
import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      {/* Left side - decorative */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-r from-rose-800 to-rose-600 relative overflow-hidden justify-center items-center">
        <div className="absolute inset-0 opacity-20">
          <BGGradient className="!opacity-40" />
        </div>
        <div className="relative z-10 px-12 py-8 max-w-lg text-white">
          <h1 className="text-4xl font-bold mb-6">Join Limme today</h1>
          <p className="text-lg mb-8">
            Start transforming your PDFs into beautiful summaries with the power
            of AI
          </p>
          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg">Unlimited Documents</h3>
                <p className="text-white/80">
                  Process as many PDFs as you need with our Pro plans
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg">Advanced AI</h3>
                <p className="text-white/80">
                  Superior summaries with our cutting-edge AI technology
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg">Try For Free</h3>
                <p className="text-white/80">
                  Get started with our free plan - no credit card required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - sign up form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="absolute inset-0 -z-10">
          <BGGradient />
        </div>

        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-sm relative z-10">
          <div className="text-center">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-3xl font-bold text-rose-600">Limme</h2>
            </Link>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Create your account
            </h2>
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="text-rose-600 hover:text-rose-800 font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <SignUp
              appearance={{
                elements: {
                  formButtonPrimary:
                    "bg-gradient-to-r from-gray-900 via-rose-800 to-rose-600 hover:from-rose-800 hover:via-rose-700 hover:to-gray-800",
                  card: "shadow-none",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton: "border border-gray-300 shadow-sm",
                  dividerLine: "bg-gray-200",
                  dividerText: "text-gray-500",
                  formFieldLabel: "text-gray-700",
                  formFieldInput:
                    "border-gray-300 focus:ring-rose-500 focus:border-rose-500",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
