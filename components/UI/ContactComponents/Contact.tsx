export const Contact = () => {
  return (
    <section className="container mx-auto my-10 grid max-w-7xl gap-7 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
      <div>
        <p>Contact data</p>

        <article>
          <h2 className="my-5 text-lg font-bold">About Me</h2>

          <p className="my-4">
            I was born in Manabí - Portoviejo, since I was a kid I was always
            interested in technology, but it was not until I was 8 years old
            that I had my first computer and it was the first time I tried the
            internet.
          </p>

          <p className="my-4">read more</p>
        </article>
      </div>

      <div>
        <h1 className="mb-4 text-lg font-bold">Contact Me</h1>

        <form>
          <label className="mt-4 block">
            <span className="mb-3 block ">Your Name</span>
            <input
              type="text"
              className="peer block w-full rounded-md border-gray-400 py-3 pl-7 pr-12 focus:border-gray-500 focus:ring-gray-500 peer-invalid:text-pink-600 dark:border-zinc-500 dark:bg-zinc-900 dark:focus:ring-white sm:text-sm"
              placeholder="John doe"
            />

            <p className="mt-2 hidden text-sm text-pink-600 peer-required:block peer-invalid:block dark:text-pink-600">
              Please provide a name.
            </p>
          </label>

          <label className="mt-4 block">
            <span className="mb-3 block ">Your Email</span>
            <input
              type="email"
              className="peer block w-full rounded-md border-gray-400 py-3 pl-7 pr-12 focus:border-gray-500 focus:ring-gray-500 peer-invalid:text-pink-600 dark:border-zinc-500 dark:bg-zinc-900 dark:focus:ring-white sm:text-sm"
              placeholder="you@example.com"
            />

            <p className="mt-2 hidden text-sm text-pink-600 peer-required:block peer-invalid:block dark:text-pink-600">
              Please provide a valid email address.
            </p>
          </label>

          <label className="mt-4 block">
            <span className="mb-3 block ">Message</span>
            <textarea
              id="about"
              name="about"
              rows={4}
              placeholder="Your message"
              className="peer block w-full resize-none rounded-md border border-gray-400 pl-7 pr-12 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-zinc-500 dark:bg-zinc-900 dark:focus:ring-white sm:text-sm"
            />
            <p className="mt-2 hidden text-sm text-pink-600 peer-required:block peer-invalid:block dark:text-pink-600">
              Please provide a valid text message.
            </p>
          </label>

          <button className="mt-4 w-full rounded-md bg-black py-3 px-5 text-white hover:bg-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};
