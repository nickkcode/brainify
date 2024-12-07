import React from 'react';
import { MdLibraryBooks } from 'react-icons/md';

const HeroSection = () => {
	return (
		<div className='flex flex-col justify-center items-center min-h-screen'>
			<div className='flex flex-col justify-center items-center max-w-[60vw] text-center gap-10'>
				<h1 className='text-6xl font-bold'>
					Transform how you learn with an
					<span className='text-cyan-700'> AI-powered </span>assistant
				</h1>
				<p className='text-gray-500 w-1/2'>
					Supercharge your learning with AI-generated study plans,
					quizzes, and a personalized roadmap to success.
				</p>
				<button className='px-4 py-3 text-sm hover:-translate-y-1 bg-cyan-700 text-white font- rounded-xl flex items-center justify-center gap-1'>
					<MdLibraryBooks className='translate-y-[1px]' />
					Get your study plan
				</button>
			</div>
		</div>
	);
};

export default HeroSection;
