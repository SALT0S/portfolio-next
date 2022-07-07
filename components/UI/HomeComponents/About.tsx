import Image from "next/image";
import AboutImg from "../../../public/static/img/AboutImg.png";
import { LinkButton } from "../Button";

export const AboutSection = () => {
  return (
    <section className="relative mb-20 md:mb-0">
      <div className="bg-dark bg-black text-center dark:bg-zinc-900">
        <div className="container mx-auto max-w-[1540px] px-4 sm:px-6 md:grid md:grid-cols-5 lg:px-8">
          <div className="md:col-span-3">
            <Image
              src={AboutImg}
              layout="responsive"
              sizes="50vw"
              loading="lazy"
              alt="About image"
              placeholder="blur"
            />
          </div>

          <div className="self-center md:col-span-2">
            <h2 className="text-center text-5xl text-white">
              Know more about me
            </h2>
            <p className="py-8 text-lg text-zinc-300">
              Knowing a person is fundamental, as human beings we are destined
              to be sociable, that&apos;s why I have written a brief
              introduction about myself, if you want to know more about me you
              can check it out ;)
            </p>
            <div className="py-2 text-white">
              <LinkButton url="/about-me" text="About me" />
            </div>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1440 230"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[98%] -z-10 w-full leading-[0] dark:fill-zinc-900 md:relative"
      >
        <path d="M0 160H18.5C36.9 160 74 160 111 160C147.7 160 185 160 222 149.3C258.5 139 295 117 332 128C369.2 139 406 181 443 176C480 171 517 117 554 90.7C590.8 64 628 64 665 85.3C701.5 107 738 149 775 165.3C812.3 181 849 171 886 154.7C923.1 139 960 117 997 122.7C1033.8 128 1071 160 1108 176C1144.6 192 1182 192 1218 197.3C1255.4 203 1292 213 1329 208C1366.2 203 1403 181 1422 170.7L1440 160V0H1421.5C1403.1 0 1366 0 1329 0C1292.3 0 1255 0 1218 0C1181.5 0 1145 0 1108 0C1070.8 0 1034 0 997 0C960 0 923 0 886 0C849.2 0 812 0 775 0C738.5 0 702 0 665 0C627.7 0 591 0 554 0C516.9 0 480 0 443 0C406.2 0 369 0 332 0C295.4 0 258 0 222 0C184.6 0 148 0 111 0C73.8 0 37 0 18 0H0V160Z" />
      </svg>
    </section>
  );
};
