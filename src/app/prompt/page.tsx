'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Page: React.FC = () => {
	const [inputValue, setInputValue] = useState('');
	const [placeholderIndex, setPlaceholderIndex] = useState(0);
	const placeholders = [
		'JavaScript in 30 days',
		'Next.js coming from React',
		'Frontend Developer',
		'Python for Data Science',
		'Public Speaking',
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setPlaceholderIndex(
				(prevIndex) => (prevIndex + 1) % placeholders.length
			);
		}, 3000); // Change every 3 seconds

		return () => clearInterval(interval);
	}, [placeholders.length]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const onSubmit = () => {
		console.log('Submitted value:', inputValue);
		setInputValue('');
	};

	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='max-w-screen-lg flex bg-black/50 rounded-lg backdrop-blur-xl shadow-2xl z-10 flex-col text-center gap-5 py-12 md:mx-0 mx-10 items-center'>
				<p className='text-white/75 font-light mx-20'>
					Just type in a topic, skill, or concept you’re curious
					about, and let Brainify guide you.
				</p>

				<div className='relative md:w-1/2 w-[90%] my-8'>
					<input
						type='text'
						value={inputValue}
						onChange={onChange}
						onFocus={() => setInputValue('')}
						placeholder=''
						aria-label='Enter your topic, skill, or concept'
						className='w-full h-12 px-5 rounded-lg text-lg focus:outline-none focus:bg-[#28272a]'
					/>

					<AnimatePresence>
						{!inputValue && (
							<motion.span
								key={placeholders[placeholderIndex]}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.5 }}
								className='absolute left-6 top-3 text-white/40 select-none pointer-events-none'
								aria-live='polite' // Inform screen readers about the placeholder change
							>
								{placeholders[placeholderIndex]}
							</motion.span>
						)}
					</AnimatePresence>

					<Link href='/home'>
						<button
							onClick={onSubmit}
							aria-label='Submit your topic'
							className={`absolute p-1 rounded-lg transition-all top-2 ${
								inputValue
									? 'hover:text-[#33cccc] text-white right-2'
									: 'text-white/25 right-4'
							}`}
							disabled={!inputValue}
						>
							<ChevronRight />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Page;
