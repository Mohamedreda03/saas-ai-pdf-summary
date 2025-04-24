import BGGradient from "@/components/common/bg-gradient";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
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
          <h1 className="text-4xl font-bold mb-6">Welcome back to Limme</h1>
          <p className="text-lg mb-8">
            Transform your PDFs into beautiful summaries with AI-powered
            insights
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-medium text-lg mb-2">Fast Analysis</h3>
              <p className="text-white/80">Get summaries in seconds</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-medium text-lg mb-2">AI Powered</h3>
              <p className="text-white/80">Smart extraction of key points</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-medium text-lg mb-2">Secure</h3>
              <p className="text-white/80">Your data stays private</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-medium text-lg mb-2">Easy Sharing</h3>
              <p className="text-white/80">Share insights with your team</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - sign in form */}
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
              Sign in to your account
            </h2>
            <p className="text-gray-600">
              Or{" "}
              <Link
                href="/sign-up"
                className="text-rose-600 hover:text-rose-800 font-medium"
              >
                create a new account
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <SignIn
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
