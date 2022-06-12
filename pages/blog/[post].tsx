import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";

import { Layout } from "../../components/Layout";
import { Newsletter } from "../../components/UI/Blog";

import { gqlClient } from "../../lib/graphql-client";
import { DatumAttributesPost, IPost, IPosts } from "../../interfaces";

import { GET_POST, GET_ALL_POSTS } from "../../graphql/queries";

interface PostsProps {
  post: DatumAttributesPost;
}

const PostPage: React.FC<PostsProps> = ({ post }) => {
  console.log(post);
  return (
    <Layout>
      {/* <div className="container mx-auto my-10 grid max-w-7xl px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="relative h-96 md:h-[540px] ">
          <Image
            src={post.data[0].attributes.image.data.attributes.url}
            layout="fill"
            alt={post.data[0].attributes.title}
            objectFit="cover"
            placeholder="blur"
          />
        </div>

        <div>
          <div className="rounded-b-2xl bg-gray-200 py-[15%] px-[5%] dark:bg-zinc-900 md:rounded-b-none md:rounded-r-2xl">
            <h1 className="text-4xl font-bold leading-normal">
              {post.data[0].attributes.title}
            </h1>
            <p className="mt-5">{post.data[0].attributes.read_min}</p>
          </div>

          <div className="px-[5%]">
            <div className="relative">
              <div className="absolute bottom-1/2 h-28 w-28 rounded-full border-8 border-white dark:border-black">
                <Image
                  src={post.data[0].attributes.author.image.data.attributes.url}
                  alt={post.data[0].attributes.author.author_title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  className="rounded-full"
                  placeholder="blur"
                />
              </div>
            </div>

            <p className="mt-16 text-lg">
              {post.data[0].attributes.author.author_title} -
              {post.data[0].attributes.date}
            </p>
          </div>
        </div>
      </div> */}

      <div className="container mx-auto my-10 grid max-w-7xl justify-items-center gap-10 px-4 sm:px-6 md:w-1/2 md:px-0">
        <article className="md:text-lg">
          <p className="my-4">
            What motivates us to get out of bed? What motivates us to work? What
            inspires us to do the things that we set out to do?
          </p>
          <p className="my-4">
            In Greek mythology, the muses are, according to the oldest writers,
            the inspiring divinities of the arts.
          </p>
          <p className="my-4 font-bold">
            That inspiration that the artist feels and that stimulates or favors
            the creation or composition of works of art… personally can be
            anything, not just a person.
          </p>
          <p className="my-4">
            Have you ever wondered which muse inspires you?
          </p>
          <p className="my-4">
            But when the muse dies, happiness and inspiration die, that is
            something that has happened to everyone at some point.
          </p>
          <p className="my-4">
            Have you ever wondered why your unhappiness is always due to the
            inspiration you want and do not have?
          </p>
          <p className="my-4">
            But something that I recommend is to use our desires as a muse,
            since personifying our muse will always have the risk that that
            person moves away from us, and our inspiration with it.
          </p>
          <p className="my-4 font-bold">
            But how can we use our desires as a muse?
          </p>
          <p className="my-4">
            The more we develop as a person, we realize that life is not so
            simple, but is that muse that helps us to be a better version and
            make get out our inner artist, considering prosperity for the
            future.
          </p>
          <p className="my-4 font-bold">
            A house, a nice car, a full life without problems, or having the
            affection of that person we idealize so much, are typical wishes
            that have crossed the mind of more than one, however, I think they
            should not be a reason for unhappiness. for us.
          </p>
          <p className="my-4">
            Finding something that inspires us in our environment can be easy,
            but it can also be complicated and frustrating, as many of us are
            just slaves of our environment.
          </p>
          <p className="my-4">
            Having money or our image as a muse is valid but is that kind of
            inspiration worth it? depending on the person who reads this, say
            yes, or not, personally, my muse is just to be remembered, as a good
            person of course.
          </p>
          <p className="my-4">
            The meaning of Memento mori is that it reminds us that we are going
            to die, many people take this as an impulse to not leave anything
            adrift and take charge of their lives.
          </p>
          <p className="my-4">
            Memento mori reminds us that we will only walk this way once, so let
            us make our footprints be remembered, and not be on murmuring lips.
          </p>
          <p className="my-4 mx-8 text-2xl font-bold italic text-red-500">
            But be aware of your moves, just like a chess game, each action
            opens a bunch of moves, but with only one outcome at the end.
          </p>
          <p className="my-4">
            Fighting for those wishes to come true is essential for us, let us
            not wait for fate to grant us those wishes. Fate owes us nothing and
            we are not going to owe it anything.
          </p>
          <p className="my-4">
            We are the ones who shape our destiny, so if you really want those
            wishes to come true, start by looking around you and notice those
            details that do not let you move forward.
          </p>
          <p className="my-4">
            Why you are not where you want to be and what you can do to fix it,
            be self-critical with yourself, try to get out of the hole, and
            reinvent yourself as a person.
          </p>
          <p className="my-4">
            One of my greatest wishes in this life is to be remembered as a
            successful person, which is what everyone wants, right? The question
            is, how do we do it? Where do we start? These are questions I
            constantly ask myself.
          </p>
          <p className="my-4 font-bold">
            However, if I look back and see how I have progressed when compared
            to myself, I feel proud of what I have learned and where I am going.
          </p>
          <p className="my-4">
            Therefore, I think that if our muse is strong, and in a certain
            aspect we are ambitious with our future, this will take us far.
          </p>
        </article>
        <div className="absolute left-0">Share It</div>
      </div>
      <Newsletter />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await gqlClient.query({ query: GET_ALL_POSTS });
  const posts = data.posts.data;

  // get the path we want
  const paths = posts.map((post: DatumAttributesPost) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: PostData } = await gqlClient.query({
    query: GET_POST,
    variables: {
      where: {
        slug: params?.slug || "",
      },
    },
  });

  const post = PostData.posts.data[0];

  return {
    props: { post },
  };
};

export default PostPage;
