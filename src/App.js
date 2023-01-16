import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PropertiesSection from "./components/PropertiesSection";
import FeaturesSection from "./components/FeaturesSection";
import PropertyForm from "./components/PropertyForm";
import Footer from "./components/Footer";
import TestimonySection from "./components/TestimonySection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="gradient-rect"></div>
        <Hero />
        <About />
        <PropertiesSection />
        <FeaturesSection />
        <PropertyForm/>
        <TestimonySection/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
