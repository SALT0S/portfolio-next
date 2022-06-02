import Image from "next/image";
import { MdOutlineScreenShare } from "react-icons/Md";
import { AiFillGithub } from "react-icons/ai";

import { IProjects } from "../../../interfaces";

interface Props {
  projects: IProjects;
}
export const ProjectCard: React.FC<Props> = ({ projects }) => {
  return (
    <>
      {projects.data.map((project, index) => (
        <div
          key={project.attributes.slug}
          className={`projectCard mt-${index}0 `}
        >
          <div className="relative">
            <Image
              src={project.attributes.image.data.attributes.url}
              alt={project.attributes.title}
              width={project.attributes.image.data.attributes.width}
              height={project.attributes.image.data.attributes.height}
              layout="responsive"
              objectFit="cover"
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
    </>
  );
};
