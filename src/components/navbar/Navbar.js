/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <>
    <div className={click ? "navbar" : ""} onClick={() => Close()} />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div class="nav-wrapper">
          <a
              href="#"
              data-target="slide-out"
              class="sidenav-trigger black-text"
              onClick={handleClick}
            >
              <i class="fa-solid fa-bars"></i>
            </a>
            <NavLink exact to="/" className="nav-logo black-text">
            <i class="fa-solid fa-code"></i>  KAW CV
            </NavLink>
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}

            <ul
              className={click ? "nav-menu active" : "nav-menu"}
            >
              <li className="nav-item">
             <a activeclassname="active" class="nav-links" href="https://kaw-portfolio.netlify.app" rel="noreferrer"><i class="fa-solid fa-address-card fa-sm"></i>Portfolio</a>
            </li>
            </ul>
          </div>
        </nav>
    </>
  );
};

export default Navbar;
