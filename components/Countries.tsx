import CountryCarousel from "./CountryCarousel";

export default function Countries() {
  return (
    <section
      id="countries"
      className="overflow-hidden bg-[#F9F9F9] px-4 pb-20 pt-20 sm:px-6 md:px-10 md:pb-28 md:pt-28 lg:px-[80px] xl:px-[160px] xl:pb-[166px] xl:pt-[162px]"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <span className="inline-flex w-fit shrink-0 items-center justify-center rounded-[24px] border border-[#E7E7E7] bg-[#FEFFFF] px-3 py-1 text-[14px] font-normal leading-[21px] tracking-[-0.8px] text-[#5A5A5A] md:text-[16px] md:leading-[24px] lg:text-[18px] lg:leading-[27px]">
            Ülkeler
          </span>

          <div className="w-full lg:max-w-[800px]">
            <h2 className="text-[42px] font-semibold leading-[44px] tracking-[-2px] text-black sm:text-[52px] sm:leading-[54px] md:text-[64px] md:leading-[66px] xl:text-[80px] xl:leading-[80px] xl:tracking-[-3.2px]">
              Hayalindeki ülkeyi seç.
            </h2>

            <p className="mt-6 max-w-[720px] text-[17px] font-normal leading-[27px] tracking-[-0.8px] text-[#5A5A5A] md:mt-8 md:text-[20px] md:leading-[31px] xl:text-[24px] xl:leading-[36px] xl:tracking-[-1.92px]">
              Uluslararası eğitimde güvenilir ortağınız; sizi önde gelen
              üniversitelerle buluşturuyor ve yolculuğunuzun her adımında
              destekliyoruz.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16 xl:mt-20">
        <CountryCarousel />
      </div>
    </section>
  );
}