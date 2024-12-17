import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { MusicToggle } from './MusicToggle';

const Navbar = () => {
	return (
		<nav className='p-4 fixed top-0 w-full bg-gradient-to-b from-white dark:from-black via-white/90 dark:via-black/50 pb-20 to-transparent mx-auto z-30'>
			<div className='flex justify-between items-center max-w-screen-lg mx-auto'>
				<div className='text-2xl'>
					<Link href='/'>Brainify</Link>
				</div>

				<div className='space-x-4 flex items-center'>
					<Link href='/' className='hover:text-cyan-700'>
						Home
					</Link>
					<Link href='#about' className='hover:text-cyan-700'>
						About
					</Link>
					<Link href='#features' className='hover:text-cyan-700'>
						Features
					</Link>
					<div className='flex'>
						<ModeToggle />
						<MusicToggle />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
