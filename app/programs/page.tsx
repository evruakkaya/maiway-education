import Link from "next/link";
import Navbar from "@/components/Navbar";

const languagePrograms = [
  {
    title: "Genel & Yoğun Dil Kursları",
    description:
      "Her yaşa, seviyeye ve bütçeye uygun dil okulu alternatifleri. Yeni bir ülkeyi keşfederken farklı kültürlerle tanışabilir ve yabancı dil seviyenizi geliştirebilirsiniz.",
  },
  {
    title: "Yaz Okulları ve Dönemsel Kamp Programları",
    description:
      "Yaşınıza ve dil seviyenize uygun akademik eğitim, sosyal etkinlik ve kültürel gezi içeren yaz kampı programlarını keşfedin.",
  },
  {
    title: "Sınav Hazırlık Kursları",
    description:
      "IELTS, TOEFL, SAT ve GMAT gibi uluslararası sınavlara yönelik yurt dışı hazırlık programlarıyla hedeflediğiniz skora ulaşın.",
  },
];

const degreePrograms = [
  {
    title: "Profil Analizi ve Rota Belirleme",
    description:
      "Akademik durumunuz, dil seviyeniz, ilgi alanlarınız ve bütçeniz değerlendirilerek size uygun ülke ve üniversite seçenekleri belirlenir.",
  },
  {
    title: "Okul Başvuru Süreci ve Süreç Yönetimi",
    description:
      "Okulların talep ettiği belgeler hazırlanır, başvurular tamamlanır ve kabul süreci düzenli olarak takip edilir.",
  },
  {
    title: "Burs Başvuru Danışmanlığı",
    description:
      "Üniversitelerin ve ülkelerin sunduğu burs olanakları araştırılır, uygun burs programları için başvuru süreci yönetilir.",
  },
  {
    title: "Vize Başvuru Danışmanlığı",
    description:
      "Okul kabulünün ardından vize evrakları hazırlanır ve başvuru sürecinin doğru şekilde ilerlemesi sağlanır.",
  },
  {
    title: "Uçak Bileti ve Sigorta",
    description:
      "Sağlık ve seyahat sigortası seçenekleriyle birlikte uçuş planlaması konusunda gerekli yönlendirme sağlanır.",
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      {/* Navbar */}
      <div className="mx-auto w-full max-w-[1200px] px-6 pt-5">
        <Navbar />
      </div>

      {/* Sayfa içeriği */}
      <section className="mx-auto w-full max-w-[1280px] px-10 py-24">
        <Link
          href="/"
          className="inline-flex text-[16px] text-[#5A5A5A] transition-colors hover:text-black"
        >
          ← Ana Sayfaya Geri Dön
        </Link>

        {/* Sayfa başlığı */}
        <div className="mt-20">
          <span className="inline-flex rounded-full border border-[#E7E7E7] bg-white px-3 py-1 text-[16px] text-[#5A5A5A]">
            Programlar
          </span>

          <h1 className="mt-6 max-w-[820px] text-[64px] font-semibold leading-[64px] tracking-[-3px] text-black">
            Geleceğin için doğru programı birlikte seçelim.
          </h1>

          <p className="mt-6 max-w-[720px] text-[22px] leading-[34px] tracking-[-1px] text-[#5A5A5A]">
            Dil eğitiminden üniversite başvurularına kadar tüm süreci hedeflerin
            doğrultusunda planlıyor ve adım adım yönetiyoruz.
          </p>
        </div>

        {/* Program kolonları */}
        <div className="mt-[120px] grid grid-cols-1 gap-[100px] lg:grid-cols-2">
          {/* Sol kolon */}
          <div>
            <h2 className="text-[32px] font-semibold leading-[38px] tracking-[-1.6px] text-black">
              Yurtdışı Dil Okulları
            </h2>

            <div className="mt-10 flex flex-col gap-10">
              {languagePrograms.map((program) => (
                <article
                  key={program.title}
                  className="border-b border-[#E4E4E4] pb-10"
                >
                  <h3 className="text-[18px] font-semibold leading-[26px] text-[#0053F1]">
                    {program.title}
                  </h3>

                  <p className="mt-3 max-w-[520px] text-[18px] leading-[29px] tracking-[-0.7px] text-[#5A5A5A]">
                    {program.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Sağ kolon */}
          <div>
            <h2 className="text-[32px] font-semibold leading-[38px] tracking-[-1.6px] text-black">
              Lisans ve Yüksek Lisans Koçluğu
            </h2>

            <div className="mt-10 flex flex-col gap-10">
              {degreePrograms.map((program) => (
                <article
                  key={program.title}
                  className="border-b border-[#E4E4E4] pb-10"
                >
                  <h3 className="text-[18px] font-semibold leading-[26px] text-[#0053F1]">
                    {program.title}
                  </h3>

                  <p className="mt-3 max-w-[520px] text-[18px] leading-[29px] tracking-[-0.7px] text-[#5A5A5A]">
                    {program.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}