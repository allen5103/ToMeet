import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './style.scss';

const Header = ({ routeMap }) => {
	return (
		<nav className="header">
			<Link className="header__logo" to="/">
				Logo
			</Link>
			<div className="header__linkContent">
				{routeMap?.map(r => (
					<Link key={r.name} className="header__linkContent__link btn" to={r.path}>
						{r.name}
					</Link>
				))}
			</div>
		</nav>
	);
};

Header.propTypes = {};

export default Header;
