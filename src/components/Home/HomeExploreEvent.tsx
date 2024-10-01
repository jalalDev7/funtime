import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { Share2 } from "lucide-react";

const HomeExploreEvent = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col w-full gap-4 mt-8">
        <h1 className="text-2xl font-semibold text-primary">
          Explore all events
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="flex flex-col w-full rounded-lg relative">
            <div className="bg-accent rounded-full flex absolute size-[40px] items-center justify-center right-4 top-4 hover:bg-muted-foreground transition-all duration-300 ease-in-out cursor-pointer">
              <Share2 className="size-[25px] text-primary shadow-lg" />
            </div>
            <Image
              src="/testImage5.webp"
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
              src="/testImage6.webp"
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
              src="/testImage7.webp"
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
              src="/testImage5.webp"
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
              src="/testImage8.webp"
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
              src="/testImage7.webp"
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

        <div className="flex w-full items-center justify-center mb-4">
          <Button
            className={buttonVariants({
              variant: "outline",
              className: "text-primary",
            })}
          >
            Show more
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HomeExploreEvent;
