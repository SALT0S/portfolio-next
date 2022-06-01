import Image from "next/image";

import { MdOutlineScreenShare } from "react-icons/Md";
import { AiFillGithub } from "react-icons/ai";

import { IProjects } from "../../../interfaces";

interface Props {
  projects: IProjects;
}

export const ProjectSection: React.FC<Props> = ({ projects }) => {
  return (
    <section className="container mx-auto my-10 max-w-[1540px] px-4 text-center sm:px-6 lg:px-8">
      <div className="md:mx-auto md:w-2/3">
        <h2 className="my-10 text-5xl">Projects</h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.data.map((project, index) => (
          <div key={project.attributes.slug} className={`md:mt-${index}0 mt-0`}>
            <div className="relative">
              <Image
                src={project.attributes.image.data.attributes.url}
                alt={project.attributes.title}
                blurDataURL={project.attributes.image.data.attributes.url}
                layout="responsive"
                width={"100%"}
                height={150}
                objectFit="cover"
                placeholder="blur"
                className="cursor-pointer brightness-50 hover:brightness-75"
              />

              <h3 className="absolute top-10 w-full px-5 text-3xl font-semibold  text-white">
                {project.attributes.title}
              </h3>

              <div className="absolute bottom-5 flex gap-6 px-5">
                <div className="flex rounded-3xl bg-white py-1 px-2">
                  <AiFillGithub
                    className="h-6 w-6 text-black"
                    aria-hidden="true"
                  />
                  <p className="ml-1 dark:text-black">GitHub</p>
                </div>

                <div className="flex rounded-3xl bg-white py-1 px-2">
                  <MdOutlineScreenShare
                    className="h-6 w-6 text-black"
                    aria-hidden="true"
                  />
                  <p className="ml-1 dark:text-black">Live Demo</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
