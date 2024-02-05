import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
  return (
    <>
      <header class="navbar navbar-expand-lg sticky-top p-4">
        <div class="container-fluid">
          <Link to={"/#"}>
            <span class="navbar-brand h1 m-0">Phil Burrows</span>
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
            <span class="navbar-toggler-icon"></span>
          </button>
          <nav class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link to={"/#about-me"} class="nav-link">
                  About Me
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/#skills"} class="nav-link">
                  Skills
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"projects/"} class="nav-link">
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/contact"} class="nav-link">
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
