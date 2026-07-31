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
        mx-auto
        min-w-0
        cursor-pointer
        transition-[width]
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        w-full
        ${
          active
            ? "lg:w-[640px]"
            : "lg:w-[400px]"
        }
      `}
    >
      <div
        className={`
          relative
          w-full
          overflow-hidden
          rounded-[12px]
          transition-[height]
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          h-[420px]
          sm:h-[480px]
          ${
            active
              ? "lg:h-[560px]"
              : "lg:h-[400px]"
          }
        `}
      >
        <Image
          src={country.image}
          alt={country.name}
          fill
          sizes="
            (max-width: 639px) 88vw,
            (max-width: 1023px) 520px,
            640px
          "
          className="object-cover"
        />

        <div
          className="
            absolute
            left-3
            top-3
            z-10
            flex
            max-w-[calc(100%-24px)]
            flex-wrap
            items-center
            gap-2
            sm:left-4
            sm:top-4
          "
        >
          {country.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-[24px]
                bg-white
                px-3
                py-2
                text-[12px]
                font-normal
                leading-[18px]
                text-[#5A5A5A]
                sm:px-4
                sm:text-[14px]
                sm:leading-[20px]
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 w-full">
        <h3
          className="
            text-[24px]
            font-semibold
            leading-[29px]
            tracking-[-0.96px]
            text-black
          "
        >
          {country.name}
        </h3>

        <div
          className={`
            grid
            transition-[grid-template-rows,opacity,margin]
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              active
                ? "mt-6 grid-rows-[1fr] opacity-100"
                : "mt-0 grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <p
              className="
                max-w-[560px]
                text-[16px]
                font-normal
                leading-[25px]
                tracking-[-0.6px]
                text-[#5A5A5A]
                sm:text-[18px]
                sm:leading-[27px]
              "
            >
              {country.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}