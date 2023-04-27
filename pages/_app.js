import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/reusables/navbar';
import Footer from '../components/reusables/footer';
import React from 'react'
import { AppProps } from 'next/app'
import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react'

import { frontendConfig } from '../config/frontendConfig'
function MyApp({ Component, pageProps }) {

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig())
}

  return (
    <SuperTokensWrapper>
      <Head> 
        <link rel="icon" href="/favicon.ico" />
        <title>404: Not Found</title>
        <meta name="og:image" content='/og-image.png'/>
        <meta name="description" content="A safe, supportive and empowering home for the local LGBTQ+ community. We believe in a world where all people are free to express their gender identity and sexual orientation with pride."/>
        <meta name="og:description" content='A safe, supportive and empowering home for the local LGBTQ+ community. We believe in a world where all people are free to express their gender identity and sexual orientation with pride.'/>
        <meta name="og:title" content='QueerTeen India: the Safe Space of Desi Queer Teens'/>
        <meta property="og:locale" content="en_GB" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <div style={{backgroundColor:"#fff"}}><Footer/></div>
    </SuperTokensWrapper>
  );
}


export default MyApp
