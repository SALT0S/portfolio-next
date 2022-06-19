import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import { toDate } from "../../../lib/format-date";
import { PostData } from "../../../interfaces";

interface PostsProps {
  posts: PostData[];
}

export const PostCardHome: React.FC<PostsProps> = ({ posts }) => {
  return (
    <Swiper
      spaceBetween={30}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
        },
        "@0.75": {
          slidesPerView: 1.3,
        },
        "@1.00": {
          slidesPerView: 1.6,
        },
        "@1.25": {
          slidesPerView: 2,
        },
        "@1.50": {
          slidesPerView: 3,
        },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {posts.map((post) => (
        <SwiperSlide key={post.slug} className="mt-10">
          <Link href={`/blog/${post.slug}`} prefetch={false} passHref>
            <a>
              <div className="relative h-80 w-full">
                <Image
                  src={post.image.data.attributes.url}
                  alt={post.title}
                  layout="fill"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, (max-width: 1215px) 33vw, (max-width: 1599px) 25vw, (max-width: 1919px) 20vw, (max-width: 2559px) 16vw, (max-width: 3839px) 12vw, (max-width: 5679px) 8vw, (max-width: 9999px) 4vw, 100vw"
                  objectFit="cover"
                />
              </div>

              <article className="p-5">
                <p className="text-sm">{toDate(post.date)}</p>
                <h2 className="my-2 text-2xl font-semibold">{post.title}</h2>
              </article>
            </a>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
