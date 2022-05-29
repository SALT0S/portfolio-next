import type { NextPage } from "next";
import { Layout } from "../components/Layout/Layout";
import {
  AboutSection,
  BlogSection,
  ContactSection,
  HeaderSection,
  ProjectSection,
  SkillSection,
} from "../components/UI";

const HomePage: NextPage = () => {
  return (
    <Layout>
      {/* container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8 */}
      <HeaderSection />
      <ProjectSection />
      <SkillSection />
      <BlogSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
};

export default HomePage;
