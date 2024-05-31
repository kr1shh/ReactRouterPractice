import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-around p-6 bg-gray-100 font-sans">
      <h4 className="font-mono text-xl font-black">React</h4>
      <ul className="flex gap-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => 
              `font-sans ${isActive ? "text-red-500" : "text-black"} hover:text-red-500`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              `font-sans ${isActive ? "text-red-500" : "text-black"} hover:text-red-500`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `font-sans ${isActive ? "text-red-500" : "text-black"} hover:text-red-500`
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user"
            className={({ isActive }) => 
              `font-sans ${isActive ? "text-red-500" : "text-black"} hover:text-red-500`
            }
          >
            User
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
