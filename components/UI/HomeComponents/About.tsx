import Image from "next/image";
import Astronaut from "/public/static/gif/Astronaut.gif";
export const AboutSection = () => {
  return (
    <section className="container mx-auto my-10 max-w-[1540px] bg-black px-4 text-center text-white sm:px-6 lg:px-8">
      <div className="md:grid md:grid-cols-5">
        <div className="md:col-span-3">
          <Image
            src={Astronaut}
            layout="responsive"
            height={640}
            width={640}
            alt="Astronaut gif"
          />
        </div>

        <div className="self-center md:col-span-2">
          <h2 className="text-center text-5xl">Know more about me</h2>
          <p className="my-8 text-lg">
            Knowing a person is fundamental, as human beings we are destined to
            be sociable, that&apos;s why I have written a brief introduction
            about myself, if you want to know more about me you can check it out
            ;)
          </p>
        </div>
      </div>
    </section>
  );
};
