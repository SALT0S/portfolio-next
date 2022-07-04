import type { NextPage } from "next";

import contactData from "../components/constants/ContactData";

// Components
import { Layout } from "../components/Layout";
import { LinkButton, Form } from "../components/UI";

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <section className="container mx-auto my-10 grid max-w-7xl gap-7 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          {contactData.map((data, index) => (
            <div key={index} className="content">
              <a
                href={data.link}
                aria-label={data.title}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-8 p-3 hover:bg-gray-100 dark:hover:bg-zinc-900"
              >
                <data.icon className="h-7 w-7 self-center" aria-hidden="true" />
                <p className="text-lg">{data.title}</p>
              </a>
              <hr />
            </div>
          ))}

          <article>
            <h2 className="my-5 text-lg font-bold">About Me</h2>
            <p className="my-4">
              I was born in Manabi - Portoviejo, since I was a kid I was always
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
    </Layout>
  );
};

export default ContactPage;
