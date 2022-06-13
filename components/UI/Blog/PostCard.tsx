import Image from "next/image";
import Link from "next/link";

import { IPost } from "../../../interfaces";
import { toDate } from "../../../lib/format-date";

interface PostsProps {
  posts: IPost[];
}

export const PostCard: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div
          key={post.slug}
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
        >
          <Link href={`/blog/${post.slug}`} prefetch={false} passHref>
            <a>
              <div className="relative h-80 w-full">
                <Image
                  src={post.image.data.attributes.url}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <article className="p-5">
                <p className="text-sm">{toDate(post.date)}</p>
                <h2 className="my-2 text-2xl font-semibold">
                  {post.title.length < 36
                    ? `${post.title}`
                    : `${post.title.substring(0, 36)}...`}
                </h2>
                <p>
                  {post.description.length < 110
                    ? `${post.description}`
                    : `${post.description.substring(0, 115)}...`}
                </p>
              </article>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};
