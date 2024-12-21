'use client';

export default function Footer() {
	return (
		<footer className='py-8'>
			<div className='max-w-screen-lg mx-auto flex md:flex-row-reverse justify-between flex-col items-center'>
				{/* Links Section */}
				<div className='flex flex-wrap justify-center gap-4 text-sm md:mb-0 mb-4'>
					<a
						href='#features'
						className='hover:text-[#33cccc] transition-all'
					>
						Features
					</a>
					<a
						href='https://github.com/nickkcode/brainify'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-[#33cccc] transition-all'
					>
						GitHub
					</a>
					<a
						href='https://linkedin.com/in/nickkcode'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-[#33cccc] transition-all'
					>
						Linkedin
					</a>
				</div>

				{/* Copyright Section */}
				<div className='mt-4 md:mt-0 text-center text-sm text-gray-400'>
					&copy; {new Date().getFullYear()} Brainify. All rights
					reserved.
				</div>
			</div>
		</footer>
	);
}
