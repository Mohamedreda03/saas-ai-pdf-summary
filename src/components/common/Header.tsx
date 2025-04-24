import { FileText } from "lucide-react";
import React from "react";
import NavLink from "./nav-link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Header() {
  return (
    <nav className="container flex items-center justify-between py-4 px-2 lg:px-8 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 hover:rotate-12 text-gray-900 transform transition duration-200 ease-in-out" />
          <span className="lg:text-xl font-semibold text-gray-900">Limme</span>
        </NavLink>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        <SignedIn>
          <NavLink href="/dashboard">Your Summaries</NavLink>
        </SignedIn>
      </div>
      <div className="flex lg:flex-1 justify-end">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">Uplaod a PDF</NavLink>
            <div>Pro</div>
            {/* <Button>Sign Out</Button> */}
          </div>
        </SignedIn>
        <SignedOut>
          <div>
            <NavLink href="/sign-in">Sign In</NavLink>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
}
