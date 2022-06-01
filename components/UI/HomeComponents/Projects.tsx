import Image from "next/image";
import Project1 from "/public/static/img/Project1.webp";

import { AiFillGithub } from "react-icons/ai";
import { MdOutlineScreenShare } from "react-icons/Md";

export const ProjectSection = () => {
  return (
    <section className="container mx-auto my-10 max-w-[1540px] px-4 text-center sm:px-6 lg:px-8">
      <div className="md:mx-auto md:w-2/3">
        <h2 className="my-10 text-5xl">Projects</h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="relative">
            <Image
              src={Project1}
              alt="Project1"
              layout="responsive"
              objectFit="cover"
              placeholder="blur"
              className="cursor-pointer brightness-50 hover:brightness-75"
            />
            <h3 className="absolute top-10 w-full px-5 text-3xl font-semibold text-white">
              Alica Art project a virtual gallery
            </h3>

            <div className="absolute bottom-5 flex gap-6 px-5">
              <div className="flex rounded-3xl bg-white py-1 px-2">
                <AiFillGithub
                  className="h-6 w-6 text-black"
                  aria-hidden="true"
                />

                <p className="ml-1 dark:text-black">Github</p>
              </div>
              <div className="flex rounded-3xl bg-white py-1 px-2">
                <MdOutlineScreenShare
                  className="h-6 w-6 text-black"
                  aria-hidden="true"
                />
                <p className="ml-1 dark:text-black">View Page</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="relative">
            <Image
              src={Project1}
              alt="Project1"
              layout="responsive"
              objectFit="cover"
              placeholder="blur"
              className="cursor-pointer brightness-50 hover:brightness-75"
            />
            <h3 className="absolute top-10 w-full px-5 text-3xl font-semibold  text-white">
              Alica Art project a virtual gallery
            </h3>

            <div className="absolute bottom-5 flex gap-6 px-5">
              <div className="flex rounded-3xl bg-white py-1 px-2">
                <AiFillGithub
                  className="h-6 w-6 text-black"
                  aria-hidden="true"
                />
                <p className="ml-1 dark:text-black">Github</p>
              </div>
              <div className="flex rounded-3xl bg-white py-1 px-2">
                <MdOutlineScreenShare
                  className="h-6 w-6 text-black"
                  aria-hidden="true"
                />
                <p className="ml-1 dark:text-black">View Page</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="relative">
            <Image
              src={Project1}
              alt="Project1"
              layout="responsive"
              objectFit="cover"
              placeholder="blur"
              className="cursor-pointer brightness-50 hover:brightness-75"
            />
            <h3 className="absolute top-10 w-full px-5 text-3xl font-semibold text-white">
              Alica Art project a virtual gallery
            </h3>

            <div className="absolute bottom-5 flex gap-6 px-5">
              <div className="flex rounded-3xl bg-white py-1 px-2">
                <AiFillGithub
                  className="h-6 w-6 text-black"
                  aria-hidden="true"
                />
                <p className="ml-1 dark:text-black">Github</p>
              </div>
              <div className="flex rounded-3xl bg-white py-1 px-2">
                <MdOutlineScreenShare
                  className="h-6 w-6 text-black"
                  aria-hidden="true"
                />
                <p className="ml-1 dark:text-black">View Page</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
