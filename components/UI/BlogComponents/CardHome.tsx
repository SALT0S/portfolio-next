import Image from "next/image";
import Tuco from "/public/static/img/FotoTuco.jpg";

export const CardHome = () => {
  return (
    <div className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      <div className="w-full">
        <div className="relative h-80 w-full">
          <Image
            src={Tuco}
            alt="foto del tuco"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>

        <article className="p-5">
          <p className="text-sm">April 14th, 2022</p>
          <h2 className="my-2 text-2xl font-semibold">
            USE YOUR DESIRES AS A MUSE
          </h2>
        </article>
      </div>
    </div>
  );
};
