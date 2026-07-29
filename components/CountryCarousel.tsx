"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CountryCard from "./CountryCard";

const countries = [
  {
    id: "germany",
    name: "Almanya",
    image: "/images/almanya.png",
    description:
      "Öğrenciler, yetişkinler ve profesyoneller için Almanya genelindeki eğitim seçeneklerini keşfediyoruz.",
    color: "bg-[#E7E7E7]",
    tags: ["Dil Okulu", "Lisans", "Master"],
  },
  {
    id: "macedonia",
    name: "Makedonya",
    image: "/images/makedonya.png",
    description:
      "Makedonya’daki üniversite ve dil okulu seçeneklerini sana uygun programlarla birlikte keşfediyoruz.",
    color: "bg-[#E7E7E7]",
    tags: ["Dil Okulu", "Lisans", "Master"],
  },
  {
    id: "england",
    name: "İngiltere",
    image: "/images/ingiltere.png",
    description:
      "Öğrenciler, yetişkinler ve profesyoneller için Birleşik Krallık genelindeki kampüslerde İngilizce dil kursu seçenekleri sunuyoruz.",
    color: "bg-[#E7E7E7]",
    tags: ["Dil Okulu"],
  },
  {
    id: "italy",
    name: "İtalya",
    image: "/images/italya.png",
    description:
      "İtalya’daki eğitim programlarını, dil okullarını ve akademik fırsatları birlikte keşfediyoruz.",
    color: "bg-[#E7E7E7]",
    tags: ["Dil Okulu", "Lisans", "Master"],
  },
  {
    id: "spain",
    name: "İspanya",
    image: "/images/ispanya.png",
    description:
      "İspanya’daki dil okulları ve üniversite programları için sana özel seçenekler sunuyoruz.",
    color: "bg-[#E7E7E7]",
    tags: ["Dil Okulu"],
  },
];

const loopCountries = [...countries, ...countries, ...countries];
const initialIndex = countries.length + 2;

export default function CountryCarousel() {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
    startIndex: initialIndex,
  });

  function handleCountryClick(index: number) {
    setActiveIndex(index);
    emblaApi?.scrollTo(index);
  }

  return (
    <div
      ref={emblaRef}
      className="mt-12 overflow-hidden md:mt-16 xl:mt-20"
    >
      <div className="flex items-start">
        {loopCountries.map((country, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={`${country.id}-${index}`}
              className={`
                min-w-0
                shrink-0
                px-2
                transition-[width]
                duration-500
                ease-in-out
                w-[88vw]
                sm:w-[520px]
                lg:px-3
                ${
                  isActive
                    ? "lg:w-[664px]"
                    : "lg:w-[424px]"
                }
              `}
            >
              <CountryCard
                country={country}
                active={isActive}
                onClick={() => handleCountryClick(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}