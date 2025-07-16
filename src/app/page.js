import Image from "next/image";
import Header from "./components/common/Header";
import Hero from "./components/Home/Hero";
import Featured from "./components/Home/Featured";
import RecentProperty from "./components/Home/RecentProperty";
import Award from "./components/Home/Award";
import Explore_Location from "./components/Home/Explore_Location";
import FeaturedAgents from "./components/Home/FeaturedAgents/FeaturedAgents";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <RecentProperty />
      <Award />
      <Explore_Location />
      <FeaturedAgents />
    </>
  );
}
