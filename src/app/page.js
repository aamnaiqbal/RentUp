import Hero from "@/components/Home/Hero";
import Featured from "@/components/Home/Featured";
import RecentProperty from "@/components/Home/RecentProperty";
import Award from "@/components/Home/Award";
import Explore_Location from "@/components/Home/Explore_Location";
import FeaturedAgents from "@/components/Home/FeaturedAgents/FeaturedAgents";
import PricePackage from "@/components/Home/PricePackage/PricePackage";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <RecentProperty />
      <Award />
      <Explore_Location />
      <FeaturedAgents />
      <PricePackage />
    </>
  );
}
