import { AppProps } from 'next/app'
import Script from 'next/script'
import '../styles/index.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import localFont from 'next/font/local'
import Head from 'next/head'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const poppins = localFont({
  src: [
    {
      path: './Poppins-Regular.ttf',
      weight: '400'
    }
  ],
  variable: '--font-poppins'
})



function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-W5485Z4' });
}, []);
  return (
    <>
    <Head>
    </Head>
    <div className={poppins.className}>
      <Script src="/js/app.js" />
      <Script src="/js/fontAwesome.js" />
      <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
