import { PostData } from "../../../interfaces";
import { PostCardHome } from "../Blog";
import { LinkButton } from "../Button";

interface PostsProps {
  posts: PostData[];
}
export const BlogSection: React.FC<PostsProps> = ({ posts }) => {
  return (
    <section className="container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-5xl">Blog about personal opinions</h2>

      <PostCardHome posts={posts} />

      <div className="mt-10 text-center">
        <LinkButton url="/blog" text="View all posts" />
      </div>
    </section>
  );
};
