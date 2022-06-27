import { useState } from "react";
import { RiLoader5Fill } from "react-icons/ri";

import { validate } from "../../../utils/validate";
import Input from "./Input";
import TextArea from "./TextArea";

interface IValues {
  name: string;
  email: string;
  message: string;
}

interface IErrors extends Partial<IValues> {}

export const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<IErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setValues({ name: "", email: "", message: "" });
        setSuccess(true);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={values.name}
        onChange={handleChange}
        id="name"
        name="name"
        label="Your Name"
        placeholder="John Doe"
        error={!!errors.name}
        errorMessage={!!errors.name ? errors.name : ""}
      />

      <Input
        value={values.email}
        onChange={handleChange}
        id="email"
        name="email"
        label="Your Email"
        placeholder="you@example.com"
        error={!!errors.email}
        errorMessage={!!errors.email ? errors.email : ""}
      />

      <TextArea
        value={values.message}
        onChange={handleChange}
        id="message"
        name="message"
        label="Your Message"
        placeholder="Your message here..."
        error={!!errors.message}
        errorMessage={!!errors.message ? errors.message : ""}
      />

      <button
        className=" mt-4 w-full rounded-md bg-black py-3 px-5 text-lg text-white outline-none hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-opacity-60 dark:bg-zinc-900 dark:hover:bg-zinc-800"
        type="submit"
        disabled={loading}
      >
        {!loading ? (
          "SUBMIT"
        ) : (
          <div className="flex h-full w-full items-center justify-center ">
            <RiLoader5Fill className="h-8 w-8 animate-spin" />
          </div>
        )}
      </button>
      <p className="mt-5 text-green-500 dark:text-green-500">
        {success == true ? "Your message was sent successfully." : ""}
      </p>
    </form>
  );
};