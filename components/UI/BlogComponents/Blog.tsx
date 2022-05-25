import { CardPost } from "./CardPost";
import { CarouselPost } from "./CarouselPost";

export const Blog = () => {
  return (
    <section className="container mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
      <CarouselPost />
      <CardPost />
    </section>
  );
};
