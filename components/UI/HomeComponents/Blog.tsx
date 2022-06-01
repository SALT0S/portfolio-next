import { IPost } from "../../../interfaces";
import { PostCardHome } from "../Blog";

interface PostsProps {
  posts: IPost;
}
export const BlogSection: React.FC<PostsProps> = ({ posts }) => {
  return (
    <section className="container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-5xl">Blog about personal opinions</h2>
      <PostCardHome posts={posts} />
    </section>
  );
};
