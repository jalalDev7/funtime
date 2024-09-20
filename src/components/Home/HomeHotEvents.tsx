import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";

const HomeHotEvents = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col w-full gap-4 mt-8">
        <h1 className="text-2xl font-semibold text-primary">Hot events</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col w-full rounded-lg">
            <Image
              src="/testImage.webp"
              alt="event image"
              width={400}
              height={400}
              className=" w-full object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">Sky diving</h2>
            <h3 className="text-sm font-medium text-muted-foreground">
              Created by MohamedSky
            </h3>
          </div>
          <div className="flex flex-col w-full rounded-lg">
            <Image
              src="/testImage.webp"
              alt="event image"
              width={400}
              height={600}
              className="max-w-[400px] w-full object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">Sky diving</h2>
            <h3 className="text-sm font-medium text-muted-foreground">
              Created by MohamedSky
            </h3>
          </div>
          <div className="flex flex-col w-full rounded-lg">
            <Image
              src="/testImage.webp"
              alt="event image"
              width={400}
              height={600}
              className="max-w-[400px] w-full object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">Sky diving</h2>
            <h3 className="text-sm font-medium text-muted-foreground">
              Created by MohamedSky
            </h3>
          </div>
          <div className="flex flex-col w-full rounded-lg">
            <Image
              src="/testImage.webp"
              alt="event image"
              width={400}
              height={600}
              className="max-w-[400px] w-full object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">Sky diving</h2>
            <h3 className="text-sm font-medium text-muted-foreground">
              Created by MohamedSky
            </h3>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HomeHotEvents;
