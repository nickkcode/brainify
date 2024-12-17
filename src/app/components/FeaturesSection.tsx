'use client';
import { MagicCard } from '@/components/ui/magic-card';
import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import ai_dark from '../../../public/icons/ai_dark.gif';
import ai_light from '../../../public/icons/ai_light.gif';
import resources_dark from '../../../public/icons/resources_dark.gif';
import resources_light from '../../../public/icons/resources_light.gif';
import progress_dark from '../../../public/icons/progress_dark.gif';
import progress_light from '../../../public/icons/progress_light.gif';
import projects_dark from '../../../public/icons/projects_dark.gif';
import projects_light from '../../../public/icons/projects_light.gif';

const FeaturesSection = () => {
	const { theme } = useTheme();

	return (
		<div
			className='flex flex-col justify-center items-center gap-10 max-w-screen-lg mx-auto min-h-screen'
			id='features'
		>
			<div className='flex flex-col justify-center items-center text-center gap-5'>
				<h1 className='text-4xl font-bold'>
					Designed to
					<span className='text-[#33cccc]'> Simplify </span>
					Learnings
				</h1>
				<p className='text-gray-500'>
					From essential tools to advanced capabilities—this is what
					we offer.
				</p>
			</div>
			<div className='flex flex-wrap justify-center gap-4'>
				<MagicCard className='p-5 font-semibold flex flex-col justify-center items-center w-full sm:w-[48%] lg:w-[45%]'>
					<Image
						src={theme === 'light' ? ai_dark : ai_light}
						alt='AI Powered'
						className='w-48 z-0'
					/>
					<h2 className='dark:text-[#33cccc] text-black'>AI-Powered Study Plan</h2>
				</MagicCard>
				<MagicCard className='p-5 font-semibold flex flex-col justify-center items-center w-full sm:w-[48%] lg:w-[45%]'>
					<Image
						src={theme === 'light' ? resources_dark : resources_light}
						alt='Resources'
						className='w-48 z-0'
					/>
					<h2 className='dark:text-[#33cccc] text-black'>Curated Learning Resources</h2>
				</MagicCard>
				<MagicCard className='p-5 font-semibold flex flex-col justify-center items-center w-full sm:w-[48%] lg:w-[45%]'>
					<Image
						src={theme === 'light' ? projects_dark : projects_light}
						alt='Projects'
						className='w-48 z-0'
					/>
					<h2 className='dark:text-[#33cccc] text-black'>Assignments with Projects</h2>
				</MagicCard>
				<MagicCard className='p-5 font-semibold flex flex-col justify-center items-center w-full sm:w-[48%] lg:w-[45%]'>
					<Image
						src={theme === 'light' ? progress_dark : progress_light}
						alt='Progress Tracker'
						className='w-48 z-0'
					/>
					<h2 className='dark:text-[#33cccc] text-black'>Dynamic Progress Tracker</h2>
				</MagicCard>
			</div>
		</div>
	);
};

export default FeaturesSection;
