import { AiTwotoneMail } from "react-icons/ai";
import { FaPhone, FaLinkedin } from "react-icons/fa";
import { LinkButton } from "../Button";
import { Form } from "./Form";

export const Contact = () => {
  return (
    <section className="container mx-auto my-10 grid max-w-7xl gap-7 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
      <div>
        <div>
          <a
            href="mailto:josesansalt@gmail.com"
            rel="noopener noreferrer"
            className="flex gap-8 p-3 hover:bg-gray-100 dark:hover:bg-zinc-900"
          >
            <AiTwotoneMail className="h-7 w-7 self-center" />
            <p className="text-lg">josesansalt@gmail.com</p>
          </a>
          <hr />
          <a
            href="tel:593 983595470"
            rel="noopener noreferrer"
            className="flex gap-8 p-3 hover:bg-gray-100 dark:hover:bg-zinc-900"
          >
            <FaPhone className="h-7 w-7 self-center" />
            <p className="text-lg">+593 98 359 5470</p>
          </a>
          <hr />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sanchez-saltos-j/"
            rel="noopener noreferrer"
            className="flex gap-8 p-3 hover:bg-gray-100 dark:hover:bg-zinc-900"
          >
            <FaLinkedin className="h-7 w-7 self-center" />
            <p className="text-lg">LinkedIn</p>
          </a>
        </div>

        <article>
          <h2 className="my-5 text-lg font-bold">About Me</h2>
          <p className="my-4">
            I was born in Manabí - Portoviejo, since I was a kid I was always
            interested in technology, but it was not until I was 8 years old
            that I had my first computer and it was the first time I tried the
            internet. <LinkButton url="/about-me" text="Read more" />
          </p>
        </article>
      </div>

      <div>
        <h1 className="mb-4 text-lg font-bold">Contact Me</h1>
        <Form />
      </div>
    </section>
  );
};
