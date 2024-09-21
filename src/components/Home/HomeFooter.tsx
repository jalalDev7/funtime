import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { categories } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

const HomeFooter = () => {
  return (
    <footer className="flex flex-col w-full bg-accent">
      <MaxWidthWrapper className="mt-8 ">
        <div className="flex flex-col w-full max-w-7xl mx-auto">
          <h1 className="text-xl font-semibold text-primary">
            Find your next event, and have fun
          </h1>
          <div className="grid grid-cols-4 w-full gap-4 mt-4">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="flex flex-row items-center w-full gap-4"
              >
                <div>
                  <Image
                    src={cat.icon}
                    width={50}
                    height={50}
                    alt="category icon"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h2 className="text-lg font-medium">{cat.categoryName}</h2>
                  <h3 className="text-xs text-pretty">{cat.description}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row w-full items-center justify-between mt-8 border-t border-muted-foreground/50 p-2">
            <div className="flex flex-row w-full gap-2">
              <h1>© 2024 Funtime.ma</h1>
              <Link href="/">Home</Link>
              <Link href="/">Sitemap</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact us</Link>
            </div>
            <div className="flex flex-row items-center gap-2">
              <TbWorld className="size-4" />
              <h3>English</h3>
              <h3>MAD</h3>
              <FaFacebook className="size-6" />
              <RiInstagramFill className="size-6" />
              <FaSquareXTwitter className="size-6" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default HomeFooter;
