import Image from "next/image";

type Country = {
  id: string;
  name: string;
  image: string;
  description: string;
  color: string;
  tags: string[];
};

type CountryCardProps = {
  country: Country;
  active: boolean;
  onClick: () => void;
};

export default function CountryCard({
  country,
  active,
  onClick,
}: CountryCardProps) {
  return (
    <article
      onClick={onClick}
      className={`
        w-full
        min-w-0
        cursor-pointer
        transition-all
        duration-500
        ease-in-out
      `}
    >
      <div
        className={`
          relative
          h-[420px]
          w-full
          overflow-hidden
          rounded-[12px]
          transition-all
          duration-500
          ease-in-out
          sm:h-[480px]
          ${
            active
              ? "lg:h-[500px]"
              : "lg:h-[400px]"
          }
        `}
      >
        <Image
          src={country.image}
          alt={country.name}
          fill
          sizes="(max-width: 639px) 88vw, (max-width: 1023px) 520px, 640px"
          className="object-cover"
        />

        <div className="absolute left-3 top-3 z-10 flex max-w-[calc(100%-24px)] flex-wrap items-center gap-2 sm:left-4 sm:top-4">
          {country.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[24px] bg-white px-3 py-2 text-[12px] font-normal leading-[18px] text-[#5A5A5A] sm:px-4 sm:text-[14px] sm:leading-[20px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 px-1 sm:mt-6">
        <h3 className="text-[24px] font-semibold leading-[29px] tracking-[-0.96px] text-black">
          {country.name}
        </h3>

        {active && (
          <p className="mt-4 text-[16px] font-normal leading-[25px] tracking-[-0.6px] text-[#5A5A5A] sm:mt-6 sm:text-[18px] sm:leading-[27px]">
            {country.description}
          </p>
        )}
      </div>
    </article>
  );
}