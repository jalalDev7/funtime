import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { categories } from "@/constants/constants";
import Image from "next/image";

const HomeCategories = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-row flex-wrap gap-3 items-center justify-center mt-8 mb-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center justify-center gap-1 dark:bg-secondary rounded-md py-1 px-2"
          >
            <Image
              src={cat.icon}
              width={25}
              height={25}
              alt="category icon"
              className="opacity-60"
            />
            <h3 className="text-xs font-medium text-nowrap text-muted-foreground">
              {cat.categoryName}
            </h3>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center gap-1"></div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HomeCategories;
