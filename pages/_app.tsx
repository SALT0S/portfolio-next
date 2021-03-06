import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload" id="google-script">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
    `}
      </Script>

      <ThemeProvider
        attribute="class"
        enableSystem={false}
        themes={["light", "dark"]}
      >
        <DefaultSeo
          titleTemplate="%s | Jose Sanchez S"
          defaultTitle="Jose Sanchez S | Portfolio"
          description="Hello, my name is José Sánchez S. This is my website, I am a Front End Developer and here you can find some of the projects that I have worked with, some skills that I have and you can read my blog"
          openGraph={{
            type: "website",
            locale: "en_US",
            url: "https://joseschz.com",
            title: "Jose Sanchez Saltos | Portfolio",
            description:
              "Hello, my name is José Sánchez S. This is my website, I am a Front End Developer and here you can find some of the projects that I have worked with, some skills that I have and you can read my blog",
            images: [
              {
                url: "https://res.cloudinary.com/joseschzslts/image/upload/v1656919554/Banner_6ac719ac7c.png",
                width: 1200,
                height: 630,
                alt: "joseschz-banner",
              },
            ],
            site_name: "Jose Sanchez S",
          }}
          additionalMetaTags={[
            {
              name: "keywords",
              content:
                "Jose, Sanchez, Saltos, Software, Web Developer, Front End, Portfolio, Jose Sanchez S, Jose Sanchez Saltos,",
            },
          ]}
          twitter={{
            handle: "@Jose_schzs",
            cardType: "summary_large_image",
          }}
        />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
