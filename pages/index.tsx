import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Layout } from "../components/Layout";
import {
  AboutSection,
  BlogSection,
  ContactSection,
  HeaderSection,
  ProjectSection,
  SkillSection,
} from "../components/UI";
import {
  GET_ALL_FEATURED_POSTS,
  GET_ALL_FEATURED_PROJECTS,
  GET_ALL_SKILLS,
} from "../graphql/queries";
import {
  IPost,
  IPosts,
  IProject,
  IProjects,
  ISkill,
  SkillData,
} from "../interfaces";
import { gqlClient } from "../lib/graphql-client";

interface Props {
  projects: IProject[];
  skills: SkillData[];
  posts: IPost[];
}

const HomePage: NextPage<Props> = ({ posts, skills, projects }) => {
  return (
    <Layout>
      <NextSeo />
      <HeaderSection />
      <ProjectSection projects={projects} />
      <SkillSection skills={skills} />
      <BlogSection posts={posts} />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: projectsData } = await gqlClient.query({
    query: GET_ALL_FEATURED_PROJECTS,
  });

  const { data: skillsData } = await gqlClient.query({
    query: GET_ALL_SKILLS,
  });

  const { data: postsData } = await gqlClient.query({
    query: GET_ALL_FEATURED_POSTS,
  });

  //Map of data to props
  const projects: IProject[] = projectsData.projects.data.map(
    (project: IProjects) => {
      return {
        ...project.attributes,
      };
    }
  );

  const skills: SkillData[] = skillsData.skill.data.attributes.stack_skill.map(
    (skill: ISkill) => {
      return {
        ...skill,
      };
    }
  );

  const posts: IPost[] = postsData.posts.data.map((post: IPosts) => {
    return {
      ...post.attributes,
    };
  });

  return {
    props: {
      projects,
      skills,
      posts,
    },
  };
};

export default HomePage;
