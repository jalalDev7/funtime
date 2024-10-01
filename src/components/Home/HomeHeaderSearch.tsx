import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { categories, cities } from "@/constants/constants";
import { Button, buttonVariants } from "../ui/button";
import { Search } from "lucide-react";
import HomeDateRangePicker from "./HomeDateRangePicker";

const HomeHeaderSearch = () => {
  return (
    <div className="hidden md:flex flex-row max-w-5xl mx-auto border border-muted-foreground/40 rounded-full items-center justify-between shadow-md">
      <div className="flex items-center divide-x divide-accent">
        <Input
          type="text"
          className="pl-8 border-none rounded-full text-xl h-16 hover:bg-accent min-w-[300px]"
          placeholder="Search by keyword"
        />
        <Select>
          <SelectTrigger className=" border-none text-lg font-base focus-visible:ring-0 hover:bg-accent rounded-full h-16 px-6 text-muted-foreground">
            <SelectValue placeholder="City" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city.id} value={city.cityName}>
                {city.cityName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <HomeDateRangePicker />
        <Select>
          <SelectTrigger className=" border-none text-lg font-base focus-visible:ring-0 hover:bg-accent rounded-full h-16 px-6 text-muted-foreground">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.categoryName}>
                {cat.categoryName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Button className={(buttonVariants(), "rounded-full px-2 mr-4")}>
          <Search className="size-6" />
        </Button>
      </div>
    </div>
  );
};

export default HomeHeaderSearch;
