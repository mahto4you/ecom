import React from 'react';
import AboutSection from '../components/reusableComponents/AboutSection';
import Footer from '../components/reusableComponents/Footer';
import Header from '../components/reusableComponents/Header';
import LatestProduct from '../components/reusableComponents/LatestProduct';
import OurProduct from '../components/reusableComponents/OurProduct';
import Section from '../components/reusableComponents/Section';
import Slider from '../components/reusableComponents/Slider';
const Home = () => {
	return (
		<>
			<div className='wrapper'>
				<Header />
				<Section />
				<AboutSection />
				<Slider />
				<OurProduct />
				<LatestProduct />
				<Footer />
			</div>
		</>
	);
};

export default Home;
