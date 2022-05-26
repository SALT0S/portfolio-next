import type { NextPage } from "next";
import { Layout } from "../components/Layout/Layout";
import { HeaderSection, SkillSection } from "../components/UI";

const HomePage: NextPage = () => {
  return (
    <Layout>
      {/* container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8 */}
      <HeaderSection />
      <SkillSection />
      {/* <h2>Project Section</h2>
      <h2>Skillset Section</h2>
      <h2>Blog Section</h2>
      <h2>About Section</h2>
      <h2>Contact Section</h2> */}
    </Layout>
  );
};

export default HomePage;
