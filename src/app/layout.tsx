import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/app/context/authContext';
import { ThemeProvider } from '@/components/main/theme-provider';

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
			<AuthProvider>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<body className={'antialiased'}>{children}</body>
				</ThemeProvider>
			</AuthProvider>
		</html>
	);
}
