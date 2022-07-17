import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Layout } from "../components/Layout";
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
const DynamicHeaderSection = dynamic(
  () => import("../components/UI/HomeComponents/Header"),
  {
    suspense: true,
  }
);
const DynamicSkillSection = dynamic(
  () => import("../components/UI/HomeComponents/Skill"),
  {
    suspense: true,
  }
);
const DynamicBlogSection = dynamic(
  () => import("../components/UI/HomeComponents/Blog"),
  {
    suspense: true,
  }
);
const DynamicAboutSection = dynamic(
  () => import("../components/UI/HomeComponents/About"),
  {
    suspense: true,
  }
);
const DynamicContactSection = dynamic(
  () => import("../components/UI/HomeComponents/Contact"),
  {
    suspense: true,
  }
);

interface Props {
  projects: IProject[];
  skills: SkillData[];
  posts: IPost[];
}

const HomePage: NextPage<Props> = ({ posts, skills }) => {
  return (
    <>
      <NextSeo title="Portfolio" />
      <Suspense>
        <Layout>
          <DynamicHeaderSection />
          {/*  <ProjectSection projects={projects} />  */}
          <DynamicSkillSection skills={skills} />
          <DynamicBlogSection posts={posts} />
          <DynamicAboutSection />
          <DynamicContactSection />
        </Layout>
      </Suspense>
    </>
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
