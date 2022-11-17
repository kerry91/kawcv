import { NavLink } from "react-router-dom";

const Homebtn = () => {
    return(
        <>
        <ul>
        <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links "
                >
                  <i class="fa-solid fa-house fa-sm"></i>
                </NavLink>
              </li>
        </ul>
        </>
   )
};

export default Homebtn;