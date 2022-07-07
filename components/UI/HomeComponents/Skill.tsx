import Image from "next/image";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { SkillData } from "../../../interfaces";

interface SkillsProps {
  skills: SkillData[];
}
export const SkillSection: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="relative mt-20">
      <svg
        viewBox="0 0 1440 175"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[98%] w-full leading-[0] dark:fill-zinc-900 md:relative"
      >
        <path d="M0 48L40 69.3C80 91 160 133 240 133.3C320 133 400 91 480 69.3C560 48 640 48 720 53.3C800 59 880 69 960 58.7C1040 48 1120 16 1200 5.3C1280 -5 1360 5 1400 10.7L1440 16V176H1400C1360 176 1280 176 1200 176C1120 176 1040 176 960 176C880 176 800 176 720 176C640 176 560 176 480 176C400 176 320 176 240 176C160 176 80 176 40 176H0V48Z" />
      </svg>

      <div className="bg-black pb-8 dark:bg-zinc-900">
        <div className="container mx-auto max-w-[1540px] px-4 pb-10 text-center sm:px-6 lg:px-8">
          <div className="md:mx-auto md:w-2/3">
            <h2 className="text-5xl text-white">Skillset</h2>

            <p className="my-5 text-lg text-zinc-300">
              Some of the technologies I&apos;ve worked with and I know how they
              work, there are still more technologies to add but I&apos;m still
              in the learning process with them.
            </p>
          </div>
        </div>

        <Swiper
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2.5,
            },
            "@0.75": {
              slidesPerView: 3.5,
            },
            "@1.00": {
              slidesPerView: 4.5,
            },
            "@1.50": {
              slidesPerView: 5.5,
            },
          }}
          modules={[Autoplay]}
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill.id} className="text-center">
              <div className="relative mx-auto h-28 w-28">
                <Image
                  src={skill.image.data.attributes.url}
                  alt={skill.title}
                  layout="responsive"
                  width={112}
                  height={112}
                  loading="lazy"
                  sizes="(max-width: 767px) 112px"
                  className="rounded-full"
                />
              </div>
              <p className="pt-2 text-center text-lg text-white">
                {skill.title}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
