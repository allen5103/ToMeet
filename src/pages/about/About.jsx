import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const About = props => {
	return (
		<div className="about__container">
			<h1>ABOUT US 關於圖迷</h1>
			<div className="about__container__intro flex col">
				<h2>Nice to meet you! 我們是 to meet 圖迷創意</h2>
				<h3>「初次見面以微笑招呼，為品牌開啟與客戶間美好的關係。」</h3>

				<p>
					圖迷創意於2021年創立，嶄新的品牌用迎向未來的創新思維，蘊含經驗帶來的砥礪。我們擅長用心挖掘品牌美好，耐心觀察市場走向、細心解決品牌問題，在進行為顧客規劃全面性的行銷策略。
				</p>
				<p>
					協助品牌創造並傳遞企業價值，陪伴顧客解決問題，我們期望能擔任品牌的領航員，一起航向成功的航道，讓品牌日日茁壯，更能在未來創造更加卓越的成績。
				</p>
				<p>
					我們的專業領域包含：社群行銷、口碑行銷、整合行銷、KOL行銷與平面設計...等，曾與OVO京典衛浴、遊戲橘子、亞尼克夢想村、SEGA等品牌合作，多元化的操作與經營，代表圖迷創意的專業與韌性。
				</p>
				<p>圖迷相信無論是甚麼品牌，找到核心的價值就能創造無限的可能。</p>
			</div>
			<div className="about__container__services flex col">
				<h2>服務項目 Service</h2>
				<p>整合行銷 / Integrated Marketing</p>
				<p>社群行銷 / Social Media Marketing</p>
				<p>口碑行銷 / WOMM (Word of Mouth Marketing)</p>
				<p>視覺設計 / Grahic Design</p>
				<p>商業影像 / Commercial Photography</p>
				<p>網頁設計 / Web Design</p>
			</div>
			<div className="about__container__clients flex col">
				<h2>合作品牌 Clients</h2>
				<div className="about__container__clients__list flex">
					<div className="about__container__clients__list__client flex allCenter">京典衛浴</div>
					<div className="about__container__clients__list__client flex allCenter">查理布朗烘焙</div>
					<div className="about__container__clients__list__client flex allCenter">遊戲橘子</div>
					<div className="about__container__clients__list__client flex allCenter">亞尼克夢想村</div>
					<div className="about__container__clients__list__client flex allCenter">aiwibi 愛薇彼</div>
				</div>
			</div>
		</div>
	);
};

About.propTypes = {};

export default About;
