import type { NextPage } from "next";
import { Layout } from "../../components/Layout/Layout";
import { Blog, Newsletter } from "../../components/UI";

const BlogPage: NextPage = () => {
  return (
    <Layout>
      <Blog />
      <Newsletter />
    </Layout>
  );
};

export default BlogPage;
