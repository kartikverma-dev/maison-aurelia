import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, ArrowRight, MoveUpRight } from "lucide-react";
import { projects, archiveItems } from "@/lib/content";
import { MagneticLink } from "@/components/magnetic-link";
import { Reveal } from "@/components/reveal";
import { InquiryForm } from "@/components/inquiry-form";

export default function HomePage() {
  return (
    <main>
      <section className="hero-section" id="top">
        <div className="hero-image-wrap" aria-label="Sculptural contemporary architecture">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=88"
            alt="Sculptural modern residence framed by warm stone and natural light"
            width={2400}
            height={1350}
            priority
            fetchPriority="high"
            unoptimized
            className="hero-image"
          />
          <div className="hero-image-shade" />
        </div>
        <div className="hero-copy page-container">
          <Reveal>
            <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> Independent architecture practice · Est. 2024</p>
            <h1>Spaces that<br /><em>hold time.</em></h1>
            <div className="hero-bottom">
              <p className="hero-intro">An ongoing study of light, enduring minerals, and the quiet poetry of the built environment.</p>
              <a className="round-link hero-down" href="#selected-works" aria-label="Scroll to selected works"><ArrowDownRight size={20} strokeWidth={1.4} /></a>
            </div>
          </Reveal>
        </div>
        <div className="hero-caption mono"><span>FIG. 01</span><span>HOUSE OF STILLNESS · 2026</span><span>28° 37′ N / 77° 13′ E</span></div>
      </section>

      <section className="intro-strip page-container section-pad">
        <p className="eyebrow">01 / The practice</p>
        <div className="intro-content">
          <Reveal>
            <h2>Architecture is an<br /><em>act of attention.</em></h2>
          </Reveal>
          <Reveal>
            <div className="intro-text">
              <p>Every structure is an unspoken dialogue between natural light, enduring minerals, and the passage of human time.</p>
              <p className="muted-copy">Maison Aurelia is an independent practice and living archive devoted to spaces that feel inevitable: grounded in place, precise in detail, and generous in the way they hold everyday life.</p>
              <a className="text-link" href="#critical-text">Read our point of view <ArrowUpRight size={16} /></a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="works-section section-pad" id="selected-works">
        <div className="page-container">
          <div className="section-heading">
            <div><p className="eyebrow">02 / Selected works</p><h2>Forms of <em>quiet.</em></h2></div>
            <p className="section-note">A small collection of spaces shaped by<br className="desktop-break" /> context, craft, and a sense of permanence.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal key={project.id} className={`project-card project-card-${index + 1}`}>
                <a className="project-image-link" href="#archive" aria-label={`Explore ${project.title} in the archive`}>
                  <div className="project-image-frame">
                    <Image src={project.image} alt={project.alt} width={1200} height={1500} unoptimized className="project-image" />
                    <span className="project-index mono">0{index + 1}</span>
                    <span className="project-open"><ArrowUpRight size={20} strokeWidth={1.3} /></span>
                  </div>
                  <div className="project-meta">
                    <div><h3>{project.title}</h3><p>{project.location}</p></div>
                    <span className="project-year mono">{project.year}</span>
                  </div>
                  <p className="project-type">{project.type}</p>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="works-foot">
            <span className="mono">SELECTED MONOGRAPHS · 2024—2026</span>
            <a className="text-link" href="#archive">View the archive <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="critical-section section-pad" id="critical-text">
        <div className="critical-image">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85"
            alt="Quiet interior with natural stone, soft daylight, and carefully considered furniture"
            width={1800}
            height={1400}
            unoptimized
            className="critical-photo"
          />
          <span className="image-stamp mono">STUDY 04 / MATERIAL & LIGHT</span>
        </div>
        <div className="critical-copy">
          <p className="eyebrow">03 / Critical text</p>
          <Reveal>
            <h2>Less, but<br /><em>with intention.</em></h2>
            <blockquote>“A room is not completed by what is added to it, but by what it allows us to notice.”</blockquote>
            <p className="muted-copy critical-description">We work from the outside in and the inside out. The ground informs the plan; the light edits the volume; the hand leaves its trace in every junction. What remains is a considered balance between permanence and the ordinary rituals of living.</p>
            <MagneticLink href="#contact" className="button button-dark">Discuss a project <MoveUpRight size={16} /></MagneticLink>
          </Reveal>
        </div>
      </section>

      <section className="archive-section section-pad" id="archive">
        <div className="page-container">
          <div className="section-heading archive-heading">
            <div><p className="eyebrow">04 / The archive</p><h2>Notes from the <em>field.</em></h2></div>
            <p className="section-note">Fragments, material studies, and<br className="desktop-break" /> observations gathered along the way.</p>
          </div>
          <div className="archive-list">
            {archiveItems.map((item) => (
              <a href="#contact" className="archive-row" key={item.number}>
                <span className="archive-number mono">{item.number}</span>
                <span className="archive-title">{item.title}</span>
                <span className="archive-kind">{item.kind}</span>
                <span className="archive-date mono">{item.date}</span>
                <span className="archive-arrow"><ArrowUpRight size={18} strokeWidth={1.4} /></span>
              </a>
            ))}
          </div>
          <p className="archive-footnote mono">ARCHIVE IN PROGRESS — UPDATED SEASONALLY</p>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="page-container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">05 / Colophon & inquiries</p>
            <Reveal>
              <h2>Let’s make<br /><em>room for meaning.</em></h2>
              <p className="muted-copy contact-intro">For commissions, collaborations, or a thoughtful conversation about place, we would be glad to hear from you.</p>
              <a className="contact-email" href="mailto:studio@maisonaurelia.studio">studio@maisonaurelia.studio <ArrowUpRight size={18} /></a>
            </Reveal>
          </div>
          <InquiryForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-container footer-main">
          <a href="#top" className="wordmark footer-wordmark"><span className="wordmark-mark">M<span>A</span></span><span className="wordmark-name">MAISON<br />AURELIA</span></a>
          <p className="footer-statement">Architecture & Spatial<br />Monograph 2024—2026</p>
          <div className="footer-coordinates mono"><span>28° 37′ N</span><span>77° 13′ E</span><span>NEW DELHI · INDIA</span></div>
          <a className="back-top mono" href="#top">BACK TO TOP <ArrowUpRight size={14} /></a>
        </div>
        <div className="page-container footer-bottom mono"><span>© MAISON AURELIA 2026</span><span>DESIGNED WITH INTENTION</span><span>ALL SPACES CONSIDERED</span></div>
      </footer>
    </main>
  );
}
