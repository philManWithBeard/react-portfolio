import React from "react";
import { Link } from "react-router-dom";

// takes a link and a title as props and returns a React-Router link with bootstrap utility class styling
export default function Button(props) {
  return (
    <>
      <Link
        to={props.link}
        target="_blank"
        className="btn-dark align-items-center rounded-0 btn btn-primary btn-lg px-4 d-block py-1 mb-3"
      >
        {props.title}
      </Link>
    </>
  );
}
