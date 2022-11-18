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
              KAW Inc.
            </NavLink>
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}

            <ul
              className={click ? "nav-menu active" : "nav-menu"}
            >
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links "
                  onClick={click ? handleClick : null}
                >
                  <i class="fa-solid fa-house fa-sm"></i> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/Skills"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  <i class="fa-solid fa-wand-magic-sparkles fa-sm"></i> Languages
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/Experience"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  <i class="fa-solid fa-id-badge fa-sm"></i> Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/Education"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  <i class="fa-solid fa-user-graduate fa-sm"></i> Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/Portfolio"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  <i class="fa-solid fa-address-card fa-sm"></i> Portfolio
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
    </>
  );
};

export default Navbar;
