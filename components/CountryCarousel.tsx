"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CountryCard from "./CountryCard";

const countries = [
  {
    id: "germany",
    name: "Almanya",
    image: "/images/almanya.jpeg",
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
    image: "/images/ingiltere.jpeg",
    description:
      "Öğrenciler, yetişkinler ve profesyoneller için Birleşik Krallık genelindeki kampüslerde İngilizce dil kursu seçenekleri sunuyoruz.",
    color: "bg-[#E7E7E7]",
    tags: ["Dil Okulu"],
  },
  {
    id: "italy",
    name: "İtalya",
    image: "/images/italya.jpeg",
    description:
      "İtalya’daki eğitim programlarını, dil okullarını ve akademik fırsatları birlikte keşfediyoruz.",
    color: "bg-[#E7E7E7]",
    tags: ["Dil Okulu", "Lisans", "Master"],
  },
  {
    id: "spain",
    name: "İspanya",
    image: "/images/ispanya.jpeg",
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
    duration: 30,
  });

  const updateActiveIndex = useCallback(() => {
    if (!emblaApi) return;

    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateActiveIndex();

    emblaApi.on("select", updateActiveIndex);
    emblaApi.on("reInit", updateActiveIndex);

    return () => {
      emblaApi.off("select", updateActiveIndex);
      emblaApi.off("reInit", updateActiveIndex);
    };
  }, [emblaApi, updateActiveIndex]);

  const handleCountryClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;

      setActiveIndex(Index);
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const scrollPrevious = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative mt-12 md:mt-16 xl:mt-20">
      {/* Oklar */}
      <div className="mb-6 flex items-center justify-end gap-3 px-4 md:px-0">
        <button
          type="button"
          onClick={scrollPrevious}
          aria-label="Önceki ülke"
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-[#E7E7E7]
            bg-white
            text-[22px]
            text-black
            transition-all
            duration-200
            hover:border-black
            hover:bg-black
            hover:text-white
            active:scale-95
          "
        >
          ←
        </button>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Sonraki ülke"
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-[#E7E7E7]
            bg-white
            text-[22px]
            text-black
            transition-all
            duration-200
            hover:border-black
            hover:bg-black
            hover:text-white
            active:scale-95
          "
        >
          →
        </button>
      </div>

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden">
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
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  will-change-[width]
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
    </div>
  );
}