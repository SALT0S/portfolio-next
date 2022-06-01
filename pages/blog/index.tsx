import type { NextPage, GetStaticProps } from "next";

// components
import { Layout } from "../../components/Layout/Layout";
import { CarouselPost } from "../../components/UI/BlogComponents/CarouselPost";
import { PostCard } from "../../components/UI/Blog";
import { Newsletter } from "../../components/UI";

// interfaces
import { IPost } from "../../interfaces";
import { gqlClient } from "../../lib/graphql-client";
import { GET_ALL_UNFEATURED_POSTS } from "../../graphql/queries";

interface Props {
  posts: IPost;
  postsFeatured: IPost;
}
const BlogPage: NextPage<Props> = ({ posts, postsFeatured }) => {
  return (
    <Layout>
      <CarouselPost /> {/*  postsFeatured={postsFeatured} */}
      <PostCard posts={posts} />
      <Newsletter />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: featuredPostsData } = await gqlClient.query({
    query: GET_ALL_UNFEATURED_POSTS,
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
