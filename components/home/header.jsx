import Image from "next/image";

import Link from "next/link";
const Header = () => {
    return (
        <div className="home-header">
            <div className="home-header-header">
                <h2>Welcome to the Safe Space of Desi Queer Teens</h2>
                <p>A safe, supportive and empowering home for the local LGBTQ+ community</p>
            </div>
            <div className="home-header-content">
                <Image
                    layout="fill"
                    objectFit="contain"
                    width={480}
                    height={480}
                    className="home-header-content-image"
                    src="/home-header-image.png"
                    alt="Happy Queer People"
                />
                <div className="home-header-content-right">
                    <div className="home-header-content-right-inner">
                        <h3>
                            We Believe
                        </h3>
                        <p>In a world where all people are free to express their gender identity and sexual orientation with pride.</p>
                        <Link href="/about" style={{ textDecoration: 'none' }} >
                            <p className="home-header-content-right-link">
                                Read About the Center
                            </p>
                        </Link>
                    </div>
                </div>

            </div>
            <video src="/home-video.mp4" className="home-header-cover" muted loop autoPlay>
            </video>
        </div>
    )

}

export default Header;