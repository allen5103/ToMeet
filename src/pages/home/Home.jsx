import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Home = props => {
	return (
		<div className="home__container">
			<div className="home__container__mainVisual">
				<span>全幅視覺</span>
				<span>slogan + 小動畫</span>
			</div>
			<div className="title">服務介紹</div>
			<div className="home__container__services flex xCenter wrap">
				{['整合行銷', '社群行銷', '口碑行銷', '視覺設計', '商業影像', '網頁設計'].map(item => (
					<div key={item} className="home__container__services__service flex allCenter">
						{item}
					</div>
				))}
			</div>
			<div className="title">聯絡我們</div>
			<div className="subTitle">描述遠端設計的好處，並建立諮詢表單</div>
			<div className="home__container__contact flex allCenter">
				<div className="home__container__contact__list flex allCenter">表單</div>
				<div className="home__container__contact__other flex allCenter">
					<div style={{ marginRight: '20px' }}>其他快速諮詢</div>
					<div className="btn">Facebook</div>
					<div className="btn">LINE</div>
				</div>
			</div>
		</div>
	);
};

Home.propTypes = {};

export default Home;
