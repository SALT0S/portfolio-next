import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineScreenShare } from "react-icons/md";
import { Layout } from "../../components/Layout";
import { GET_ALL_PROJECTS, GET_PROJECT } from "../../graphql/queries";
import { IProject, IProjects } from "../../interfaces";
import { gqlClient } from "../../lib/graphql-client";

interface PostsProps {
  project: IProject;
}

const ProjectPage: React.FC<PostsProps> = ({ project }) => {
  return (
    <Layout>
      <NextSeo
        title={project.seo_title}
        description={project.description}
        openGraph={{
          url: `https://joseschz.com/${project.slug}`,
          title: `${project.seo_title} | Jose Sanchez Saltos`,
          description: project.description,
          images: [
            {
              url: project.image.data.attributes.url,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: `${project.seo_title}, Html, Css, Javascript, Nextjs, React, Jose, Sanchez, Saltos, Software, Web Developer, Front End, Portfolio, Jose Sanchez S, Jose Sanchez Saltos`,
          },
        ]}
      />
      <div className="container mx-auto my-10 grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8 ">
        <div className="relative">
          <Image
            src={project.image.data.attributes.url}
            alt={project.title}
            layout="responsive"
            width={project.image.data.attributes.width}
            height={project.image.data.attributes.height}
            objectFit="cover"
            className="rounded-2xl"
            sizes="(max-width: 640px) 100vw, 640px"
            priority={true}
          />
        </div>

        <div>
          <h1 className="text-6xl font-bold md:text-7xl">{project.title}</h1>

          <div className="mt-10 flex gap-6">
            <a
              href={project.github_url}
              aria-label={project.title}
              target="_blank"
              rel="noopener noreferrer"
              className="flex rounded-3xl bg-black py-1 px-2 hover:bg-gray-700 dark:bg-white hover:dark:bg-gray-200"
            >
              <AiFillGithub
                className="h-6 w-6 text-white dark:text-black"
                aria-hidden="true"
              />
              <p className="ml-1 text-white dark:text-black">Github</p>
            </a>
            <a
              href={project.page_url}
              aria-label={project.title}
              target="_blank"
              rel="noopener noreferrer"
              className="flex rounded-3xl bg-black py-1 px-2 hover:bg-gray-700 dark:bg-white hover:dark:bg-gray-200"
            >
              <MdOutlineScreenShare
                className="h-6 w-6 text-white dark:text-black"
                aria-hidden="true"
              />
              <p className="ml-1 text-white dark:text-black">View Page</p>
            </a>
          </div>

          <h2 className="my-5 text-2xl font-semibold">About the project</h2>

          <div className="my-4 flex gap-5">
            {project.stack.map((stack) => (
              <div className="relative h-12 w-12" key={stack.title}>
                <Image
                  src={stack.image.data.attributes.url}
                  alt={stack.title}
                  layout="responsive"
                  width={48}
                  height={48}
                  sizes="(max-width: 48px) 100vw, 48px"
                  loading="lazy"
                  className="rounded-full"
                />
              </div>
            ))}
          </div>

          <article
            className="prose lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data: projectsData } = await gqlClient.query({
    query: GET_ALL_PROJECTS,
  });
  const projects: IProject[] = projectsData.projects.data.map(
    (project: IProjects) => {
      return {
        ...project.attributes,
      };
    }
  );

  // get the path we want
  const paths = projects.map((project: IProject) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
};

//Static props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: projectData } = await gqlClient.query({
    query: GET_PROJECT,
    variables: {
      slug: params?.slug,
    },
  });

  const project: IProject[] = projectData.projects.data[0].attributes;

  return {
    props: { project },
  };
};

export default ProjectPage;
