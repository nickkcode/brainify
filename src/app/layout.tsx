import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/theme-provider';

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
		<html lang='en' suppressHydrationWarning>
			<ThemeProvider
				attribute='class'
				defaultTheme='system'
				enableSystem
				disableTransitionOnChange
			>
				<body className={'antialiased'}>{children}</body>
			</ThemeProvider>
		</html>
	);
}
