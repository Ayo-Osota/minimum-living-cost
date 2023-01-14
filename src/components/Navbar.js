import logo from "../assets/logo.png"
import { links } from "../data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="primary-header">
      <div className="top-nav container">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div className={isSidebarOpen ? "nav-wrapper sidebar-open" : "nav-wrapper"}>
          <div className="nav-header flex display-lg-none">
            <a href="">
              <img className="logo" src={logo} alt="logo" />
            </a>
            <button
              type="button"
              aria-controls="close"
              aria-expanded="false"
              onClick={() => setIsSidebarOpen(false)}
            >
              <AiOutlineClose />
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
        </div>
        <button
          type="button"
          className="display-lg-none"
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={() => setIsSidebarOpen(true)}
        >
          <AiOutlineMenu />
        </button>
      </div>
    </header>
  )
}

export default Navbar;