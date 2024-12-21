import HeroSection from '@/components/main/HeroSection';
import React from 'react';
import FeaturesSection from '../components/main/FeaturesSection';
import Footer from '../components/main/Footer';
import ContactForm from '../components/main/ContactSection';
import Navbar from '@/components/main/Navbar';

const Home = () => {
	return (
		<div className='relative bg-black'>
			<Navbar />
			<HeroSection />
			<FeaturesSection />
			<ContactForm />
			<Footer />
		</div>
	);
};

export default Home;
