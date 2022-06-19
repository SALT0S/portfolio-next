import type { NextPage, GetStaticProps } from "next";

import { Layout } from "../components/Layout";
import {
  HeaderSection,
  ProjectSection,
  SkillSection,
  BlogSection,
  AboutSection,
  ContactSection,
} from "../components/UI";

import {
  IProjects,
  ISkill,
  IPosts,
  IProject,
  SkillData,
  IPost,
} from "../interfaces";
import { gqlClient } from "../lib/graphql-client";
import {
  GET_ALL_FEATURED_POSTS,
  GET_ALL_FEATURED_PROJECTS,
  GET_ALL_SKILLS,
} from "../graphql/queries";

interface Props {
  projects: IProject[];
  skills: SkillData[];
  posts: IPost[];
}

const HomePage: NextPage<Props> = ({ posts, skills, projects }) => {
  return (
    <Layout>
      {/* container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8 */}
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
