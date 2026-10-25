"use client";

import { useRef, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode };

export function MagneticLink({ children, className = "", ...props }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(hover: none)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    el.style.transform = `translate(${dx * 4}px, ${dy * 4}px) scale(1.03)`;
  }

  function handleLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return <a ref={ref} className={`magnetic-link ${className}`} onMouseMove={handleMove} onMouseLeave={handleLeave} {...props}>{children}</a>;
}
