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
          <meta
            name="google-site-verification"
            content="SADsZJG4_2hV7Tviu2bTkY2CUFCtufFzcw6nQwHgN8E"
          />
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

          <meta name="title" content="Ahmed Adebisi" />
          <meta name="author" content="Ahmed Adebisi" />
          <meta
            name="description"
            content="A software engineer based in Lagos, Nigeria specializing in building amazing web and mobile applications."
          />
          <meta
            name="keywords"
            content="Ahmed, Ahmed, Adebisi, Ahmed Adebisi,  Adebisi Ahmed, Adebisi Ahmed, Ahmed, developer, front-end developer, front-end, freelance, freelance developer, freelancer, front-end web developer, web developer, website developer, HTML5, HTML5 developer, CSS3, CSS, CSS3 developer, SASS, SASS developer, Javascript, react developer, react-native developer, Javascript developer, mobile developer, front-end mobile developer, front-end developer in Lagos, front-end developer in Nigeria, front-end developer in Lagos - Nigeria"
          />
          <meta
            name="pagename"
            content="Ahmed Adebisi - A software engineer based in Lagos, Nigeria specializing in building amazing web and mobile applications."
          />

          <meta name="url" content="https://adebisiahmed.dev" />
          <meta itemProp="name" content="Ahmed Adebisi" />
          <meta
            itemProp="description"
            content="A software engineer based in Lagos, Nigeria specializing in building amazing web and mobile applications."
          />
          <meta
            itemProp="image"
            content="https://adebisiahmed.dev/me.png"
          />
          <meta property="og:site_name" content="Ahmed Adebisi" />
          <meta property="og:type" content="website" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta property="og:url" content="https://adebisiahmed.dev" />
          <meta property="og:title" content="Ahmed Adebisi" />
          <meta
            property="og:description"
            content="A software engineer based in Lagos, Nigeria specializing in building amazing web and mobile applications."
          />
          <meta
            property="og:image"
            content="https://adebisiahmed.dev/me.png"
          />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:url" content="https://adebisiahmed.dev" />
          <meta property="twitter:title" content="Ahmed Adebisi" />
          <meta name="twitter:site" content="@ade_phil" />
          <meta name="twitter:creator" content="@ade_phil" />
          <meta
            property="twitter:description"
            content="A Front-End based developer in Lagos, Nigeria."
          />
          <meta
            property="twitter:image"
            content="https://adebisiahmed.dev/me.png"
          />
          <meta
            property="twitter:image:alt"
            content="A picture of Ahmed Adebisi"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
