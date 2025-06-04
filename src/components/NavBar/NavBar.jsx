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
          <li className="navobject">Favourites</li>
        </ul>
      </div>
    </>
  );
};

export { NavBar };
