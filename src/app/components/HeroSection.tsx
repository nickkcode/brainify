'use client';
import React from 'react';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { ChevronRight } from 'lucide-react';

import PulsatingButton from '@/components/ui/pulsating-button';

const HeroSection = () => {
	const { resolvedTheme } = useTheme();
	const [color, setColor] = useState('#ffffff');

	useEffect(() => {
		setColor(resolvedTheme === 'dark' ? '#ffffff' : '#000000');
	}, [resolvedTheme]);

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
				<PulsatingButton>
					<div className='flex items-center pl-2'>
						Get your study plan
						<ChevronRight className='scale-75' />
					</div>
				</PulsatingButton>
			</div>
		</div>
	);
};

export default HeroSection;
