import type { NextPage } from "next";
import { Layout } from "../../components/Layout/Layout";
import { Blog } from "../../components/UI";

const BlogPage: NextPage = () => {
  return (
    <Layout>
      <Blog />
    </Layout>
  );
};

export default BlogPage;
