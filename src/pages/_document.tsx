import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="en">
    <Head>
      <meta charSet="utf-8" />
      <meta name="description" content="My personal online portifolio..." />
      <meta name="author" content="Bruno Alves" />
    </Head>

    <body className="bg-white950 font-inter">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
