"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3dPin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <section className="py-20 w-full" id="projects" >
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-center mb-16">
          <span className="text-purple font-bold text-2xl lg:text-4xl">
            Recent Projects
          </span>
        </h1>
        
        <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-16 lg:gap-y-28">
          {projects.map((item) => (
            <div
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex items-center justify-center"
              key={item.id}
            >
              <PinContainer
                title={item.title}
                href={item.link}
              >
                <div className="relative flex items-center justify-center w-[18rem] overflow-hidden h-[20vh] lg:h-[25vh] mb-8">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-2xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image src="/bg.png" width={100} height={100} alt="bgimg" className="w-full h-full object-cover" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 w-full"
                  />
                </div>

                <h1 className="font-bold text-xl lg:text-[16px] line-clamp-1 mb-2">
                  {item.title}
                </h1>

                <p
                  className="text-sm lg:text-xs font-light line-clamp-2 mb-4"
                  style={{
                    color: "#BEC1DD",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black w-8 h-8 lg:w-8 lg:h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="text-xs lg:text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-2 text-sm" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;