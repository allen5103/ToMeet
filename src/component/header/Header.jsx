import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Header = ({ routeMap }) => {
  return (
    <nav>
      <div className="logo"></div>
      {routeMap?.map((r) => (
        <Link key={r.name} to={r.path}>
          {r.name}
        </Link>
      ))}
    </nav>
  );
};

Header.propTypes = {};

export default Header;
