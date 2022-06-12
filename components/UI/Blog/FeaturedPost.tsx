import Image from "next/image";
import Link from "next/link";
import { IPosts } from "../../../interfaces";
import { toDate } from "../../../lib/format-date";

interface PostsProps {
  posts: IPosts[];
}

export const FeaturedPost: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div
          key={post.slug}
          className=" h-full w-full bg-gray-200 dark:bg-zinc-900 md:flex md:flex-row-reverse"
        >
          <div className="relative h-52 md:h-[540px] md:w-2/3">
            <Image
              src={post.image.data.attributes.url}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>

          <div className="self-center p-8 text-center md:w-1/3">
            <p>{toDate(post.date)}</p>
            <h2 className="my-7 text-3xl font-bold">
              {post.title.length < 36
                ? `${post.title}`
                : `${post.title.substring(0, 36)}...`}
            </h2>

            <p className="mb-10">
              {post.description.length < 140
                ? `${post.description}`
                : `${post.description.substring(0, 145)}...`}
            </p>

            <Link href={`/blog/${post.slug}`} prefetch={false} passHref>
              <a>Read post</a>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
