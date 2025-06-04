import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      <div>
        <ul className="navlist">
          <li className="navobject">
            <Link to="/">Home</Link>
          </li>
          <li className="navobject">
            <Link to="/players"> Search</Link>
          </li>
          {/* https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp */}
          {/* To implement this */}
          <li className="navobject">Favourites</li>
        </ul>
      </div>
    </>
  );
};

export { NavBar };
