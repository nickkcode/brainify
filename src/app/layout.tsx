import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
	title: 'Brainify',
	description: 'AI-Powered Study Helper',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<Navbar />
			<body className={'antialiased'}>{children}</body>
		</html>
	);
}
