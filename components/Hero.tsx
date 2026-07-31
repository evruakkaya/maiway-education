"use client";

import Image from "next/image";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

export default function Hero() {
  const scrollToPrograms = () => {
    const section = document.getElementById("programs");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[760px] overflow-hidden lg:h-[1080px]"
    >
      <Image
        src="/images/hero-bg.png"
        alt="Maiway Education"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-x-0 top-36 z-10 mx-auto flex w-full max-w-[1000px] flex-col items-center gap-8 px-4 text-center sm:px-6 md:top-44 md:gap-10 lg:top-[268px] lg:gap-16 xl:px-0">
        <Badge>Dünyayı keşfetmeye hazır mısın? 🚀</Badge>

        <div className="flex w-full flex-col items-center gap-6 lg:gap-8">
          <h1 className="text-[42px] font-semibold leading-[46px] tracking-[-2px] text-black sm:text-[56px] sm:leading-[60px] md:text-[68px] md:leading-[72px] lg:text-[80px] lg:leading-[80px] lg:tracking-[-3.2px]">
            Senin yolun,
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            senin geleceğin.
          </h1>

          <p className="max-w-[820px] text-[17px] leading-[28px] tracking-[-0.6px] text-[#5A5A5A] sm:text-[20px] sm:leading-[32px] md:text-[22px] md:leading-[34px] lg:text-[24px] lg:leading-[36px] lg:tracking-[-1.92px]">
            Sınırları aşmak ve yeni kültürler keşfetmek için harika bir
            fırsat! Eğitim hedeflerine özel hazırladığımız yol haritasıyla,
            yurtdışı deneyimini unutulmaz ve güvenli bir yolculuğa dönüştür.
          </p>
        </div>

        <Button onClick={scrollToPrograms}>
          Keşfetmeye Başla →
        </Button>
      </div>
    </section>
  );
}