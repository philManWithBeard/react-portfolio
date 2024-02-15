import React from "react";
import { HashLink as Link } from "react-router-hash-link";

// JSX with Bootstrap and react routers Link component
export default function Header() {
  return (
    <>
      <header className="navbar navbar-expand-lg fixed-top p-4">
        <div className="container-fluid">
          <Link to={"/#"}>
            <span className="navbar-brand h1 m-0">Phil Burrows</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <nav className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to={"/#about-me"} className="nav-link">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/#skills"} className="nav-link">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/projects/#"} className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact/#"} className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
