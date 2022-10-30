import Image from "next/image";
import Link from "next/link";


const Services = () => {
    return (
        <div className="home-services">

            <div className="home-services-left" >

                <Image src='/home-service-left.png' alt="pride" fill={true} />
            </div>
            <div className="home-services-content">
                <div className="home-services-content-inner">
                    <p>What We Offer</p>
                    <h3>From health services to educational and cultural programs, we can help.</h3>
                    <Link href="/about" style={{ textDecoration: 'none' }} >
                        <p className="home-header-content-right-link">
                            Our Programs & Services
                        </p>
                    </Link>
                </div>
            </div>
            <div className="home-services-right" >

                <Image src='/home-service-right.png'
                    fill={true}
                    alt="pride" />

            </div>
        </div>
    )
}

export default Services;