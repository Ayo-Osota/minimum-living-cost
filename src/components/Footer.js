import logo from "../assets/logo.png";
import { contacts, socialMedia } from "../data";

const Footer = () => {
    return (
        <footer className="footer container">
            <section className="container">
            <div className="even-columns">
                <a href="/" className="display-sm-none">
                    <h1 className="text-primary-400">Logo</h1>
                    <img className="logo" src={logo} alt="logo" />
                </a>
                <div>
                    <article>
                        {contacts.map((contact) => {
                            const { id, icon, text } = contact;
                            return (
                                <a key={id} href="/">
                                    {icon} <p>{text}</p>
                                </a>
                            )
                        })}
                    </article>
                    <article className="flex">
                        <p>Social Media</p>
                        {socialMedia.map((socialmedium) => {
                            const { id, icon, link } = socialmedium;
                            return (
                                <a key={id} href={link}>{icon}</a>
                            )
                        })}
                    </article>
                </div>
            </div>
            <div className="even-columns">
                <nav className="display-sm-none">
                    <ul className="flex" role="list">
                        <li><a href="/">about us</a></li>
                        <li><a href="/">conatct us</a></li>
                        <li><a href="/">help</a></li>
                        <li><a href="/">privacy policy</a></li>
                        <li><a href="/">disclaimer</a></li>
                    </ul>
                </nav>
                <p>Copyright © {new Date().getFullYear()} Minimumlivingcost. All Rights Reserved.</p>
            </div>
            </section>
        </footer>

    )
}

export default Footer;