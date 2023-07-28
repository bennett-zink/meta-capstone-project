import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? (
        ""
      ) : (
        <Link to="/">
          <img
            src={require("../assets/llr-logo.png")}
            alt="Little Lemon logo"
            className="nav-image"
          ></img>
        </Link>
      )}
      <Link className="hover-effect" to="/">
        <h1>HOME</h1>
      </Link>
      <Link className="hover-effect" to="/about">
        <h1>ABOUT</h1>
      </Link>
      <a
        className="hover-effect"
        href={require("../assets/menu.webp")}
        target="_blank"
        rel="noreferrer"
      >
        <h1>MENU</h1>
      </a>
      <Link className="hover-effect" to="/reservations">
        <h1>RESERVATIONS</h1>
      </Link>
      <Link className="hover-effect" to="/order">
        <h1>ORDER</h1>
      </Link>
      <Link className="hover-effect" to="/login">
        <h1>LOGIN</h1>
      </Link>
    </menu>
  );
}
