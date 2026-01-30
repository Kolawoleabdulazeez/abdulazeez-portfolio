import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-8 md:auto-rows-[15rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode | string[];
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 rounded-xl border border-neutral-200 bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none overflow-hidden",
        className,
      )}
    >
      {/* Special layout for tech stack item (id: 1) */}
      {id === 1 ? (
        <div className="flex h-full w-full">
          {/* Left side - Content */}
          <div className="flex-1 p-4 flex flex-col justify-between">
            {/* Image */}
         {img && (
            <div className="relative w-full h-64 rounded-lg mb-4 hidden md:block">
              <Image
                src={img}
                alt={typeof title === 'string' ? title : 'Bento item'}
                fill
                className={cn("object-contain", imgClassName)}
              />
            </div>
          )}


            {/* Title and Description */}
            <div className="transition duration-200 group-hover/bento:translate-x-2">
              <div className={cn("mb-2 font-sans font-bold text-neutral-600 dark:text-purple", titleClassName)}>
                {title}
              </div>
              <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
                {description}
              </div>
            </div>
          </div>

          {/* Right side - Tech Stack */}
          <div className="flex gap-1 lg:gap-3 p-4 pt-8">
            <div className="flex flex-col gap-3 lg:gap-4">
              {["React.js", "Next.js", "TypeScript"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-3 px-2 lg:px-3 text-xs lg:text-sm opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-white whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 lg:gap-4">
              {["Vue.js", "AWS", "MongoDB"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-3 px-2 lg:px-3 text-xs lg:text-sm opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-white whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : id === 4 ? (
        /* New layout for id: 4 — text left, image right */
        <div className="flex h-full w-full">
          {/* Left side - Description */}
          <div className="flex-1 p-4 flex flex-col justify-center">
            {title && (
              <div className={cn("mb-2 font-sans font-bold text-neutral-600 dark:text-purple", titleClassName)}>
                {title}
              </div>
            )}
            <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
              {Array.isArray(description) ? (
                <ul className="list-disc pl-4 space-y-1">
                  {description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{description}</p>
              )}
            </div>
          </div>

          {/* Right side - Image */}
              {img && (
  <div className="relative w-1/2 h-full p-4 hidden md:block">
    <Image
      src={img}
      alt={typeof title === 'string' ? title : 'Bento item'}
      fill
      className={cn("object-contain rounded-lg", imgClassName)}
    />
  </div>
)}

        </div>
      ) : (
        /* Normal layout for other items */
        <div className="p-4 flex flex-col justify-between h-full space-y-4">
          {img && (
            <div className="relative w-full flex-1 h-[100px]">
              <Image
                src={img}
                alt={typeof title === 'string' ? title : 'Bento item'}
                fill
                className={cn("object-cover rounded-lg", imgClassName)}
              />
            </div>
          )}

          <div className="transition duration-200 group-hover/bento:translate-x-2">
            {title && (
              <div className={cn("mb-2 font-sans font-bold text-purple dark:text-purplepa", titleClassName)}>
                {title}
              </div>
            )}
            <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
              {description}
            </div>
          </div>

          {spareImg && (
            <div className="relative w-full h-32 mt-4">
              <Image
                src={spareImg}
                alt="spare"
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
