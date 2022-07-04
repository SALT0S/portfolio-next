import type { NextPage, GetStaticProps } from "next";

import { Suspense } from "react";
import dynamic from "next/dynamic";

// components
import { Layout } from "../../components/Layout/Layout";
const DynamicNewsletter = dynamic(
  () => import("../../components/UI/Blog/Newsletter"),
  {
    suspense: true,
  }
);

import { FeaturedPost, PostCard } from "../../components/UI/Blog";

// interfaces
import { IPosts, IPost } from "../../interfaces";
import { gqlClient } from "../../lib/graphql-client";
import {
  GET_ALL_UNFEATURED_POSTS,
  GET_ALL_FEATURED_POSTS,
} from "../../graphql/queries";

interface Props {
  postsFeatured: IPost[];
  postsUnFeatured: IPost[];
}
const BlogPage: NextPage<Props> = ({ postsUnFeatured, postsFeatured }) => {
  return (
    <Layout>
      <FeaturedPost posts={postsFeatured} />

      <PostCard posts={postsUnFeatured} />

      <Suspense fallback={``}>
        <DynamicNewsletter />
      </Suspense>
    </Layout>
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
