import { ArrowRight, Sparkle } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="container mx-auto lg:px-12 max-w-7xl py-16 sm:py-10 lg:pb-28 z-0 transition-all animate-in flex items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        <div className="relative p-[1px] rounded-full overflow-hidden animate-gradient-x bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 group">
          <div className="relative flex items-center gap-2 px-6 py-2.5 text-base font-medium rounded-full bg-white group-hover:bg-50 transition-colors duration-200">
            <Sparkle className="h-6 w-6 text-rose-500 animate-pulse" />
            <p className="text-base text-rose-600">Powered by AI</p>
          </div>
        </div>
        <h1 className="font-bold py-6 text-center">
          Transform PDFs into{" "}
          <span className="relative inline-block">
            <span className="relative z-10 px-2">concise</span>
            <span className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"></span>
          </span>{" "}
          summaries
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">
          Get a beautiful summary of your PDF documents in seconds
        </h2>
        <div>
          <Button
            className="text-white w-50 mt-6 text-base sm:text-lg lg:text-xl rounded-full py-6 bg-gradient-to-r from-gray-900 via-rose-800 to-rose-600 hover:from-rose-800 hover:via-rose-700 hover:to-gray-800"
            asChild
          >
            <Link href="/#pricing" className="flex items-center gap-2">
              <span>Try Limme</span>
              <ArrowRight className="animate-pulse" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
