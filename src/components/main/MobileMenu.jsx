'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const MobileMenu = ({ menuOpen, toggleMenu }) => {
	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [menuOpen]);

	return (
		menuOpen && (
			<div className='flex justify-center items-center w-full h-screen'>
				<motion.div
					className='fixed h-[90vh] rounded-lg inset-0 bg-black/80 backdrop-blur-xl z-40 flex justify-center items-center text-2xl w-full m-auto'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
				>
					<motion.div
						className='flex flex-col justify-center items-center gap-10'
						initial={{ y: -200 }}
                        animate={{y: 0}}
                        exit={{y: -200}}
					>
						<Link href='#features' onClick={toggleMenu}>
							Features
						</Link>
						<Link href='#contact' onClick={toggleMenu}>
							Contact
						</Link>
						<Link
							href='https://www.github.com/nickkcode/brainify'
							onClick={toggleMenu}
						>
							Github
						</Link>
						<Link
							href='https://www.linkedin.com/in/nickkcode'
							onClick={toggleMenu}
						>
							Linkedin
						</Link>
						<Link
							href='/signup'
							onClick={toggleMenu}
							className='mt-20 text-[#33cccc] text-xl border border-[#33cccc] px-4 py-2 rounded-md active:bg-[#33cccc] active:text-black'
						>
							Get Started
						</Link>
					</motion.div>
				</motion.div>
			</div>
		)
	);
};

export default MobileMenu;
