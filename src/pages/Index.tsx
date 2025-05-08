import FaqSection from "../components/home/FaqSection";
import HomeCarousel from "../components/home/HomeCarousel";
import HomeTipsCards from "../components/home/HomeTipsCards";

const Index = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <HomeCarousel />
        <HomeTipsCards />
        <FaqSection />
      </main>
    </div>
  );
};

export default Index;
