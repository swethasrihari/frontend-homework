import { Link, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Search from "../views/Search";
import Houses from "../views/Houses";

function Navbar(prop) {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className="link">
              Search
            </Link>
          </li>
          <li>
            <Link to="/houses" className="link">
              Houses
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search character={prop} />} />
        <Route path="/houses" element={<Houses character={prop} />} />
      </Routes>
    </div>
  );
}

export default Navbar;
