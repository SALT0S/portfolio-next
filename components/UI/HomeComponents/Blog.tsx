import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { PostData } from "../../../interfaces";
import { PostCardHome } from "../Blog";

interface PostsProps {
  posts: PostData[];
}
const BlogSection: React.FC<PostsProps> = ({ posts }) => {
  return (
    <section className="container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-5xl">Blog about personal opinions</h2>

      <PostCardHome posts={posts} />

      <div className="mt-10 text-center">
        <Link href={"/blog"} prefetch={false} passHref>
          <a className="inline-flex gap-1 font-bold transition-all hover:gap-2">
            View all posts <HiArrowNarrowRight className="self-center" />
          </a>
        </Link>
      </div>
    </section>
  );
};
export default BlogSection;
