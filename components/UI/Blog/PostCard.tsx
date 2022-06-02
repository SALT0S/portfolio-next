import Image from "next/image";
import { toDate } from "../../../lib/format-date";
import { IPost } from "../../../interfaces";

interface PostsProps {
  posts: IPost;
}

export const PostCard: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      {posts.data.map((post) => (
        <div
          key={post.attributes.slug}
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
        >
          <div className="w-full">
            <div className="relative h-80 w-full">
              <Image
                src={post.attributes.image.data.attributes.url}
                alt={post.attributes.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <article className="p-5">
              <p className="text-sm">{toDate(post.attributes.date)}</p>
              <h2 className="my-2 text-2xl font-semibold">
                {post.attributes.title.length < 36
                  ? `${post.attributes.title}`
                  : `${post.attributes.title.substring(0, 36)}...`}
              </h2>
              <p>
                {post.attributes.description.length < 110
                  ? `${post.attributes.description}`
                  : `${post.attributes.description.substring(0, 115)}...`}
              </p>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};
