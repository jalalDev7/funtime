import Link from "next/link";
import React from "react";

const HomeNavbar = () => {
  return (
    <div className="hidden md:flex flex-row w-full items-center justify-center gap-4 inset-0">
      <Link href="/" className="font-semibold">
        Home
      </Link>
      <Link href="/">Top events</Link>
      <Link href="/">Explore</Link>
    </div>
  );
};

export default HomeNavbar;
