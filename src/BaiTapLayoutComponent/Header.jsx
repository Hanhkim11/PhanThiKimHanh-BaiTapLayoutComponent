import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mt-2" style={{ height: "3rem" }}>
      <div className="container d-flex justify-content-around align-items-center">
        <a className="navbar-brand fs-5" href="#">
          Start Bootstrap
        </a>
        <ul className="navbar-nav flex-row ">
          <li className="nav-item px-2">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" href="#">
              Services
            </a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
