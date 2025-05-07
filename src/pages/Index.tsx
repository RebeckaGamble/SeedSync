import Footer from "../components/Footer";
import HomeCarousel from "../components/home/HomeCarousel";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HomeCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
