import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { OnesyStyle, OnesyStyleProvider, valueObject, prefix, rtl, unit, makeClassName } from '@onesy/style-react';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />

          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="cache-control" content="no-cache, no-store, must-revalidate" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

          <link rel='manifest' href='/manifest.json' />

          <meta name='HandheldFriendly' content='True' />
          <meta name='MobileOptimized' content='320' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='robots' content='noimageindex' />
          <meta name='robots' content='follow' />
          <meta name='robots' content='noodp' />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

CustomDocument.getInitialProps = async ctx => {
  const onesyStyle = new OnesyStyle();

  onesyStyle.plugins.add = [unit, prefix, rtl, valueObject, makeClassName];

  const page = ctx.renderPage;

  ctx.renderPage = () =>
    page({
      enhanceApp: App => props => (
        <OnesyStyleProvider
          value={onesyStyle}
        >
          <App {...props} />
        </OnesyStyleProvider>
      ),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,

    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <style
        id='onesy'

        key='onesy'
      >
        {onesyStyle.css}
      </style>
    ],
  };
};
