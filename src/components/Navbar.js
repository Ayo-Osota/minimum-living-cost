import logo from "../assets/logo.png"
import { links } from "../data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="primary-header container">
      <div className="top-nav">
        <button
          type="button"
          className="hamburger display-lg-none"
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={() => setIsSidebarOpen(true)}
        >
        <AiOutlineMenu/>
        </button>
        <img className="logo" src={logo} alt="logo" />
        <div className={isSidebarOpen ? "nav-wrapper sidebar-open" : "nav-wrapper"}>
          <div className="nav-header flex display-lg-none">
            <img className="logo" src={logo} alt="logo" />
            <button
              type="button"
              className="close-btn"
              aria-controls="close"
              aria-expanded="false"
              onClick={() => setIsSidebarOpen(false)}
            >
              <AiOutlineClose/>
              </button>
          </div>
          <nav className="primary-nav">
            <ul role="list">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}><a href={url}>{text}</a></li>
                )
              })}
            </ul>
          </nav>
          <button className="customer-care-btn display-lg-none"></button>
        </div>
      </div>
    </header>
  )
}

export default Navbar;