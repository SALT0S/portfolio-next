import { NextSeo } from "next-seo";
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
      <NextSeo
        title="Jose Sanchez S. Portfolio"
        description="Hello, my name is José Sánchez S. This is my website, I am a Front End Developer and here you can find some of the projects that I have worked with, some skills that I have and you can read my blog"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://joseschz.com",
          title: "Portfolio | Jose Sanchez S.",
          description:
            "Hello, my name is José Sánchez S. This is my website, I am a Front End Developer and here you can find some of the projects that I have worked with, some skills that I have and you can read my blog",
          images: [
            {
              url: "/public/static/img/Banner.png",
              width: 1200,
              height: 630,
              alt: "joseschz-banner",
            },
          ],
          site_name: "Jose Sánchez S.",
        }}
        twitter={{
          handle: "@Jose_schzs",
          cardType: "summary_large_image",
        }}
      />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
