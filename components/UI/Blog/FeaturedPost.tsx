import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Autoplay, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/lazy";
import { Swiper, SwiperSlide } from "swiper/react";
import { IPost } from "../../../interfaces";
import { toDate } from "../../../lib/format-date";

interface PostsProps {
  posts: IPost[];
}

const FeaturedPost: React.FC<PostsProps> = ({ posts }) => {
  return (
    <section className="container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        navigation={true}
        lazy={true}
        modules={[Autoplay, Lazy]}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.slug}>
            <div className=" h-full w-full bg-gray-200 dark:bg-zinc-900 lg:flex lg:flex-row-reverse">
              <div className="relative h-52 md:h-80 lg:h-[540px] lg:w-2/3">
                <Image
                  src={post.image.data.attributes.url}
                  alt={post.title}
                  layout="fill"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, (max-width: 1215px) 33vw, (max-width: 1599px) 25vw, (max-width: 1919px) 20vw, (max-width: 2559px) 16vw, (max-width: 3839px) 12vw, (max-width: 5679px) 8vw, (max-width: 9999px) 4vw, 100vw"
                  objectFit="cover"
                  priority={true}
                  className="swiper-lazy"
                />
              </div>

              <div className="self-center p-8 text-center md:p-16 lg:w-1/3 lg:p-8">
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
                  <a className="inline-flex gap-1 font-bold transition-all hover:gap-2">
                    Read more
                    <HiArrowNarrowRight className="self-center" />
                  </a>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default FeaturedPost;
