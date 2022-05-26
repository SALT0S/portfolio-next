import type { NextPage } from "next";
import { Layout } from "../components/Layout/Layout";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <h2>Header Section</h2>
      <h2>Project Section</h2>
      <h2>Skillset Section</h2>
      <h2>Blog Section</h2>
      <h2>About Section</h2>
      <h2>Contact Section</h2>
    </Layout>
  );
};

export default HomePage;
