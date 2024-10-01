import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { Share2 } from "lucide-react";

const HomeHotEvents = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col w-full gap-4 mt-8">
        <h1 className="text-2xl font-semibold text-primary">Hot events</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="flex flex-col w-full rounded-lg relative">
            <div className="bg-accent rounded-full flex absolute size-[40px] items-center justify-center right-4 top-4 hover:bg-muted-foreground transition-all duration-300 ease-in-out cursor-pointer">
              <Share2 className="size-[25px] text-primary shadow-lg" />
            </div>
            <Image
              src="/testImage.webp"
              alt="event image"
              width={500}
              height={300}
              className="object-cover w-full aspect-square rounded-lg "
            />
            <h2 className="text-lg font-semibold mt-2">Sky diving</h2>
            <h3 className="text-sm font-medium text-muted-foreground">
              Created by MohamedSky
            </h3>
          </div>
          <div className="flex flex-col w-full rounded-lg relative">
            <div className="bg-accent rounded-full flex absolute size-[40px] items-center justify-center right-4 top-4 hover:bg-muted-foreground transition-all duration-300 ease-in-out cursor-pointer">
              <Share2 className="size-[25px] text-primary shadow-lg" />
            </div>
            <Image
              src="/testImage2.webp"
              alt="event image"
              width={500}
              height={300}
              className="object-cover w-full aspect-square rounded-lg "
            />
            <h2 className="text-lg font-semibold mt-2">Sky diving</h2>
            <h3 className="text-sm font-medium text-muted-foreground">
              Created by MohamedSky
            </h3>
          </div>
          <div className="flex flex-col w-full rounded-lg relative">
            <div className="bg-accent rounded-full flex absolute size-[40px] items-center justify-center right-4 top-4 hover:bg-muted-foreground transition-all duration-300 ease-in-out cursor-pointer">
              <Share2 className="size-[25px] text-primary shadow-lg" />
            </div>
            <Image
              src="/testImage3.webp"
              alt="event image"
              width={500}
              height={300}
              className="object-cover w-full aspect-square rounded-lg "
            />
            <h2 className="text-lg font-semibold mt-2">Sky diving</h2>
            <h3 className="text-sm font-medium text-muted-foreground">
              Created by MohamedSky
            </h3>
          </div>
          <div className="flex flex-col w-full rounded-lg relative">
            <div className="bg-accent rounded-full flex absolute size-[40px] items-center justify-center right-4 top-4 hover:bg-muted-foreground transition-all duration-300 ease-in-out cursor-pointer">
              <Share2 className="size-[25px] text-primary shadow-lg" />
            </div>
            <Image
              src="/testImage4.webp"
              alt="event image"
              width={500}
              height={300}
              className="object-cover w-full aspect-square rounded-lg "
            />
            <h2 className="text-lg font-semibold mt-2">Sky diving</h2>
            <h3 className="text-sm font-medium text-muted-foreground">
              Created by MohamedSky
            </h3>
          </div>
          <div className="flex flex-col w-full rounded-lg relative">
            <div className="bg-accent rounded-full flex absolute size-[40px] items-center justify-center right-4 top-4 hover:bg-muted-foreground transition-all duration-300 ease-in-out cursor-pointer">
              <Share2 className="size-[25px] text-primary shadow-lg" />
            </div>
            <Image
              src="/testImage2.webp"
              alt="event image"
              width={500}
              height={300}
              className="object-cover w-full aspect-square rounded-lg "
            />
            <h2 className="text-lg font-semibold mt-2">Sky diving</h2>
            <h3 className="text-sm font-medium text-muted-foreground">
              Created by MohamedSky
            </h3>
          </div>
          <div className="flex flex-col w-full rounded-lg relative">
            <div className="bg-accent rounded-full flex absolute size-[40px] items-center justify-center right-4 top-4 hover:bg-muted-foreground transition-all duration-300 ease-in-out cursor-pointer">
              <Share2 className="size-[25px] text-primary shadow-lg" />
            </div>
            <Image
              src="/testImage3.webp"
              alt="event image"
              width={500}
              height={300}
              className="object-cover w-full aspect-square rounded-lg "
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
