import Image from "next/image";
import { LinkButton } from "../Button";
import CatGif from "/public/static/gif/CatGif.gif";

export const ContactSection = () => {
  return (
    <section className="container mx-auto my-10 max-w-7xl px-4 sm:px-6 md:flex lg:px-8">
      <div className="self-center">
        <h2 className="text-5xl">Let&apos;s make something great together.</h2>
        <p className="my-8 text-lg">
          If you are looking for my contact info you can find it on the next
          page, there are my personal data, and you can also contact me with a
          simple form.
        </p>
        <LinkButton url="/contact" text="Contact me" />
      </div>
      <div className="h-2/4 md:w-3/4">
        <Image src={CatGif} layout="responsive" alt="Cat Gif" />
      </div>
    </section>
  );
};
