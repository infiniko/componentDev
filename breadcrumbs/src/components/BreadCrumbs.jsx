import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/").filter((x) => x);
  return (
    <div>
      {pathName.length > 0 && <Link to="/">Home</Link>}
      {pathName.map((p, index) => {
        const isLast = index === pathName.length - 1;

        return isLast ? (
          <span key={index}>/ {p}</span>
        ) : (
          <span key={index}>
            <Link to={`/${p}`}>/ {p}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
