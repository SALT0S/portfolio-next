import Image from "next/image";
import { IPost } from "../../../interfaces";
import { toDate } from "../../../lib/format-date";

interface PostsProps {
  posts: IPost;
}

export const FeaturedPost: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      {posts.data.map((post) => (
        <div
          key={post.attributes.slug}
          className=" h-full w-full bg-gray-200 dark:bg-zinc-900 md:flex md:flex-row-reverse"
        >
          <div className="relative h-52 md:h-[540px] md:w-2/3">
            <Image
              src={post.attributes.image.data.attributes.url}
              alt={post.attributes.title}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>

          <div className="self-center p-8 text-center md:w-1/3">
            <p>{toDate(post.attributes.date)}</p>
            <h2 className="my-7 text-3xl font-bold">
              {post.attributes.title.length < 36
                ? `${post.attributes.title}`
                : `${post.attributes.title.substring(0, 36)}...`}
            </h2>
            <p>
              {post.attributes.description.length < 140
                ? `${post.attributes.description}`
                : `${post.attributes.description.substring(0, 145)}...`}
            </p>
            <p className="mt-10">Read post</p>
          </div>
        </div>
      ))}
    </>
  );
};
