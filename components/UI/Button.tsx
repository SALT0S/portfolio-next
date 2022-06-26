import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

interface ButtonProps {
  url: string;
  text: string;
}

export const LinkButton: React.FC<ButtonProps> = ({ url, text }) => {
  return (
    <Link href={url} prefetch={false} passHref>
      <a className="inline-flex gap-1 font-bold transition-all hover:gap-2">
        {text} <HiArrowNarrowRight className="self-center" />
      </a>
    </Link>
  );
};
