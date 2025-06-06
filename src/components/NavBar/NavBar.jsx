import { Link } from "react-router";
import { FavList } from "../FavList/FavList";
const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="">Home</Link>
        <Link to="/players"> Search</Link>
        <div className="dropdown">
          <button class="dropbtn">
            Favourites<i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <FavList />
          </div>
        </div>
      </div>
    </>
  );
};

export { NavBar };

// Reference: https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp
