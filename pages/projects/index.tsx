import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Layout } from "../../components/Layout";
import { ProjectCard } from "../../components/UI/Project";
import { GET_ALL_PROJECTS } from "../../graphql/queries";
import { IProject, IProjects } from "../../interfaces";
import { gqlClient } from "../../lib/graphql-client";

interface Props {
  projects: IProject[];
}
const HomeProjectPage: NextPage<Props> = ({ projects }) => {
  return (
    <Layout>
      <NextSeo
        title="Projects"
        description="Some projects that I have done, some are finished, others are unfinished but ready to implement ideas that I have, however, I consider them excellent because I learned a lot in the creation process."
        openGraph={{
          url: "https://joseschz.com/projects",
          title: "Projects | Jose Sanchez Saltos",
          description:
            "Some projects that I have done, some are finished, others are unfinished but ready to implement ideas that I have, however, I consider them excellent because I learned a lot in the creation process.",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: `Html, Css, Javascript, Nextjs, React, Jose, Sanchez, Saltos, Software, Web Developer, Front End, Portfolio, Jose Sanchez S, Jose Sanchez Saltos`,
          },
        ]}
      />
      <section className="container mx-auto my-10 max-w-[1540px] px-4 text-center sm:px-6 lg:px-8">
        <div className="md:mx-auto md:w-2/3">
          <h2 className="my-10 text-5xl">Projects</h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            priority={true}
            loading={undefined}
            projects={projects}
          />
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
