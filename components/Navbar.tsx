"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import ContactModal from "./ContactModal";

const navItems = [
  {
    title: "Ana Sayfa",
    id: "hero",
  },
  {
    title: "Programlar",
    id: "programs",
  },
  {
    title: "Ülkeler",
    id: "countries",
  },
];

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header className="mx-auto w-full max-w-[1200px]">
        <nav className="relative flex items-center justify-between rounded-[40px] bg-white py-2 pr-2 pl-6">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            aria-label="Ana sayfaya git"
            className="flex cursor-pointer shrink-0 items-center"
          >
            <Image
              src="/images/logo.svg"
              alt="Maiway Education"
              width={70}
              height={24}
              priority
            />
          </button>

          {/* Orta navigasyon */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="
                    cursor-pointer
                    text-[20px]
                    font-semibold
                    tracking-[-0.08em]
                    text-black/55
                    transition-colors
                    duration-200
                    hover:text-black
                  "
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>

          {/* Bize Ulaş */}
          <div className="ml-auto">
            <Button onClick={() => setIsContactOpen(true)}>
              Ücretsiz Ön Görüşme
            </Button>
          </div>
        </nav>
      </header>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}