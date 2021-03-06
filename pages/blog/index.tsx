import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Layout } from "../../components/Layout/Layout";
import {
  GET_ALL_FEATURED_POSTS,
  GET_ALL_UNFEATURED_POSTS,
} from "../../graphql/queries";
import { IPost, IPosts } from "../../interfaces";
import { gqlClient } from "../../lib/graphql-client";
const DynamicFeaturedPost = dynamic(
  () => import("../../components/UI/Blog/FeaturedPost"),
  {
    suspense: true,
  }
);
const DynamicPostCard = dynamic(
  () => import("../../components/UI/Blog/PostCard"),
  {
    suspense: true,
  }
);
const DynamicNewsletter = dynamic(
  () => import("../../components/UI/Blog/Newsletter"),
  {
    suspense: true,
  }
);

interface Props {
  postsFeatured: IPost[];
  postsUnFeatured: IPost[];
}
const BlogPage: NextPage<Props> = ({ postsUnFeatured, postsFeatured }) => {
  return (
    <>
      <NextSeo
        title="Blog"
        description="The purpose of this blog is to be my catharsis, to express what I feel through words and ideas that no one asked for, but it is a fun way to write and express feelings towards something or someone."
        openGraph={{
          url: "https://joseschz.com/blog",
          title: "Blog | Jose Sanchez Saltos",
          description:
            "The purpose of this blog is to be my catharsis, to express what I feel through words and ideas that no one asked for, but it is a fun way to write and express feelings towards something or someone.",
        }}
      />
      <Suspense>
        <Layout>
          <DynamicFeaturedPost posts={postsFeatured} />
          <DynamicPostCard
            priority={false}
            loading={"lazy"}
            posts={postsUnFeatured}
          />
          <DynamicNewsletter />
        </Layout>
      </Suspense>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: featuredPostsData } = await gqlClient.query({
    query: GET_ALL_FEATURED_POSTS,
  });

  const { data: unfeaturedPostsData } = await gqlClient.query({
    query: GET_ALL_UNFEATURED_POSTS,
  });

  const postsFeatured: IPost[] = featuredPostsData.posts.data.map(
    (post: IPosts) => {
      return {
        ...post.attributes,
      };
    }
  );
  const postsUnFeatured: IPost[] = unfeaturedPostsData.posts.data.map(
    (post: IPosts) => {
      return {
        ...post.attributes,
      };
    }
  );

  return {
    props: {
      postsFeatured,
      postsUnFeatured,
    },
  };
};

export default BlogPage;
