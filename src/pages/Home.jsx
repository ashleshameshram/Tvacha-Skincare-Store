import Bestsellers from "../Components/Bestsellers";
import Categories from "../Components/Categories";
import Hero from "../Components/Hero";
import WhyTvacha from "../Components/WhyTvacha";
import RoutineBanner from "../Components/RoutineBanner";

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