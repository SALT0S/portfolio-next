import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import { toDate } from "../../../lib/format-date";
import { IPosts } from "../../../interfaces";

interface PostsProps {
  posts: IPosts[];
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
      centeredSlides={true}
    >
      {posts.map((post) => (
        <SwiperSlide key={post.slug} className="mt-10">
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
            <h2 className="my-2 text-2xl font-semibold">{post.title}</h2>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
