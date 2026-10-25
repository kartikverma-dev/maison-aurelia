"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("maison-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const nextTheme = saved === "dark" || saved === "light" ? saved : preferred;
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    }
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Maison Aurelia home">
          <span className="wordmark-mark">M<span>A</span></span>
          <span className="wordmark-name">MAISON<br />AURELIA</span>
        </a>
        <nav className={`nav-island ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          <a href="#selected-works" onClick={closeMenu}>Selected works</a>
          <a href="#critical-text" onClick={closeMenu}>Point of view</a>
          <a href="#archive" onClick={closeMenu}>Archive</a>
          <a href="#contact" onClick={closeMenu}>Inquiries</a>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={() => {
            const nextTheme = theme === "light" ? "dark" : "light";
            localStorage.setItem("maison-theme", nextTheme);
            setTheme(nextTheme);
          }} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
            {theme === "light" ? <Moon size={16} strokeWidth={1.5} /> : <Sun size={16} strokeWidth={1.5} />}
          </button>
          <button className="mobile-menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>
      <div id="main-content">{children}</div>
      <div className="coordinate-watermark mono" aria-hidden="true">
        <span>MA / 26</span><span className="watermark-track"><span style={{ width: `${progress}%` }} /></span><span>{String(Math.round(progress)).padStart(3, "0")}%</span>
      </div>
      <div className="side-coordinate mono" aria-hidden="true">28° 37′ 00″ N &nbsp; / &nbsp; 77° 13′ 00″ E</div>
    </>
  );
}
