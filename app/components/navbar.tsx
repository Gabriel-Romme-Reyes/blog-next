import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between mb-8">
      <Link href="/" className="font-bold text-3xl">
        {" "}
        Minify
      </Link>

      <div className="relative flex items-center justify-between w-64">
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Tags</Link>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
}
