import type { NextPage } from "next";
import { Layout } from "../components/Layout/Layout";
import { About } from "../components/UI";

const AboutPage: NextPage = () => {
  return (
    <Layout title="About Me">
      <About />
    </Layout>
  );
};

export default AboutPage;
