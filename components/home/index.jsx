import Head from 'next/head'
import Image from 'next/image'
import Header from './header'
const Home = () => {
    return (
        <div className='home'>
            <Head>
                <title>QueerTeen India</title>
            </Head>
            <Header/>
        </div>
    )
}
    
export default Home;