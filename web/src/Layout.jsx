import React, { useEffect } from "react";

import { useHistory, Link } from "react-router-dom";

import PropTypes from "prop-types";
import "./style.scss";

const Layout = ({ children, routeMap }) => {
  const history = useHistory();
  return (
    <>
      <nav>
        {routeMap?.map((r) => (
          <Link key={r.name} to={r.path}>
            {r.name}
          </Link>
        ))}
      </nav>
      <div>{children}</div>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
