/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import Donation from './donation'
import { useState } from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import GoogleIcon from '@mui/icons-material/Google';
import {
    getCookie
} from 'cookies-next';

const getUrl = async () => {
    let url = await axios.get('/api/auth/google/url')
    return url.data.url
}
const Navbar = (props) => {

    const user = props.auth;
    console.log(user)
    const [profile, setProfile] = useState(false)

    const links = [
        {
            name: "Forum",
            link: '/forum'
        },
        {
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
            {user.loggedInStatus === 1 ? <div className="navbar-right-user">

                <img onClick={() => setProfile(!profile)} className="navbar-right-profile" src={user.profilePic} alt="user" />
            </div> : <div className="navbar-right-login" onClick={async () => {
                document.location.href = await getUrl()
            }}><p>Login</p>  <GoogleIcon className="navbar-right-login-icon" /></div>}
            {profile ? <div className="navbar-right-profile-dropdown">
                <Link className="navbar-right-profile-dropdown-each" href="/profile">Profile <AccountBoxIcon className="navbar-right-profile-dropdown-each-icon" /></Link>
                <div style={{ cursor: "pointer" }} onClick={() => {
                    setProfile(false)
                    props.logout();
                }} className="navbar-right-profile-dropdown-each" href="/api/auth/logout">Logout <LogoutIcon className="navbar-right-profile-dropdown-each-icon" /></div>
                {user.adminLevel>0?<Link className="navbar-right-profile-dropdown-each" href="/admin">Admin  <SupervisorAccountIcon className="navbar-right-profile-dropdown-each-icon"/></Link>:null}
            </div>
                : null}
        </div>

    </div>)
}

export default Navbar;