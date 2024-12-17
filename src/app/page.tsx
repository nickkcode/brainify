import HeroSection from '@/app/components/HeroSection';
import React from 'react';
import Navbar from './components/Navbar';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import ContactForm from './components/ContactSection';
import DemoSection from './components/DemoSection';

// import vid from '../assets/demo.mp4'
import ss_1 from '../../public/ss_1.png';

const Home = () => {
	return (
		<div className='relative'>


			<Navbar />
			<HeroSection />
			<DemoSection
				videoUrl={'./videos/demo.mp4'}
				ss_1={ss_1}
			/>
			<FeaturesSection />
			<ContactForm />
			<Footer />
		</div>
	);
};

export default Home;
