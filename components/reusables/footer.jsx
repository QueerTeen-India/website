import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <h3>
                    Queerteen India
                </h3>
                <h4>
                    Community Center
                </h4>
                <p>
                    Furthering our cause is the most important goal of our organization. We seek to support, empower,
                    and provide high quality resources to our community in a safe and secure environment.
                    Our success isn’t measured in terms of wealth or profit margin, but by the value we provide to those we serve.
                </p>
                <div className="footer-left-social">
                    <a href="#">
                        <FacebookIcon style={{ fontSize: "inherit" }}></FacebookIcon>
                    </a>
                    <a href="#">
                        <InstagramIcon style={{ fontSize: "inherit" }} />
                    </a>
                    <a href="#">
                        <TwitterIcon style={{ fontSize: "inherit" }} />
                    </a>
                    <a href="#">
                        <YouTubeIcon style={{ fontSize: "inherit" }} />
                    </a>
                </div>
            </div>
            <div className="footer-mid">
                <h3>
                    We have so much going on, be the first to find out!
                </h3>
                <div className="footer-mid-form">
                    <form className="footer-mid-form-form">
                        <input type="text" placeholder="Enter your email address" />
                        <button>Submit</button>
                    </form>
                    <p>
                        © Queerteen India. All rights reserved. <br />
                        Write to us at 

                        <span> </span><a href="mailto:contact.queerteenindia@gmail.com">contact.queerteenindia@gmail.com</a>

                    </p>
                </div>

            </div>
            <div className="footer-right">
                <ul className="footer-right-links">
                    <li>
                        <a href="#">Programs & Services</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>

                    <li>
                        <a href="#">Ways to Give</a>
                    </li>

                    <li>
                        <a href="#">Events</a>
                    </li>
                    <li>
                        <a href="#" className="footer-right-links-button"> Make a Donation</a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Footer;