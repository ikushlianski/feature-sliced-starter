import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <div>Sorry, page not found!</div>
      <Link to={"/"}>Return to Home page</Link>
    </>
  );
};
