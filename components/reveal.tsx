"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      element.classList.add("is-visible");
      return;
    }
    const tween = gsap.fromTo(element, { autoAlpha: 0, y: 18 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.72,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 88%", once: true },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
