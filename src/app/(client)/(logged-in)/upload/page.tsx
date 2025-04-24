import BGGradient from "@/components/common/bg-gradient";
import UploadForm from "@/components/Upload/UploadForm";
import { Sparkle } from "lucide-react";
import React from "react";

export default function UploadPage() {
  return (
    <>
      <BGGradient />
      <section className="container mx-auto lg:px-12 max-w-7xl py-16 sm:py-10 lg:pb-28 z-0 transition-all animate-in flex items-center justify-center">
        <div className="flex items-center justify-center flex-col w-full">
          <div className="relative p-[1px] rounded-full overflow-hidden animate-gradient-x bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 group">
            <div className="relative flex items-center gap-2 px-6 py-2.5 text-base font-medium rounded-full bg-white group-hover:bg-50 transition-colors duration-200">
              <Sparkle className="h-6 w-6 text-rose-500 animate-pulse" />
              <p className="text-base text-rose-600">
                AI Powered Content Creation
              </p>
            </div>
          </div>
          <h1 className="font-bold py-6 text-center">
            Start Uploading{" "}
            <span className="relative inline-block">
              <span className="relative z-10 px-2">Your PDFs</span>
              <span className="absolute inset-0 bg-rose-200/50 rotate-2 rounded-lg transform -skew-y-1"></span>
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">
            Upload your PDFs and Let our AI do the magic ✨
          </h2>

          <div className="relative w-full max-w-3xl mx-auto my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-600 font-medium">
                Upload PDFs
              </span>
            </div>
          </div>

          <div className="w-full max-w-3xl px-4 sm:px-6">
            <UploadForm />
          </div>
        </div>
      </section>
    </>
  );
}
