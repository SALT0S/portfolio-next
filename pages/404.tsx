import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Layout } from "../components/Layout";

const Page404: NextPage = () => {
  return (
    <Layout>
      <NextSeo
        title="Page not found"
        description="You just hit a route that doesn't exist... the sadness."
        openGraph={{
          title: "Page not found",
          description:
            "You just hit a route that doesn't exist... the sadness.",
        }}
      />
      <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center text-center md:flex-row md:text-left">
        <div className="flex text-8xl font-extralight">
          <h1>404</h1>
          <p className="ml-3 hidden w-1 bg-black md:block" />
        </div>

        <div className="md:ml-4">
          <p className="my-3 text-xl font-bold">Whoops! Sorry about that.</p>
          <p>
            Back to the{" "}
            <Link href={"/"} prefetch={false} passHref>
              <a className="inline-flex gap-1 font-bold transition-all hover:gap-2">
                Home page <HiArrowNarrowRight className="self-center" />
              </a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Page404;
