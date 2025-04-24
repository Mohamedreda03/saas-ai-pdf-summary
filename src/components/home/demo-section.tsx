import React from "react";
import { Pizza } from "lucide-react";

export default function DemoSection() {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center justify-center rounded-2xl bg-rose-50 p-2 backdrop-blur-xs border border-rose-100">
            <Pizza className="w-6 h-6 text-rose-500" />
          </div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold max-w-3xl mx-auto px-4 sm:px-6">
              Watch how Limme transforms{" "}
              <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
                your PDFs
              </span>{" "}
              into{" "}
              <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
                structured data
              </span>{" "}
              and make it easy to read.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
