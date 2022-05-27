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
import useTheme from "next-theme";

const HomePage: NextPage = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Layout>
      {/* container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8 */}
      <div>
        The current theme is: {theme} <br />
        <button
          className="bg-black text-white dark:bg-white dark:text-black"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Mode to {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
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
