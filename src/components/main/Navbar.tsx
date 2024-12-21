// components/Navbar.js
'use client';
import { LucideMenu, LucideX } from 'lucide-react'; // Import menu and close icons
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import MobileMenu from './MobileMenu'; // Import MobileMenu component

const Navbar = () => {
	const [show, setShow] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false); // Manage menu visibility
	let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

	const handleScroll = () => {
		if (typeof window !== 'undefined') {
			if (window.scrollY > lastScrollY) {
				// Scroll down
				setShow(false);
			} else {
				// Scroll up
				setShow(true);
			}
			lastScrollY = window.scrollY;
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	// Toggle the menu open/close
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<motion.nav
			className='p-5 fixed top-0 left-0 w-full bg-transparent backdrop-blur-lg border-b-2 border-gray-700 z-30 shadow-lg px-10 md:px-0'
			initial={{ y: -100 }}
			animate={{ y: show ? 0 : -100 }}
			transition={{ type: 'spring', stiffness: 300, damping: 30 }}
		>
			<div className='flex justify-between items-center max-w-screen-lg mx-auto'>
				{/* Logo Text with animation */}
				<AnimatePresence>
					{menuOpen ? (
						<motion.span
							className='text-transparent'
							initial={{ opacity: 1, y: 0 }}
							animate={{ opacity: 0, y: 20 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.3 }}
						>
							Brainify
						</motion.span>
					) : (
						<motion.span
							className='text-2xl text-white'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.3 }}
						>
							Brainify
						</motion.span>
					)}
				</AnimatePresence>

				{/* Desktop Links */}
				<div className='space-x-4 md:flex hidden items-center'>
					<Link href='#features' className='hover:text-[#33cccc]'>
						Features
					</Link>
					<Link href='#contact' className='hover:text-[#33cccc]'>
						Contact
					</Link>
					<Link
						href='https://www.github.com/nickkcode/brainify'
						className='hover:text-[#33cccc]'
						target='_blank'
					>
						Github
					</Link>
					<Link href='/signup'>
						<div className='border-[#33cccc] border-2 text-[#33cccc] hover:bg-[#33cccc] hover:text-black transition-all rounded-md py-1 px-2 text-sm'>
							Join now
						</div>
					</Link>
				</div>

				{/* Mobile Menu Icon */}
				<div className='md:hidden'>
					<motion.div
						initial={{ rotate: 0, scale: 1 }}
						animate={{ rotate: menuOpen ? 90 : 0, scale: 1.2 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
					>
						{menuOpen ? (
							<LucideX
								className='scale-125 cursor-pointer'
								onClick={toggleMenu}
							/>
						) : (
							<LucideMenu
								className='scale-125 cursor-pointer'
								onClick={toggleMenu}
							/>
						)}
					</motion.div>
				</div>
			</div>

			{/* Mobile Menu Popup */}
			<MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
		</motion.nav>
	);
};

export default Navbar;
