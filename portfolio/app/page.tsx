import HeroSection from "@/components/sections/heroSection";
import ProjectGrid from "@/components/sections/projectGrid";
import AboutPage from "./about/page";
export default function Home() {
  return (
    <main>
      <HeroSection/>
      <AboutPage/>
      <ProjectGrid />
    </main>
  );
}