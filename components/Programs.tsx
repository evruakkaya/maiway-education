import Button from "./ui/Button";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Dil Okulları",
    image: "/images/dil-okullari.png",
    description:
      "Her yaşa, seviyeye ve bütçeye uygun dil okulu alternatifleri. Hem yeni bir ülkeyi keşfedip, hem yeni kültürlerle tanışacağınız hem de dilinizi geliştireceğiniz harika programlar sizi bekliyor.",
  },
  {
    title: "Lisans",
    image: "/images/lisans.png",
    description:
      "Hayalindeki lisans eğitimini erteleme! Size en uygun programı yurt dışı burs seçenekleriyle birlikte keşfedelim.",
  },
  {
    title: "Yüksek Lisans",
    image: "/images/yuksek-lisans.png",
    description:
      "Alanınızda küresel vizyonunuzu güçlendirecek Master programlarını yurt dışı danışmanlığımız sayesinde keşfedin.",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="bg-[#F9F9F9] px-4 py-20 sm:px-6 md:px-10 md:py-28 lg:px-[80px] xl:px-[160px] xl:py-[146px]"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[80px] xl:gap-[120px]">
          <span className="inline-flex w-fit shrink-0 items-center justify-center rounded-[24px] border border-[#E7E7E7] bg-[#FEFFFF] px-3 py-1 text-[14px] font-normal leading-[21px] tracking-[-0.8px] text-[#5A5A5A] md:text-[16px] md:leading-[24px] xl:text-[18px] xl:leading-[27px] xl:tracking-[-1.44px]">
            Programlar
          </span>

          <div className="flex min-w-0 flex-1 flex-col gap-8 lg:flex-row lg:items-end lg:gap-12 xl:gap-[120px]">
            <div className="min-w-0 flex-1">
              <h2 className="text-[42px] font-semibold leading-[44px] tracking-[-2px] text-black sm:text-[52px] sm:leading-[54px] md:text-[64px] md:leading-[66px] xl:text-[80px] xl:leading-[80px] xl:tracking-[-3.2px]">
                Sana en uygun programı bul.
              </h2>

              <p className="mt-6 max-w-[760px] text-[17px] font-normal leading-[27px] tracking-[-0.8px] text-[#5A5A5A] md:mt-8 md:text-[20px] md:leading-[31px] xl:text-[24px] xl:leading-[36px] xl:tracking-[-1.92px]">
                Geleceğini küresel bir vizyonla inşa etmen için dil
                okullarından yüksek lisansa uzanan en prestijli eğitim
                programları burada.
              </p>
            </div>

            <Link href="/programs" className="w-fit shrink-0">
              <Button>Tümünü Gör →</Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 xl:mt-20 xl:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="flex min-w-0 flex-col overflow-hidden rounded-[16px] bg-white p-2 shadow-[0_0_16px_rgba(0,0,0,0.04)]"
            >
              <div className="relative h-[260px] w-full shrink-0 overflow-hidden rounded-[8px] sm:h-[300px] xl:h-[320px]">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col items-start gap-4 px-4 py-5">
                <h3 className="text-[22px] font-semibold leading-[28px] tracking-[-1.2px] text-black xl:text-[24px] xl:leading-[29px] xl:tracking-[-1.92px]">
                  {program.title}
                </h3>

                <p className="text-[16px] font-normal leading-[25px] tracking-[-0.6px] text-[#5A5A5A] xl:text-[18px] xl:leading-[27px] xl:tracking-[-1.44px]">
                  {program.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}