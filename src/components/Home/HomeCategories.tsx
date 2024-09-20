import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { categories } from "@/constants/constants";

const HomeCategories = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-row flex-wrap gap-4 items-center justify-center mt-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center justify-center gap-1"
          >
            <h3 className="text-sm font-medium text-nowrap">
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
