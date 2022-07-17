import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import ImageContact from "../../../public/static/img/ContactImg.png";

const ContactSection = () => {
  return (
    <section className="container mx-auto my-10 max-w-7xl px-4 sm:px-6 md:flex lg:px-8">
      <div className="self-center">
        <h2 className="text-5xl">Let&apos;s make something great together.</h2>
        <p className="my-8 text-lg">
          If you are looking for my contact info you can find it on the next
          page, there are my personal data, and you can also contact me with a
          simple form.
        </p>
        <Link href={"/contact"} prefetch={false} passHref>
          <a className="inline-flex gap-1 font-bold transition-all hover:gap-2">
            Contact me <HiArrowNarrowRight className="self-center" />
          </a>
        </Link>
      </div>
      <div className="h-2/4 md:w-3/4">
        <Image
          src={ImageContact}
          layout="responsive"
          sizes="50vw"
          loading="lazy"
          alt="Contact image"
          placeholder="blur"
        />
      </div>
    </section>
  );
};
export default ContactSection;
