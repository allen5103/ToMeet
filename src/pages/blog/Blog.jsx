import React from 'react';
import PropTypes from 'prop-types';

import CarouselItem from '../../component/carouselItem/CarouselItem';

import { Carousel } from 'antd';

const Blog = props => {
	const items = [
		{
			category: '分類1',
			imgUrl: '',
			textObj: {
				title: '文章標題一',
				content: '內文1的內文內文1的內文內，文1的內文內文1的內文，內文1的內文。',
				aurther: '作者1',
				date: '2023/8/29',
			},
		},
		{
			category: '分類2',
			imgUrl: '',
			textObj: {
				title: '文章標題一',
				content: '內文2的內文內文2的內文內，文2的內文內文2的內文，內文2的內文。',
				aurther: '作者2',
				date: '2023/8/30',
			},
		},
	];
	return (
		<div className="blog__container">
			<Carousel
				style={{ width: '90%', border: '1px solid black', margin: '0 auto' }}
				className="blog__container__carousel"
				afterChange={e => console.log(e)}
			>
				{items.map(item => (
					<CarouselItem className="blog__container__carousel__item" {...item} />
				))}
			</Carousel>
		</div>
	);
};

Blog.propTypes = {};

export default Blog;
