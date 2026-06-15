"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const date = new Date();
    const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.getDate();
    const getOrdinalNum = (n: number) => {
      return (
        n +
        (n > 0
          ? ["th", "st", "nd", "rd"][
              (n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10
            ]
          : "")
      );
    };
    setCurrentDate(`${weekday}, ${month} ${getOrdinalNum(day)}`);
  }, []);

  return (
    <>
      {/* Top Navigation Bar */}
      <header
        className={`w-full top-0 sticky border-b border-outline-variant dark:border-outline bg-surface dark:bg-surface z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md py-2" : "py-4"
        }`}
      >
        <nav
          className={`flex justify-between items-center px-gutter max-w-container-max-width mx-auto transition-all duration-300 ${
            isScrolled ? "py-2" : "py-4"
          }`}
        >
          <div className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed font-bold tracking-tight">
            DLCF, Anambra State 2
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-primary dark:text-primary-fixed font-bold border-b-2 border-primary font-body-md text-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors"
              href="#"
            >
              Welcome
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant font-body-md text-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors"
              href="#"
            >
              Sermons
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant font-body-md text-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors"
              href="#"
            >
              Live
            </a>
          </div>
          <a
            className="bg-primary-container text-white px-6 py-2 rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-all"
            href="https://forms.gle/8iaULSmmoSowsfUu8"
          >
            Register
          </a>
        </nav>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center relative px-margin-mobile md:px-gutter py-section-gap-mobile md:py-section-gap-desktop">
        {/* Background Imagery (Asymmetric Pattern) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-container rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-primary-fixed-dim rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Vertically Centered Hero Section */}
        <section className="relative z-10 w-full max-w-3xl mx-auto text-center space-y-8 animate-subtle-float">
          <div className="space-y-4">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight">
              Deeper Life Campus Fellowship, Anambra State 2
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
              Welcome to Histereo. We are glad you have chosen to worship with
              us as we explore the messages of hope and restoration.
            </p>
          </div>

          {/* Event Details Card */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-6 border-y border-outline-variant/30">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container">
                calendar_today
              </span>
              <span className="font-headline-sm text-[18px] text-primary">
                {currentDate || "Loading..."}
              </span>
            </div>
            <div className="hidden md:block w-px h-6 bg-outline-variant"></div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container">
                schedule
              </span>
              <span className="font-headline-sm text-[18px] text-primary">
                10:00 AM
              </span>
            </div>
            <div className="hidden md:block w-px h-6 bg-outline-variant"></div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container">
                location_on
              </span>
              <span className="font-headline-sm text-[18px] text-primary">
                DLCF Auditorium, UNIZIK, Awka, Anambra State
              </span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="pt-8">
            <a
              href="/program-guide.pdf"
              download
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                setIsPressed(false);
              }}
              onMouseDown={() => setIsPressed(true)}
              onMouseUp={() => setIsPressed(false)}
              className="group relative inline-flex items-center gap-4 bg-primary-container text-white px-10 py-5 rounded-xl font-headline-sm text-[20px] transition-all duration-300 hover:shadow-[0_10px_25px_-5px_rgba(0,33,71,0.25)]"
              style={{
                transform: isPressed
                  ? "scale(0.96)"
                  : isHovered
                    ? "scale(1.02) translateY(-2px)"
                    : "scale(1) translateY(0px)",
              }}
            >
              <span
                className="material-symbols-outlined text-[28px]"
                data-icon="description"
              >
                description
              </span>
              <span>Download Program Guide</span>
              <div className="absolute inset-0 border-2 border-secondary/0 group-hover:border-secondary/20 rounded-xl transition-all"></div>
            </a>
            <p className="mt-4 font-caption text-caption text-on-surface-variant italic">
              PDF format • 1.2 MB
            </p>
          </div>
        </section>

        {/* Aesthetic Imagery Component */}
        <div className="w-full max-w-container-max-width mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-gutter px-gutter">
          <div className="md:col-span-8 rounded-2xl overflow-hidden border border-outline-variant aspect-[16/9] relative shadow-sm">
            <Image
              fill
              className="object-cover"
              alt="A serene and minimalist wooden cross standing alone against a soft, bright, and ethereal background."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDItWvlJ5F0VxoSFcJyfOa_GcTuU7klsgGEW51qbvUEk7bPkaGD4wjge9KIF39zYt5TM4UDl6DD--hRXZLZbGn_plh4kZUbLtP10-B8U0PmBzfsPakH6jXupGjPcpvB4Y4-d0tW2RnPoH1qvT6fmIj47iL9JckQEWV5oPL7R_vsnYaIDGiBTuiWR2wDPVqxsaeJc5KNTeybngFXKD3ZGgPX2micjJEVjQVILqNrlyNttH3s5yddrC9XdOp-vKfNVmbXudMQLcQOkAkR"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-gutter">
            <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant flex-grow flex flex-col justify-center text-center">
              <span
                className="material-symbols-outlined text-secondary text-4xl mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                volunteer_activism
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                New Here?
              </h3>
              <p className="text-on-surface-variant font-body-md text-body-md">
                We have a special gift waiting for you at the welcome center.
              </p>
            </div>
            <div className="bg-secondary-container p-8 rounded-2xl border border-secondary/20 flex-grow flex flex-col justify-center text-center">
              <span className="material-symbols-outlined text-on-secondary-container text-4xl mb-4">
                notifications_active
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-secondary-container mb-2">
                Announcements
              </h3>
              <p className="text-on-secondary-container font-body-md text-body-md">
                Stay updated with our weekly community events.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Component */}
      <footer className="w-full py-section-gap-mobile md:py-16 bg-surface-container-low dark:bg-primary-container mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-gutter max-w-container-max-width mx-auto gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="font-label-md text-label-md text-primary dark:text-primary-fixed uppercase tracking-widest">
              DLCF, ANAMBRA STATE 2
            </div>
            <div className="font-caption text-caption text-on-surface dark:text-on-primary-container opacity-80">
              © 2026 DLCF. All rights reserved.
            </div>
          </div>
          <div className="flex gap-8">
            <a
              className="font-caption text-caption text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-caption text-caption text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Contact Support
            </a>
            <a
              className="font-caption text-caption text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Service Times
            </a>
          </div>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                public
              </span>
            </a>
            <a
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                mail
              </span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
