import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      themes={["light", "dark"]}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
