import { Header } from "./components/header/Header";
import { ContactSection } from "./components/sections/ContactSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { HeroSection } from "./components/sections/HeroSection";
import { PortfolioSection } from "./components/sections/PortfolioSection";
import { ServicesSection } from "./components/sections/ServicesSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}

export default App;
