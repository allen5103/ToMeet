import React from 'react';

import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
import './style.scss';
import Header from './component/header/Header';

const Layout = ({ children, routeMap }) => {
	return (
		<>
			<Header routeMap={routeMap}></Header>
			<div>{children}</div>
		</>
	);
};

Layout.defaultProps = {
	children: null,
	routeMap: [],
};

Layout.propTypes = {
	children: PropTypes.element,
	routeMap: PropTypes.array,
};

export default Layout;
