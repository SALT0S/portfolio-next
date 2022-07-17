import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Layout } from "../../components/Layout";
import { GET_ALL_FEATURED_POSTS } from "../../graphql/queries";
import { IPost, IPosts } from "../../interfaces";
import { gqlClient } from "../../lib/graphql-client";
const DynamicPostCard = dynamic(
  () => import("../../components/UI/Blog/PostCard"),
  {
    suspense: true,
  }
);
interface Props {
  postsFeatured: IPost[];
}

const featured: NextPage<Props> = ({ postsFeatured }) => {
  return (
    <>
      <NextSeo
        title="Featured Articles"
        description="Here you can find some featured articles that I write for my blog in my free time, here you can find about NextJS and some stuff that I think. I hope you will enjoy them."
        openGraph={{
          url: "https://joseschz.com/blog/featured",
          title: "Featured Articles | Jose Sanchez Saltos",
          description:
            "Here you can find some featured articles that I write for my blog in my free time, here you can find about NextJS and some stuff that I think. I hope you will enjoy them.",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: `Html, Css, Javascript, Nextjs, React, Jose, Sanchez, Saltos, Software, Web Developer, Front End, Portfolio, Jose Sanchez S, Jose Sanchez Saltos`,
          },
        ]}
      />
      <Suspense>
        <Layout>
          <section className="container mx-auto my-10 max-w-[1540px] px-4  sm:px-6 lg:px-8">
            <div className="text-center md:mx-auto md:w-2/3">
              <h2 className="my-10 text-5xl">Featured Articles</h2>
            </div>

            <DynamicPostCard
              priority={true}
              loading={undefined}
              posts={postsFeatured}
            />
          </section>
        </Layout>
      </Suspense>
    </>
  );
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: featuredPostsData } = await gqlClient.query({
    query: GET_ALL_FEATURED_POSTS,
  });

  const postsFeatured: IPost[] = featuredPostsData.posts.data.map(
    (post: IPosts) => {
      return {
        ...post.attributes,
      };
    }
  );

  return {
    props: {
      postsFeatured,
    },
  };
};

export default featured;
