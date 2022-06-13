import type { NextPage, GetStaticProps } from "next";

import { Layout } from "../../components/Layout";
import { ProjectCard } from "../../components/UI/Project";

import { gqlClient } from "../../lib/graphql-client";
import { GET_ALL_PROJECTS } from "../../graphql/queries";

import { IProjects, IProject } from "../../interfaces";

interface Props {
  projects: IProject[];
}
const HomeProjectPage: NextPage<Props> = ({ projects }) => {
  return (
    <Layout>
      <section className="container mx-auto my-10 max-w-[1540px] px-4 text-center sm:px-6 lg:px-8">
        <div className="md:mx-auto md:w-2/3">
          <h2 className="my-10 text-5xl">Projects</h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard projects={projects} />
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: projectsData } = await gqlClient.query({
    query: GET_ALL_PROJECTS,
  });

  //Map of data to props
  const projects: IProject[] = projectsData.projects.data.map(
    (project: IProjects) => {
      return {
        ...project.attributes,
      };
    }
  );

  return {
    props: {
      projects,
    },
  };
};

export default HomeProjectPage;
