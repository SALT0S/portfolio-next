import Image from "next/image";
import Tuco from "/public/static/img/FotoTuco.jpg";
export const CarouselPost = () => {
  return (
    <div className="h-full w-full bg-gray-200 md:flex md:flex-row-reverse">
      <div className="relative h-52 md:h-[540px] md:w-2/3">
        <Image src={Tuco} layout="fill" alt="Foto del tuco" objectFit="cover" />
      </div>

      <div className="self-center px-8 text-center md:w-1/3">
        <p>April 14th, 2022</p>
        <h2 className="my-7 text-3xl font-bold">USE YOUR DESIRES AS A MUSE</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab fugit
          voluptates dolorum nesciunt optio corporis similique perspiciatis
          distinctio dolores eligendi!
        </p>
        <p className="mt-10">Read post</p>
      </div>
    </div>
  );
};
