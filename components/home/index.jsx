import Head from 'next/head'
import Image from 'next/image'
import Header from './header'
import Events from './events';
const Home = () => {
    return (
        <div className='home'>
            <Head>
                <title>QueerTeen India</title>
            </Head>
            <Header/>
            <Events/>
        </div>
    )
}
    
export default Home;