import HomeCategories from "@/components/Home/HomeCategories";
import HomeExploreEvent from "@/components/Home/HomeExploreEvent";
import HomeFooter from "@/components/Home/HomeFooter";
import HomeHeader from "@/components/Home/HomeHeader";
import HomeHotEvents from "@/components/Home/HomeHotEvents";

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <HomeCategories />
      <HomeHotEvents />
      <HomeExploreEvent />
      <HomeFooter />
    </main>
  );
}
