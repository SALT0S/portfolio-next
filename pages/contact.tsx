import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ContactData } from "../components/Constants";
import { Layout } from "../components/Layout";
const DynamicContactForm = dynamic(
  () => import("../components/UI/Contact/Form"),
  {
    suspense: true,
  }
);

const ContactPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Contact"
        description="If you are looking for my contact information you can find it here, there are my data, my email, my phone number, and my LinkedIn page, you can also contact me with a simple form that I made."
        openGraph={{
          url: "https://joseschz.com/contact",
          title: "Contact | Jose Sanchez Saltos",
          description:
            "If you are looking for my contact information you can find it here, there are my data, my email, my phone number, and my LinkedIn page, you can also contact me with a simple form that I made.",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Contact, Jose, Sanchez, Saltos, Software, Web Developer, Front End, Portfolio, Jose Sanchez S, Jose Sanchez Saltos",
          },
        ]}
      />
      <Suspense>
        <Layout>
          <section className="container mx-auto my-10 grid max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              {ContactData.map((data, index) => (
                <div key={index} className="content">
                  <a
                    href={data.link}
                    aria-label={data.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-8 p-3 hover:bg-gray-100 dark:hover:bg-zinc-900"
                  >
                    <data.icon
                      className="h-7 w-7 self-center"
                      aria-hidden="true"
                    />
                    <p className="text-lg">{data.title}</p>
                  </a>
                  <hr />
                </div>
              ))}

              <article>
                <h2 className="my-5 text-lg font-bold">About Me</h2>
                <p className="my-4">
                  I was born in Manabi - Portoviejo, since I was a kid I was
                  always interested in technology, but it was not until I was 8
                  years old that I had my first computer and it was the first
                  time I tried the internet.{" "}
                  <Link href={"/about-me"} prefetch={false} passHref>
                    <a className="inline-flex gap-1 font-bold transition-all hover:gap-2">
                      Read more
                      <HiArrowNarrowRight className="self-center" />
                    </a>
                  </Link>
                </p>
              </article>
            </div>

            <div>
              <h1 className="mb-4 text-lg font-bold">Contact Me</h1>

              <DynamicContactForm />
            </div>
          </section>
        </Layout>
      </Suspense>
    </>
  );
};

export default ContactPage;
