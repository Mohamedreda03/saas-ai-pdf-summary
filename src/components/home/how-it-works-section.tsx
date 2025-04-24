import { BrainCircuit, FileOutput, FileText } from "lucide-react";
import React from "react";

const steps = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    title: "Upload your PDF",
    description:
      "Easily upload your PDF documents through our simple interface.",
  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
    title: "AI Processing",
    description:
      "Our advanced AI reads and analyzes the entire document in seconds.",
  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5} />,
    title: "Get Your Summary",
    description:
      "Receive a concise, accurate summary highlighting the key points.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">
            How It Works
          </h2>
          <p className="text-3xl font-bold max-w-2xl mx-auto">
            Extract the most important information from any PDF easily with our
            AI platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg text-center border border-gray-50 hover:border-rose-300 transition-all duration-200"
            >
              <div className="w-24 h-24 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-rose-500 font-bold">{step.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
