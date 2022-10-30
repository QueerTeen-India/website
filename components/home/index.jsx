import Head from 'next/head'
import Image from 'next/image'
import Header from './header'
import Events from './events';
import Service from './services';
const Home = () => {
    return (
        <div className='home'>
            <Head>
                <title>QueerTeen India</title>
            </Head>
            <Header/>
            <Events/>
            <Service/>
        </div>
    )
}
    
export default Home;