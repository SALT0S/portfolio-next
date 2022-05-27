/* import { SwiperSlide } from "swiper/react"; */

export const SkillSection = () => {
  return (
    <section>
      <svg
        viewBox="0 0 1440 176"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-zinc-900"
      >
        <path d="M0 48L40 69.3C80 91 160 133 240 133.3C320 133 400 91 480 69.3C560 48 640 48 720 53.3C800 59 880 69 960 58.7C1040 48 1120 16 1200 5.3C1280 -5 1360 5 1400 10.7L1440 16V176H1400C1360 176 1280 176 1200 176C1120 176 1040 176 960 176C880 176 800 176 720 176C640 176 560 176 480 176C400 176 320 176 240 176C160 176 80 176 40 176H0V48Z" />
      </svg>
      <div className="bg-black dark:bg-zinc-900">
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
      </div>
    </section>
  );
};
