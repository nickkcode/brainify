'use client';
import React from 'react';

import { ChevronRight } from 'lucide-react';

import PulsatingButton from '@/components/ui/pulsating-button';
import Link from 'next/link';
import DotPattern from '../ui/dot-pattern';
import { cn } from '@/lib/utils';

const handleClick = () => {};

const HeroSection = () => {
	return (
		<div>
			<div className='flex bg-black flex-col justify-center items-center min-h-screen relative w-full'>
				<div className='flex px-10 z-20 flex-col justify-center items-center max-w-screen-lg text-center gap-10 mx-4 md:mx-0'>
					<h1 className='md:text-6xl text-4xl font-bold md:mx-10'>
						Boost your learnings with
						<span className='text-[#33cccc] drop-shadow-lg'>
							{' '}
							AI-powered{' '}
						</span>
						Roadmaps
					</h1>
					<p className='text-white/75 md:w-1/2'>
						Create a personalized, AI-generated roadmap designed for
						your unique learning journey.
					</p>
					<Link
						onClick={handleClick}
						href={'/signup'}
						className='group p-2'
					>
						<PulsatingButton>
							<div className='flex items-center pl-2'>
								<p>Get your study plan</p>
								<ChevronRight className='scale-75' />
							</div>
						</PulsatingButton>
					</Link>
				</div>
				<DotPattern
					className={cn(
						'[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]'
					)}
				/>
			</div>
		</div>
	);
};

export default HeroSection;
