import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./text-generate-effect";
import MagicButton from "./MagicButton";
import { Navigation } from "lucide-react";
import { GridGlobe } from "./GridGlobe";

export function Grid() {
  return (
    <div className="relative z-0 flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-black-100 via-black-100 to-purple-900/20">
      {/* Grid Background - Thinner lines (0.5px) */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_0.5px,transparent_0.5px),linear-gradient(to_bottom,#262626_0.5px,transparent_0.5px)]",
        )}
      />
      
      {/* Radial Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/80 via-transparent to-black/80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      
      {/* Accent Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Side - Text Content - Takes 60% */}
          <div className="w-full lg:w-[60%] flex flex-col items-center text-center space-y-6">
            
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-sm font-medium text-purple-300">
                Available for opportunities
              </span>
            </div>
            
            <TextGenerateEffect 
              className="text-4xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200 leading-tight" 
              duration={2} 
              filter={false} 
              words="Hiiiii! My name is Abdulazeez Kolawole." 
            />

            <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
              I'm a passionate <span className="font-semibold text-purple-400">Front-end Developer</span> specializing in crafting dynamic and responsive web applications using{" "}
              <span className="font-semibold text-blue-400">Next.js</span>,{" "}
              <span className="font-semibold text-blue-400">TypeScript</span>, and modern tooling. With a keen eye for detail, focusing on clean architecture, performance, and real-world usability.  
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a   href="/resume/Abdulazeez_Kolawole_NResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagicButton
                  title="View Resume"
                  icon={<Navigation size={16} />}
                  position="right"
                /> 
              </a>
       
            </div>
          </div>

          {/* Right Side - Globe - Takes 40% */}
          <div className="w-full lg:w-[40%] flex items-center justify-center relative">
            {/* Glow effect behind globe */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl" />
            <GridGlobe />
          </div>
          
        </div>
      </div>
    </div>
  );
}