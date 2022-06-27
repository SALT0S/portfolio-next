import { LinkButton } from "../Button";
import { Form } from "./Form";

export const Contact = () => {
  return (
    <section className="container mx-auto my-10 grid max-w-7xl gap-7 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
      <div>
        <p>Contact data</p>

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
