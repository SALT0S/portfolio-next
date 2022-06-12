export const Newsletter = () => {
  return (
    <section className="container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 bg-black py-[15%] px-[6%] dark:bg-zinc-900 md:p-[6%] lg:grid-cols-2">
        <div>
          <h3 className="text-5xl font-semibold text-white">
            Join my newsletter
          </h3>
          <p className="mt-5 text-lg text-neutral-200">
            Join my newsletter to get new posts before anyone else, I&apos;ll
            send you an email with links to all of the articles.
          </p>
        </div>

        <div className=" gap-3 md:flex">
          <label className="block w-full">
            <input
              type="email"
              className="peer block w-full rounded-md border-gray-300 bg-black py-3 pl-7 pr-12 text-white focus:border-white focus:ring-white peer-invalid:text-pink-600 dark:border-zinc-500 dark:bg-zinc-900 dark:focus:ring-white sm:text-sm"
              placeholder="Your Email"
            />

            <p className="mt-2 hidden text-sm text-pink-600 peer-invalid:block dark:text-pink-600">
              Please provide a valid email address.
            </p>
          </label>

          <button className="mt-5 w-full rounded-md bg-white py-3 px-5 text-black hover:bg-gray-200 md:mt-0 md:w-auto">
            SUSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};
