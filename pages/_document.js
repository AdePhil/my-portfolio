import Document, { Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>⭐️ Adebisi Ahmed</title>
          <meta name="Description" content="Adebisi Ahmed's Website"></meta>
          <meta name="google-site-verification" content="SADsZJG4_2hV7Tviu2bTkY2CUFCtufFzcw6nQwHgN8E" />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:300,500,600,800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:600&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
