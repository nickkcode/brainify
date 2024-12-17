'use client';

export default function Footer() {
	return (
		<footer className='bg-gradient-to-bl from-[#1c1c1c] via-[#3a3a3a] to-[#1c1c1c] text-gray-300 py-8'>
			<div className='max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col md:flex-row justify-between items-center gap-6'>
					{/* Left Section */}
					<div className='text-center md:text-left'>
						<h3 className='text-2xl text-[#33cccc]'>Brainify</h3>
						<p className='text-sm mt-1'>
							AI-powered learning companion.
						</p>
					</div>

					{/* Right Section */}
					<div className='flex flex-col gap-2'>
						{/* Navigation Links */}
						<div>
							<div className='flex gap-2 text-sm'>
								<a
									href='#about'
									className='hover:text-cyan-500 transition-colors'
								>
									About
								</a>
								<a
									href='#features'
									className='hover:text-cyan-500 transition-colors'
								>
									Features
								</a>
								<a
									href='#contact'
									className='hover:text-cyan-500 transition-colors'
								>
									Contact
								</a>
							</div>
						</div>

						{/* Social Media Links */}
						<div>
							<div className='flex gap-2 text-sm'>
								<a
									href='https://twitter.com/'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:text-cyan-500 transition-colors'
								>
									Twitter
								</a>
								<a
									href='https://linkedin.com/'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:text-cyan-500 transition-colors'
								>
									LinkedIn
								</a>
								<a
									href='https://github.com/'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:text-cyan-500 transition-colors'
								>
									GitHub
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-8 text-center text-sm text-gray-400'>
					&copy; {new Date().getFullYear()} Brainify. All rights
					reserved.
				</div>
			</div>
		</footer>
	);
}
