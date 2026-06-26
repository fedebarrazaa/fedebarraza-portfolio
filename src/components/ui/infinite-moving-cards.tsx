"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

// Tipado corregido a React.ReactNode para aceptar JSX
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { icon: React.ReactNode }[]; // MODIFIQUE, ANTES ERA UN string PERO LE PASE React.ReactNode PARA QUE SEPA QUE ESE UN ICONO Y NO UN TEXTO
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  // ... (lógica de addAnimation, getDirection, getSpeed se mantiene igual)
  useEffect(() => { addAnimation(); }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
      getDirection(); getSpeed(); setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-direction", direction === "left" ? "forwards" : "reverse");
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div ref={containerRef} className={cn("scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]", className)}>
      <ul ref={scrollerRef} className={cn("flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4", start && "animate-scroll", pauseOnHover && "hover:[animation-play-state:paused]")}>
        {items.map((item, index) => (
          <li
            className="relative w-[150px] max-w-full shrink-0 rounded-2xl  bg-[linear-gradient(transparent)] px-6 py-6 md:w-[200px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]" 
            key={index} // Uso de index porque item.icon es JSX {/*linear-gradient antes de transparent era: 180deg,#fafafa,#f5f5f5*; tambien le saque el border border-zinc-700 va entre medio de 2x1 y bg/}
          >
            <blockquote>
              <div className="relative z-20 flex flex-row items-center justify-center text-center">
                <span className="flex flex-col items-center justify-center gap-2 text-neutral-700 dark:text-gray-300">
                  {/* Icono renderizado */}
                  <span className="text-3xl md:text-4xl">{item.icon}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
