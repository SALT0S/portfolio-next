import Image from "next/image";
import { Layout } from "../../components/Layout";

import { AiFillGithub } from "react-icons/ai";
import { MdOutlineScreenShare } from "react-icons/Md";

import Project1 from "/public/static/img/Project1.webp";
const ProjectPage = () => {
  return (
    <Layout>
      <div className="container mx-auto my-10 grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8 ">
        <Image
          src={Project1}
          alt="Project1"
          layout="responsive"
          objectFit="cover"
          placeholder="blur"
          className="rounded-2xl"
        />

        <div>
          <h1 className="text-6xl font-bold md:text-7xl">Project #1</h1>

          <div className="my-5 flex gap-6">
            <div className="flex rounded-3xl bg-black py-1 px-2 dark:bg-white">
              <AiFillGithub
                className="h-6 w-6 text-white dark:text-black"
                aria-hidden="true"
              />
              <p className="ml-1 text-white dark:text-black">Github</p>
            </div>
            <div className="flex rounded-3xl bg-black py-1 px-2 dark:bg-white">
              <MdOutlineScreenShare
                className="h-6 w-6 text-white dark:text-black"
                aria-hidden="true"
              />
              <p className="ml-1 text-white dark:text-black">View Page</p>
            </div>
          </div>

          <h2 className="my-5 text-2xl font-semibold">About the project</h2>

          <div>technologies</div>

          <p className="my-5 text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus
            risus, scelerisque non dolor ac, maximus faucibus felis. Donec quis
            libero sagittis tellus consectetur ullamcorper. Mauris tortor lacus,
            tristique in consectetur quis, pellentesque nec est. Curabitur
            vehicula in turpis vitae consectetur. Pellentesque sed lorem vitae
            quam congue faucibus.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;
