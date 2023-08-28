import React from 'react';

import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
import './style.scss';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';

const Layout = ({ children, routeMap }) => {
	return (
		<>
			<Header routeMap={routeMap}></Header>
			<div id="main">{children}</div>
			<Footer />
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
