import Image from "next/image";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import Donation from './donation'
import { useState } from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { useUser } from '@auth0/nextjs-auth0/client';
import LoginIcon from '@mui/icons-material/Login';
const Navbar = () => {
    const { user, error, isLoading } = useUser();
    const [profile, setProfile] = useState(false)
    console.log(user, error)
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
    const [open, setOpen] = useState(false)
    return (<div className="navbar">
        <Link href="/" style={{ color: 'inherit', textDecoration: 'inherit' }} className="navbar-left">
            <div className="navbar-left-logo">
                <Image width={85} height={98}
                    layout="fill" src='/logo.png' alt="logo" />
                <h3>Queerteen India</h3>
            </div>

        </Link>
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
            <button onClick={(a) => setOpen(!open)} className="navbar-right-donation">
                Make a Donation
            </button>
            <Donation setOpen={setOpen} open={open} />
            {user ? <div className="navbar-right-user">
                <img onClick={() => setProfile(!profile)} className="navbar-right-profile" src={user.picture} alt="user" />
            </div> : <Link href="/api/auth/login" className="navbar-right-login"><LoginIcon className="navbar-right-login-icon" /></Link>}
            {profile ? <div className="navbar-right-profile-dropdown">
                <Link className="navbar-right-profile-dropdown-each" href="/profile">Profile <AccountBoxIcon className="navbar-right-profile-dropdown-each-icon" /></Link>
                <Link className="navbar-right-profile-dropdown-each" href="/api/auth/logout">Logout <LogoutIcon className="navbar-right-profile-dropdown-each-icon" /></Link>
            </div>
                : null}
        </div>

    </div>)
}

export default Navbar;