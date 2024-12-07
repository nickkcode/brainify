import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4 fixed top-0 w-full mx-auto">
      <div className="flex justify-between items-center max-w-screen-lg mx-auto">
        {/* Logo */}
        <div className="text-2xl">
          <Link href="/">Brainify</Link>
        </div>

        {/* Navbar Links */}
        <div className="space-x-4">
          <Link href="/" className="hover:text-cyan-700">
            Home
          </Link>
          <Link href="#about" className="hover:text-cyan-700">
            About
          </Link>
          <Link href="#features" className="hover:text-cyan-700">
            Features
          </Link>
          <Link href="#contact" className="hover:text-cyan-700">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
