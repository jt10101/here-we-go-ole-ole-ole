import { Link } from "react-router";
import { FavList } from "../FavList/FavList";
const NavBar = ({ favPlayers }) => {
  return (
    <>
      <div className="navbar">
        <Link to="">Home</Link>
        <Link to="/players"> Search</Link>
        <div className="dropdown">
          <button className="dropbtn">
            Favourites<i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <FavList favPlayers={favPlayers} />
          </div>
        </div>
      </div>
    </>
  );
};

export { NavBar };

// Reference: https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp
