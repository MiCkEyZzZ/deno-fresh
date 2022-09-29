import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

import { Footer, Header } from "../components/index.ts";
import { siteConfig } from "../config/site.config.ts";

const CSS = `::selection {
    color: #ffffff;
    background-color: #000000;
}`;

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="title" content={siteConfig.title} />
        <meta name="description" content={siteConfig.description} />
        <meta name="theme-color" content="#000000" />
        <style>{CSS}</style>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.ogImage} />
        <meta property="twitter:card" content="Описание большой картинки" />
        <meta property="twitter:title" content={siteConfig.title} />
        <meta property="twitter:description" content={siteConfig.description} />
        <meta property="twitter:image" content={siteConfig.ogImage} />
      </Head>
      <div
        class="min-h-screen grid grid-cols-1"
        style="grid-template-rows: auto 1fr auto;"
      >
        <Header />
        <Component />
        <Footer />
      </div>
    </>
  );
}
