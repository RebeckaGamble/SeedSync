import FaqSection from "@/components/home/FaqSection";
import Hero from "@/components/home/Hero";
import HomeCarousel from "@/components/home/HomeCarousel";
import HomeTipsCards from "@/components/home/HomeTipsCards";
import StepByStep from "@/components/home/StepByStep";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <Hero />
        <div className="bg-primary  ">
          <HomeTipsCards />
        </div>
        <HomeCarousel />
        <StepByStep />
        <FaqSection />
        <Testimonials />
      </main>
    </div>
  );
};

export default Home;
