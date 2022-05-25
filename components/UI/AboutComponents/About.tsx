import Image from "next/image";
import Profile from "/public/img/profile.jpg";

export const About = () => {
  return (
    <section className="container mx-auto grid max-w-7xl gap-7 px-4 pt-10 sm:px-6 md:grid-cols-2 lg:px-8">
      <article>
        <h1 className="text-7xl font-semibold leading-snug">
          <span className="text-8xl font-bold">Jose</span>
          <br />
          Sanchez Saltos
        </h1>

        <h2 className="my-5 text-2xl font-semibold">About Me</h2>

        <div>
          <p className="my-4 text-lg">
            I was born in Manabí - Portoviejo, since I was a kid I was always
            interested in technology, but it was not until I was 8 years old
            that I had my first computer and it was the first time I tried the
            internet.
          </p>

          <p className="my-4 mx-5 text-2xl font-bold italic">
            An unexamined life is not worth living. life is deprived of meaning.
            To become fully human means to use our highly developed faculty of
            thought to raise our existence above that of mere beasts.
          </p>

          <p className="my-4 text-lg">
            The Internet changed everything. You can do anything, it is thanks
            to the internet that I know the things that I know and the things
            that I will continue to learn, with the internet I have not stopped
            learning and there is still a lot of information out there.
          </p>

          <p className="my-4 text-lg">
            At the time of this writing, I am continuing my studies, at the
            University of Guayaquil, I am a software engineering student and I
            study other programming languages that I see interesting.
          </p>
        </div>
      </article>
      <div>
        <Image
          src={Profile}
          alt="Jose Sanchez Saltos"
          layout="responsive"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </section>
  );
};
