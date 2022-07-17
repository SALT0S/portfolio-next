import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ProjectsData } from "../../../interfaces";
import { ProjectCard } from "../Project";

interface Props {
  projects: ProjectsData[];
}

const ProjectSection: React.FC<Props> = ({ projects }) => {
  return (
    <section className="container mx-auto my-10 max-w-[1540px] px-4 text-center sm:px-6 lg:px-8">
      <div className="md:mx-auto md:w-2/3">
        <h2 className="my-10 text-5xl">Projects</h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard priority={false} loading="lazy" projects={projects} />
      </div>

      <div className="mt-10">
        <Link href={"/projects"} prefetch={false} passHref>
          <a className="inline-flex gap-1 font-bold transition-all hover:gap-2">
            View all projects <HiArrowNarrowRight className="self-center" />
          </a>
        </Link>
      </div>
    </section>
  );
};
export default ProjectSection;
