import type { NextPage, GetStaticProps } from "next";

// components
import { Layout } from "../../components/Layout/Layout";
import { FeaturedPost, PostCard, Newsletter } from "../../components/UI/Blog";

// interfaces
import { IPosts } from "../../interfaces";
import { gqlClient } from "../../lib/graphql-client";
import {
  GET_ALL_UNFEATURED_POSTS,
  GET_ALL_FEATURED_POSTS,
} from "../../graphql/queries";

interface Props {
  postsFeatured: IPosts[];
  postsUnFeatured: IPosts[];
}
const BlogPage: NextPage<Props> = ({ postsUnFeatured, postsFeatured }) => {
  return (
    <Layout>
      <section className="container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <FeaturedPost posts={postsFeatured} />
      </section>

      <section className="container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <PostCard posts={postsUnFeatured} />
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

  const postsFeatured: IPosts[] = featuredPostsData.posts.data.map(
    (post: any) => {
      return {
        ...post.attributes,
      };
    }
  );
  const postsUnFeatured: IPosts[] = unfeaturedPostsData.posts.data.map(
    (post: any) => {
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
