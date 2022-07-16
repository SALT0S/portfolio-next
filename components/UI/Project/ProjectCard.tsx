import Image from "next/image";
import Link from "next/link";
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
          </div>
        </div>
      ))}
    </>
  );
};
