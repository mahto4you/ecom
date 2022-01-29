import React from 'react';
import search12 from '../../assets/images/search12.jpg';

const ProductCard = ({ item }) => {
	return (
		<>
			<div className='search_proo'>
				<div className='srch_pic_box'>
					<img src={search12} alt='' />
					<span>
						<a href='#'>Call For Enquiry</a>
					</span>
				</div>
				<div className='srch_dtls_box'>
					<a href='#'>{item.title}</a>
					<p>{item.price}</p>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
