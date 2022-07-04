import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />

      <main className="mb-14">{children}</main>

      <Footer />
    </>
  );
};
