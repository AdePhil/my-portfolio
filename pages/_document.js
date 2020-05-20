import Document, { Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:300,500,600,800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:600&display=swap"
            rel="stylesheet"
          ></link>
          {/* <link
            rel="stylesheet"
            href="https://unpkg.com/swiper/css/swiper.min.css"
          ></link> */}
        </Head>
        <body>
          <form
            name="contact"
            data-netlify="true"
            netlify-honeypot="bot-field"
            hidden
          >
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="text" name="message" />
          </form>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
