import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/">Home</Link>
        <Link to="/bmi">Bmi</Link>
        <Link to="/register">Register</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/uppercase">UpperCase</Link>
      </nav>
      <hr />
    </div>
  );
}
