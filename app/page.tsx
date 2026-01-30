import { AboutGrid } from "@/components/AboutGrid";
import Hero from "@/components/Hero"
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import bgPortfolio from "@/public/PortBackground.svg";
import Contact from "@/components/Contact";

const navigationItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const LandingPage = () => {
  return (
    <main className="relative min-h-screen flex justify-center items-center flex-col overflow-x-hidden mx-auto">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={bgPortfolio}
          alt="Portfolio Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        {/* Optional: Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black-100/80" />
      </div>

      <FloatingNav navItems={navigationItems} />
      
      <div className="relative z-10 w-full">
        <Hero />
        <AboutGrid />
        <RecentProjects />
        <Contact/>
      </div>
    </main>
  )
}

export default LandingPage