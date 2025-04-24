"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { UploadCloud } from "lucide-react";

export default function UploadForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="w-full p-8 border-2 border-dashed border-gray-300 rounded-lg bg-white/50 hover:bg-white/80 transition-colors">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 w-full"
        >
          <div className="w-full flex-1">
            <label
              htmlFor="pdf-upload"
              className="flex flex-col items-center justify-center w-full h-32 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <UploadCloud className="w-10 h-10 text-rose-500 mb-3" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">PDF (MAX. 10MB)</p>
              </div>
              <Input
                id="pdf-upload"
                type="file"
                accept=".pdf"
                className="hidden"
              />
            </label>
          </div>
          <Button className="w-full sm:w-auto py-6 px-8 bg-gradient-to-r from-gray-900 via-rose-800 to-rose-600">
            Upload PDF
          </Button>
        </form>
      </div>
    </div>
  );
}
