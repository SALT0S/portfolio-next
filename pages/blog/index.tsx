import type { NextPage } from "next";
import { Layout } from "../../components/Layout/Layout";
import styles from "../../styles/Home.module.css";

const BlogPage: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Blog page</h1>
    </Layout>
  );
};

export default BlogPage;
