import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Layout } from "../../components/Layout";
import { PostCard } from "../../components/UI/Blog";
import { GET_ALL_FEATURED_POSTS } from "../../graphql/queries";
import { IPost, IPosts } from "../../interfaces";
import { gqlClient } from "../../lib/graphql-client";

interface Props {
  postsFeatured: IPost[];
}

const featured: NextPage<Props> = ({ postsFeatured }) => {
  return (
    <Layout>
      <NextSeo
        title="Featured Articles"
        /* description="Some projects that I have done, some are finished, others are unfinished but ready to implement ideas that I have, however, I consider them excellent because I learned a lot in the creation process."
        openGraph={{
          url: "https://joseschz.com/projects",
          title: "Projects | Jose Sanchez Saltos",
          description:
            "Some projects that I have done, some are finished, others are unfinished but ready to implement ideas that I have, however, I consider them excellent because I learned a lot in the creation process.",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: `Html, Css, Javascript, Nextjs, React, Jose, Sanchez, Saltos, Software, Web Developer, Front End, Portfolio, Jose Sanchez S, Jose Sanchez Saltos`,
          },
        ]} */
      />
      <section className="container mx-auto my-10 max-w-[1540px] px-4  sm:px-6 lg:px-8">
        <div className="text-center md:mx-auto md:w-2/3">
          <h2 className="my-10 text-5xl">Featured Articles</h2>
        </div>

        <PostCard posts={postsFeatured} />
      </section>
    </Layout>
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
