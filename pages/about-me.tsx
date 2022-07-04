import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { Layout } from "../components/Layout/Layout";
import { GET_ALL_ABOUT } from "../graphql/queries";
import { IAbout } from "../interfaces";
import { gqlClient } from "../lib/graphql-client";

interface Props {
  about: IAbout;
}

const AboutPage: NextPage<Props> = ({ about }) => {
  return (
    <Layout>
      <NextSeo
        title="About"
        description={about.description}
        openGraph={{
          type: "profile",
          url: "https://joseschz.com/about-me",
          title: "About | Jose Sanchez Saltos",
          description: about.description,
          profile: {
            firstName: "Jose",
            lastName: "Sanchez Saltos",
            username: "joseschz",
            gender: "male",
          },
          images: [
            {
              url: about.author.image.data.attributes.url,
              width: about.author.image.data.attributes.width,
              height: about.author.image.data.attributes.height,
              alt: about.author.author_title,
            },
          ],
        }}
      />
      <section className="container mx-auto my-10 grid max-w-7xl gap-7 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <article>
          <h1 className="text-7xl font-semibold leading-snug">
            <span className="text-8xl font-bold">Jose</span>
            <br />
            Sanchez Saltos
          </h1>

          <h2 className="my-5 text-2xl font-semibold">About Me</h2>

          <div
            className="text-about text-post text-lg"
            dangerouslySetInnerHTML={{
              __html: about.content,
            }}
          />
        </article>

        <div className="block">
          <Image
            src={about.author.image.data.attributes.url}
            alt={about.author.author_title}
            layout="responsive"
            width={about.author.image.data.attributes.width}
            height={about.author.image.data.attributes.height}
            objectFit="cover"
            sizes="(max-width: 640px) 100vw, 640px"
            className="rounded-lg"
            priority={true}
          />
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: aboutData } = await gqlClient.query({
    query: GET_ALL_ABOUT,
  });

  const about: IAbout = aboutData.about.data.attributes;

  return {
    props: {
      about,
    },
  };
};

export default AboutPage;
