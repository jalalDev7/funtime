import React from "react";
import HomeNavbar from "./HomeNavbar";
import HomeAuth from "./HomeAuth";
import MaxWidthWrapper from "./MaxWidthWrapper";
import HomeHeaderSearch from "./HomeHeaderSearch";
import Image from "next/image";

const HomeHeader = () => {
  return (
    <div className="flex border-b border-b-muted-foreground/40 ">
      <MaxWidthWrapper className="flex flex-col gap-4 py-4">
        <div className="flex flex-row items-center justify-between">
          <Image
            src="/logo.png"
            width={120}
            height={120}
            alt="funtime logo"
            className="aspect-video"
          />
          <HomeNavbar />
          <HomeAuth />
        </div>
        <HomeHeaderSearch />
      </MaxWidthWrapper>
    </div>
  );
};

export default HomeHeader;
