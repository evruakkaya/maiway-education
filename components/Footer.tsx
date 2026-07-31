"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import ContactModal from "./ContactModal";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/maiwayeducation/" },
  { label: "Whatsapp", href: "#" },
  { label: "Facebook", href: "https://www.facebook.com/share/19FNiQiHL7/?mibextid=wwXIfr" },
];

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#1A1A1A] px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:px-[80px] xl:px-[160px]">
        <div className="mx-auto w-full max-w-[1600px]">
          {/* Üst alan */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="min-w-0">
              <h2 className="text-[42px] font-normal leading-[44px] tracking-[-2px] sm:text-[52px] sm:leading-[54px] md:text-[64px] md:leading-[66px] xl:text-[80px] xl:leading-[80px] xl:tracking-[-3.2px]">
                <span className="block text-white">Geleceğini erteleme,</span>

                <span className="block text-[#797979]">
                  yolculuğun şimdi başlıyor!
                </span>
              </h2>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="inline-flex items-center justify-center rounded-[24px] border border-[#797979] bg-[#1A1A1A] px-5 py-3 text-[14px] font-normal leading-[20px] tracking-[-0.7px] text-white transition-colors hover:bg-white hover:text-black sm:px-6 sm:text-[16px] sm:leading-[24px] sm:tracking-[-1.28px]"
                    target="_blank"
                    rel="nooper noreferrer"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <Button
              variant="secondary"
              className="w-fit shrink-0"
              onClick={() => setIsContactOpen(true)}
            >
              Ücretsiz Ön Görüşme
            </Button>
          </div>

          {/* Alt alan */}
          <div className="mt-16 flex flex-col gap-6 border-t border-[#797979] pt-8 md:mt-20 md:flex-row md:items-center md:justify-between md:gap-10 md:py-10">
            <Image
              src="/images/logotype.svg"
              alt="Maiway Education"
              width={110}
              height={38}
              className="h-auto w-[100px] sm:w-[110px]"
            />

            <a
              href="mailto:info@maiway.education"
              className="inline-flex w-fit max-w-full items-center justify-center rounded-[24px] border border-[#797979] bg-[#1A1A1A] px-5 py-3 text-[14px] font-normal leading-[20px] tracking-[-0.7px] text-white transition-colors hover:bg-white hover:text-black sm:px-6 sm:text-[16px] sm:leading-[24px] sm:tracking-[-1.28px]"
            >
              <span className="break-all">info@maiway.education</span>
            </a>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}