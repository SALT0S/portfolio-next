import { CardHome } from "../BlogComponents";
import Image from "next/image";

import { IPost } from "../../../interfaces";
import { toDate } from "../../../lib/format-date";

interface PostsProps {
  posts: IPost;
}
export const BlogSection: React.FC<PostsProps> = ({ posts }) => {
  return (
    <section className="container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-5xl">Blog about personal opinions</h2>
      {/* <CardHome /> */}
      {posts.data.map((post) => (
        <div
          key={post.attributes.slug}
          className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
        >
          <div className="w-full">
            <div className="relative h-80 w-full">
              <Image
                src={post.attributes.image.data.attributes.url}
                alt={post.attributes.title}
                blurDataURL={post.attributes.image.data.attributes.url}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </div>

            <article className="p-5">
              <p className="text-sm">{toDate(post.attributes.date)}</p>
              <h2 className="my-2 text-2xl font-semibold">
                {post.attributes.title}
              </h2>
            </article>
          </div>
        </div>
      ))}
    </section>
  );
};
