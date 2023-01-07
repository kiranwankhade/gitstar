import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  {
    path: "/",
    text: "All"
  },
  {
    path: "/html",
    text: "HTML"
  },
  {
    path: "/css",
    text: "CSS"
  },
  {
    path: "/javascript",
    text: "JavaScript"
  }
];

function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" , marginTop:'20px'}}>
      {links.map((link) => (
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
          key={link.path}
          to={link.path}
        style={{width:'100px', borderRadius:'10px',padding:'10px'}}>
          {link.text}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
