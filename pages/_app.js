import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/reusables/navbar';
import Footer from '../components/reusables/footer';
import React from 'react'
import { AppProps } from 'next/app'
import store from '../redux/store';
import { Provider, connect } from 'react-redux';
import mapDispatchToProps from '../reduxMaps/dispatch/auth';
import mapStateToProps from '../reduxMaps/props/root';
import ClipLoader from "react-spinners/ClipLoader";

function MyApp({ Component, pageProps }) {
  
  let C = connect(mapStateToProps, mapDispatchToProps)((props)=>{
    if(props.auth.loggedInStatus === 0){
      
      props.load()
      return <div className='loading'>
        <Head> 
              <link rel="icon" href="/favicon.ico" />
              <title>404: Not Found</title>
              <meta name="og:image" content='/og-image.png'/>
              <meta name="description" content="A safe, supportive and empowering home for the local LGBTQ+ community. We believe in a world where all people are free to express their gender identity and sexual orientation with pride."/>
              <meta name="og:description" content='A safe, supportive and empowering home for the local LGBTQ+ community. We believe in a world where all people are free to express their gender identity and sexual orientation with pride.'/>
              <meta name="og:title" content='QueerTeen India: the Safe Space of Desi Queer Teens'/>
              <meta property="og:locale" content="en_GB" />
        </Head>
            <ClipLoader
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
      </div> 
    }
    
    console.log(props)
    return <> <Navbar {...props}/> <Component {...props}/> </>
  })


  return (<Provider store={store}>
      <Head> 
        <link rel="icon" href="/favicon.ico" />
        <title>404: Not Found</title>
        <meta name="og:image" content='/og-image.png'/>
        <meta name="description" content="A safe, supportive and empowering home for the local LGBTQ+ community. We believe in a world where all people are free to express their gender identity and sexual orientation with pride."/>
        <meta name="og:description" content='A safe, supportive and empowering home for the local LGBTQ+ community. We believe in a world where all people are free to express their gender identity and sexual orientation with pride.'/>
        <meta name="og:title" content='QueerTeen India: the Safe Space of Desi Queer Teens'/>
        <meta property="og:locale" content="en_GB" />
      </Head>
      <C {...pageProps} />
      <div style={{backgroundColor:"#fff"}}><Footer/></div>
      </Provider>
  );
}


export default (MyApp)
