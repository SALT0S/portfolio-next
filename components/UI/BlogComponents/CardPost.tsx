import Image from "next/image";
import Tuco from "/public/static/img/FotoTuco.jpg";

export const CardPost = () => {
  return (
    <section className="my-16 grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      <div className=" mb-8 w-full">
        <div className="relative h-80 w-full">
          <Image
            src={Tuco}
            alt="foto del tuco"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <article className="p-5">
          <p className="text-sm">April 14th, 2022</p>
          <h2 className="my-2 text-2xl font-semibold">
            USE YOUR DESIRES AS A MUSE
          </h2>
          <p className="">
            The more we develop as a person, we realize that life is not so
            simple, but is that muse that helps us to be a bett...
          </p>
        </article>
      </div>

      <div className="mb-8 w-full ">
        <div className="relative h-80 w-full">
          <Image
            src={Tuco}
            alt="foto del tuco"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <article className="p-5">
          <p className="text-sm">April 14th, 2022</p>
          <h2 className="my-2 text-2xl font-semibold">
            USE YOUR DESIRES AS A MUSE
          </h2>
          <p className="">
            The more we develop as a person, we realize that life is not so
            simple, but is that muse that helps us to be a bett...
          </p>
        </article>
      </div>

      <div className="mb-8 w-full ">
        <div className="relative h-80 w-full">
          <Image
            src={Tuco}
            alt="foto del tuco"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <article className="p-5">
          <p className="text-sm">April 14th, 2022</p>
          <h2 className="my-2 text-2xl font-semibold">
            USE YOUR DESIRES AS A MUSE
          </h2>
          <p className="">
            The more we develop as a person, we realize that life is not so
            simple, but is that muse that helps us to be a bett...
          </p>
        </article>
      </div>
    </section>
  );
};
