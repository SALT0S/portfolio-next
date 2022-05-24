export const Contact = () => {
  return (
    <section className="container mx-auto grid max-w-7xl gap-7 px-4 pt-10 sm:px-6 md:grid-cols-2 lg:px-8">
      <div>
        <p>Contact data</p>

        <article>
          <h2 className="my-5 text-lg font-semibold">About Me</h2>

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
        <h1>Contact Me</h1>

        <form>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              type="email"
              className="peer block w-full rounded-md border-gray-700 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 peer-invalid:text-pink-600 sm:text-sm"
              placeholder="you@example.com"
            />

            <p className="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
              Please provide a valid email address.
            </p>
          </label>

          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              About
            </label>
            <div className="mt-1">
              <textarea
                id="about"
                name="about"
                rows={4}
                className="peer mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder=" you@example.com"
                defaultValue={""}
              />
            </div>
            <p className="invisible mt-2 text-sm text-pink-600 peer-required:visible peer-invalid:visible">
              Please provide a valid text message.
            </p>
          </div>
        </form>

        <p>Your Full Name</p>
        <input type="text" name="" id="" />
        <p>Your Email</p>
        <input type="email" name="" id="" />

        <p>Your Message</p>
        <input type="text" name="" id="" />
      </div>
    </section>
  );
};
