import HeroSection from '@/app/components/HeroSection';
import React from 'react';
import Navbar from './components/Navbar';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import ContactForm from './components/ContactSection';
import DemoSection from './components/DemoSection';

// import vid from '../assets/demo.mp4'
import ss_1 from '../../public/ss_1.png';
import Particles from '@/components/ui/particles';

const Home = () => {
	return (
		<div className='relative'>
			<audio id='ambient-music' loop autoPlay>
				<source src='/path-to-your-music-file.mp3' type='audio/mp3' />
				Your browser does not support the audio element.
			</audio>

            <Particles
				className='absolute inset-0 h-full'
				quantity={100}
				ease={10}
				refresh
			/>

			<Navbar />
			<HeroSection />
			<DemoSection
				videoUrl={'https://www.w3schools.com/html/mov_bbb.mp4'}
				ss_1={ss_1}
			/>
			<FeaturesSection />
			<ContactForm />
			<Footer />
		</div>
	);
};

export default Home;
