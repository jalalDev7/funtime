import React from "react";
import HomeNavbar from "./HomeNavbar";
import HomeAuth from "./HomeAuth";
import MaxWidthWrapper from "./MaxWidthWrapper";
import HomeHeaderSearch from "./HomeHeaderSearch";

const HomeHeader = () => {
  return (
    <div className="flex border-b border-b-muted-foreground/40 ">
      <MaxWidthWrapper className="flex flex-col gap-4 py-4">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-3xl font-bold">Funtime.ma</h1>
          <HomeNavbar />
          <HomeAuth />
        </div>
        <HomeHeaderSearch />
      </MaxWidthWrapper>
    </div>
  );
};

export default HomeHeader;
