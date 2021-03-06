interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  error?: boolean;
  errorMessage?: string;
}
const Input = ({
  id,
  name,
  label,
  placeholder,
  error = false,
  errorMessage = "",
  ...props
}: InputProps) => {
  return (
    <div className="mt-4 block">
      <label className="mb-3 block" htmlFor={id}>
        {label}
      </label>
      <input
        {...props}
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className="block w-full rounded-md border-gray-400 py-3 pl-7 pr-12 focus:border-gray-500 focus:ring-gray-500 dark:border-zinc-500 dark:bg-zinc-900 dark:focus:ring-white sm:text-sm"
        autoComplete="nope"
      />
      {error && (
        <p className="mt-2 text-sm text-pink-600 dark:text-pink-600">
          *{errorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
