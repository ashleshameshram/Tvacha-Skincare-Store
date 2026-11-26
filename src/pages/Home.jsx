import Bestsellers from "../components/Bestsellers";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import WhyTvacha from "../components/WhyTvacha";
import RoutineBanner from "../components/RoutineBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Bestsellers />
      <WhyTvacha />
      <RoutineBanner />
    </>
  );
}