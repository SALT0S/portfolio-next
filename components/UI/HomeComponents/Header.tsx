import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicSvgComponent = dynamic(() => import("../SvgComponent"), {
  suspense: true,
});

export const HeaderSection = () => {
  return (
    <section className="container mx-auto my-10 grid max-w-7xl gap-10 px-4  sm:px-6 md:grid-cols-2 lg:px-8">
      <div className="relative order-last md:-order-last md:h-screen">
        <div className="md:absolute md:bottom-1/4">
          <h1 className="text-5xl font-semibold">
            Software engineering student & web developer
          </h1>
          <p className="mt-8 text-2xl">
            Hello, my name is José Sánchez. I am a Front End Developer living in
            Guayaquil, EC
          </p>
        </div>
      </div>

      <Suspense fallback={``}>
        <DynamicSvgComponent />
      </Suspense>
    </section>
  );
};
