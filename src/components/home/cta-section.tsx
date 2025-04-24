import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 bg-rose-50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to save time on reading PDFs?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who use Limme to extract key insights
          from documents in seconds.
        </p>
        <div>
          <Button
            className="text-white w-72 text-base sm:text-lg lg:text-xl rounded-full py-6 bg-gradient-to-r from-gray-900 via-rose-800 to-rose-600"
            asChild
          >
            <Link href="/#pricing" className="flex items-center gap-2">
              <span>Try Limme for Free</span>
              <ArrowRight className="animate-pulse" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
