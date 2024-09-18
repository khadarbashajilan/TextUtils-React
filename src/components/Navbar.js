import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        style={{
          backgroundColor: props.mode === "dark" ? "#0C0C0C" : "#B4D4FF",
        }}
        className={`navbar navbar-expand-lg navbar-${props.mode} `}
      >
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div
              className={`text-${props.mode === "light" ? "dark" : "light"}`}
              onClick={props.toggleMode}
              style={{ cursor: "pointer" }}
            >
              <i className="dark mx-4">
                <FontAwesomeIcon icon={faMoon} />
              </i>
            </div>
            <form className="d-flex " role="search">
              <input
                className="form-control inp me-2"
                style={{
                  backgroundColor: props.mode === "dark" ? "#575757" : "white",
                  color: props.mode === "dark" ? "white" : "#042743",
                }}
                type="search"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-primary"
                class="btn btn-primary"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};
