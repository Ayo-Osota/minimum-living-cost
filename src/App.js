import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PropertiesSection from "./components/PropertiesSection";
import FeaturesSection from "./components/FeaturesSection";

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
      </main>
    </>
  );
}

export default App;
