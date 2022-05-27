import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" themes={["dark", "light"]}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
