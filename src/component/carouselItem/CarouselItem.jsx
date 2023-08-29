import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const CarouselItem = ({ className, category, imgUrl, textObj }) => {
	return (
		<div className={`carouselItem ${className}`} style={{ background: 'pink' }}>
			CarouselItem
		</div>
	);
};

CarouselItem.defaultProps = {
	className: 'carouselItem',
	category: '分類',
	imgUrl: '',
	textObj: {
		title: '文章標題',
		content: '小標內容小標內容小標內容小標內容小標內容，小標內容小標內容小標內容小標內容',
		aurther: '作者',
		date: '日期',
	},
};
CarouselItem.propTypes = {
	className: PropTypes.string,
	category: PropTypes.string,
	imgUrl: PropTypes.string,
	textObj: PropTypes.objectOf({
		title: PropTypes.string,
		content: PropTypes.string,
		aurther: PropTypes.string,
		date: PropTypes.string,
	}),
};

export default CarouselItem;
