'use client';
import React from 'react';

import { ChevronRight } from 'lucide-react';

import PulsatingButton from '@/components/ui/pulsating-button';
import Particles from '@/components/ui/particles';
import Link from 'next/link';

const handleClick = () => {
	const audio = new Audio('/switch_sound.mp3');
	audio.play();
};

const HeroSection = () => {
	return (
		<div className='flex flex-col justify-center items-center min-h-screen'>
			<div className='flex px-10 z-20 flex-col justify-center items-center max-w-screen-lg text-center gap-10'>
				<h1 className='text-6xl font-bold'>
					Transform how you learn with an
					<span
						className='text-[#33cccc] drop-shadow-lg'
						style={{
							WebkitTextStroke: '0.7px black',
						}}
					>
						{' '}
						AI-powered{' '}
					</span>
					assistant
				</h1>
				<p className='text-gray-500 w-1/2'>
					Supercharge your learning with AI-generated study plans,
					quizzes, and a personalized roadmap to success.
				</p>
				<Link onClick={handleClick} href={'/signup'}>
					<PulsatingButton>
						<div className='flex items-center'>
							<p>Get your study plan</p>
							<ChevronRight className='scale-75' />
						</div>
					</PulsatingButton>
				</Link>
			</div>

			<Particles
				className='absolute inset-0'
				quantity={500}
				ease={100}
				color={'#33cccc'}
				refresh
				staticity={100}
			/>
		</div>
	);
};

export default HeroSection;
