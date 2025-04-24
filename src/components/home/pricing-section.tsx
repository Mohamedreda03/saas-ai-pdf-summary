import Link from "next/link";
import React from "react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 px-2 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-rose-600 mb-4">Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include full
            access to our core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Free</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-extrabold text-gray-900">
                  $0
                </span>
                <span className="ml-1 text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">5 PDFs per month</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Basic summaries</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">PDF size up to 5MB</span>
                </li>
              </ul>

              <Link
                href="/sign-up"
                className="block w-full py-3 px-4 rounded-md shadow bg-white text-rose-500 font-medium border border-rose-500 hover:bg-rose-50 text-center transition duration-150 ease-in-out"
              >
                Start for Free
              </Link>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-rose-500 transform scale-105">
            <div className="p-8">
              <h3 className="text-lg font-semibold text-rose-500 mb-3">Pro</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-extrabold text-gray-900">
                  $12
                </span>
                <span className="ml-1 text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Unlimited PDFs</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Advanced AI summaries</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">PDF size up to 25MB</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Priority processing</span>
                </li>
              </ul>
              <Link
                href="/sign-up?plan=pro"
                className="block w-full py-3 px-4 rounded-md shadow bg-rose-500 text-white font-medium hover:bg-rose-600 text-center transition duration-150 ease-in-out"
              >
                Get Pro
              </Link>
            </div>
          </div>

          {/* Business Plan */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Business
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-extrabold text-gray-900">
                  $29
                </span>
                <span className="ml-1 text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Everything in Pro</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Team collaboration</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">PDF size up to 100MB</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">API access</span>
                </li>
              </ul>
              <Link
                href="/sign-up?plan=business"
                className="block w-full py-3 px-4 rounded-md shadow bg-white text-rose-500 font-medium border border-rose-500 hover:bg-rose-50 text-center transition duration-150 ease-in-out"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
