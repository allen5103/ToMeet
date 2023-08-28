import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Footer = () => {
	return (
		<div className="footer__container">
			<div className="footer__container__socialMedia flex">
				<div className="btn">Facebook</div>
				<div className="btn">Instagram</div>
			</div>
			<div className="footer__container__copyRight flex yCenter">
				<div className="footer__container__copyRight__email">
					<p>圖迷創意 to meet Studio</p>
					<p>tomeet.co@gmil.com</p>
				</div>
				<div className="footer__container__copyRight__text">@ 2023 tomeet Studio All rights reserved.</div>
			</div>
		</div>
	);
};

Footer.propTypes = {};

export default Footer;
