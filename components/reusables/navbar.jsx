import Image from "next/image";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
    const links = [{
        name: "Programs & Services",
        link: '/programs-and-services'
    },
    {
        name: "About",
        link: '/about'
    },
    {
        name: "Events",
        link: "/events"
    },
    {
        name: "News",
        link: "/news"
    }
    ]
    return (<div className="navbar">
        <div className="navbar-left">
            <div className="navbar-left-logo">
                <Image width={85} height={98}
                    layout="fill" src='/logo.png' alt="logo" />
                <h3>Queerteen India</h3>
            </div>

        </div>
        <div className="navbar-right">
            <div className="navbar-right-search">
                <SearchIcon className="navbar-right-search-icon" />
                <input placeholder="Search..." />
            </div>
            <div className="navbar-right-nav">
                {links.map((link, index) => {
                    return <Link className="navbar-right-nav-each" href={link.link} key={index}>{link.name}</Link>
                })}
            </div>
            <Link href="/make-a-donation" style={{textDecoration:'none'}} >
                <p className="navbar-right-donation">
                    Make a Donation
                </p>
            </Link>
        </div>

    </div>)
}

export default Navbar;