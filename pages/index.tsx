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

import { IPost, ISkill } from "../interfaces";

import { gqlClient } from "../lib/graphql-client";
import { GET_ALL_FEATURED_POSTS, GET_ALL_SKILLS } from "../graphql/queries";

interface Props {
  skills: ISkill;
  posts: IPost;
}

const HomePage: NextPage<Props> = ({ posts, skills }) => {
  return (
    <Layout>
      {/* container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8 */}
      {/* TODO: Arreglar la conexion a strapi fetchear con graphql y filtrar todo,
      arreglar tambien el mapeo de la seccion skills, no sirve hehe
      */}
      <HeaderSection />
      <ProjectSection />
      <SkillSection skills={skills} />
      <BlogSection posts={posts} />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: skillssData } = await gqlClient.query({
    query: GET_ALL_SKILLS,
  });

  const { data: postsData } = await gqlClient.query({
    query: GET_ALL_FEATURED_POSTS,
  });

  const skills: ISkill = skillssData.skill;
  const posts: IPost = postsData.posts;

  return {
    props: {
      skills: skills,
      posts: posts,
    },
  };
};

export default HomePage;
