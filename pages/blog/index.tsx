import type { NextPage, GetStaticProps } from "next";

// components
import { Layout } from "../../components/Layout/Layout";
import { FeaturedPost, PostCard, Newsletter } from "../../components/UI/Blog";

// interfaces
import { IPost } from "../../interfaces";
import { gqlClient } from "../../lib/graphql-client";
import {
  GET_ALL_UNFEATURED_POSTS,
  GET_ALL_FEATURED_POSTS,
} from "../../graphql/queries";

interface Props {
  posts: IPost;
  postsFeatured: IPost;
}
const BlogPage: NextPage<Props> = ({ posts, postsFeatured }) => {
  return (
    <Layout>
      <section className="container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <FeaturedPost posts={postsFeatured} />
      </section>

      <section className="container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <PostCard posts={posts} />
      </section>
      <Newsletter />
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

  const postsFeatured: IPost = featuredPostsData.posts;
  const posts: IPost = unfeaturedPostsData.posts;

  return {
    props: {
      postsFeatured: postsFeatured,
      posts: posts,
    },
  };
};

export default BlogPage;
