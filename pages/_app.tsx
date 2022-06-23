import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      setAttribute={false}
      defaultTheme="light"
      themes={["light", "dark"]}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
