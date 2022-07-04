import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";
import { Layout } from "../../components/Layout";
import { GET_ALL_POSTS, GET_POST } from "../../graphql/queries";
import { IPost, IPosts } from "../../interfaces";
import { toDate } from "../../lib/format-date";
import { gqlClient } from "../../lib/graphql-client";
const DynamicNewsletter = dynamic(
  () => import("../../components/UI/Blog/Newsletter"),
  {
    suspense: true,
  }
);

interface PostsProps {
  post: IPost;
}

const PostPage: React.FC<PostsProps> = ({ post }) => {
  return (
    <Layout>
      <NextSeo
        title={post.seo_title}
        description={post.description}
        openGraph={{
          type: "article",
          title: post.seo_title,
          description: post.description,
          article: {
            publishedTime: toDate(post.date),
            modifiedTime: toDate(post.date),
            section: "Blog",
          },
          images: [
            {
              url: post.image.data.attributes.url,
              width: post.image.data.attributes.width,
              height: post.image.data.attributes.height,
              alt: post.title,
            },
          ],
        }}
      />
      <div className="container mx-auto my-10 grid max-w-7xl px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="relative h-96 md:h-[540px] ">
          <Image
            src={post.image.data.attributes.url}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 100vw"
            priority={true}
          />
        </div>

        <div>
          <div className="rounded-b-2xl bg-gray-200 py-[15%] px-[5%] dark:bg-zinc-900 md:rounded-b-none md:rounded-r-2xl">
            <h1 className="text-4xl font-bold leading-normal">{post.title}</h1>
            <p className="mt-5">{post.read_min}</p>
          </div>

          <div className="px-[5%]">
            <div className="relative">
              <div className="absolute bottom-1/2 h-28 w-28 rounded-full border-8 border-white dark:border-black">
                <Image
                  src={post.author.image.data.attributes.url}
                  alt={post.author.author_title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  sizes="(max-width: 728px) 100vw, (max-width: 992px) 728px, (max-width: 1200px) 992px, 1200px"
                  className="rounded-full"
                  priority={true}
                />
              </div>
            </div>

            <div className="mt-16 flex gap-1 text-lg">
              <p>{post.author.author_title}</p>
              <span>-</span>
              <p>{toDate(post.date)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-10 grid max-w-7xl justify-items-center gap-10 px-4 sm:px-6 md:w-1/2 md:px-0">
        <article
          className="text-post my-4 md:text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="absolute left-0">Share It</div>
      </div>
      <Suspense fallback={``}>
        <DynamicNewsletter />
      </Suspense>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data: postsData } = await gqlClient.query({
    query: GET_ALL_POSTS,
  });
  const posts: IPost[] = postsData.posts.data.map((post: IPosts) => {
    return {
      ...post.attributes,
    };
  });

  // get the path we want
  const paths = posts.map((post: IPost) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

//Static props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: postData } = await gqlClient.query({
    query: GET_POST,
    variables: {
      slug: params?.slug,
    },
  });

  const post: IPost[] = postData.posts.data[0].attributes;

  return {
    props: { post },
  };
};

export default PostPage;
