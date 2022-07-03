import Image from "next/image";
import Link from "next/link";

import { MdOutlineScreenShare } from "react-icons/Md";
import { AiFillGithub } from "react-icons/ai";

import { ProjectsData } from "../../../interfaces";

interface Props {
  projects: ProjectsData[];
  priority: boolean;
  loading: any;
}
export const ProjectCard: React.FC<Props> = ({
  projects,
  priority,
  loading,
}) => {
  return (
    <>
      {projects.map((project, index) => (
        <div key={project.slug} className={`projectCard mt-${index}0 `}>
          <div className="relative">
            <Link href={`/projects/${project.slug}`} prefetch={false} passHref>
              <a>
                <Image
                  src={project.image.data.attributes.url}
                  alt={project.title}
                  width={project.image.data.attributes.width}
                  height={project.image.data.attributes.height}
                  layout="responsive"
                  loading={loading}
                  priority={priority}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, (max-width: 1215px) 33vw, (max-width: 1599px) 25vw, (max-width: 1919px) 20vw, (max-width: 2559px) 16vw, (max-width: 3839px) 12vw, (max-width: 5679px) 8vw, (max-width: 9999px) 4vw, 100vw"
                  className="brightness-50 hover:brightness-75"
                />

                <h3 className="absolute top-10 w-full px-5 text-3xl font-semibold  text-white">
                  {project.title}
                </h3>
              </a>
            </Link>

            <div className="absolute bottom-5 mx-5 flex gap-6">
              <div className="flex cursor-pointer rounded-3xl bg-white py-1 px-2 hover:bg-zinc-200">
                <AiFillGithub
                  className="h-6 w-6 text-black"
                  aria-hidden="true"
                />
                <p className="ml-1 dark:text-black">GitHub</p>
              </div>

              <div className="flex cursor-pointer rounded-3xl bg-white py-1 px-2 hover:bg-zinc-200">
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
