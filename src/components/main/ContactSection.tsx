'use client';

import React, { useState } from 'react';

const ContactSection: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [role, setRole] = useState(''); // Optional Role
	const [subject, setSubject] = useState(''); // New field for Subject of Inquiry (optional)
	const [error, setError] = useState<string>('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!name || !email || !message) {
			setError('Name, Email, and Message are required.');
			return;
		}

		// Email validation (simple version)
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setError('Please enter a valid email address.');
			return;
		}

		console.log('Contact Form Submitted:', { name, email, message, role, subject });
		setName('');
		setEmail('');
		setMessage('');
		setRole('');
		setSubject('');
		setError('');
	};

	return (
		<div className='min-h-screen flex items-center justify-center px-4 md:px-8' id='contact'>
			<div className='max-w-screen-md w-full flex rounded-lg shadow-lg flex-col text-center py-12 items-center'>
				<h1 className='text-4xl font-bold px-8'>
					Let’s <span className='text-[#33cccc]'>Connect</span> and{' '}
					<span className='text-[#33cccc]'> Collaborate </span>
				</h1>
				<p className='text-white/75'>
					Whether it’s a question, a project, or just a hello, I’d love to hear from you!
				</p>

				{/* Error Message */}
				{error && <p className='text-red-500 mt-4'>{error}</p>}

				<form onSubmit={handleSubmit} className='w-full mt-8 mb-4 px-4'>
					{/* Name and Role Input (side by side) */}
					<div className='flex gap-4 mb-4'>
						<div className='relative w-full'>
							<input
								type='text'
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder='Your Name'
								className='w-full h-12 px-5 border rounded-lg text-sm outline-none focus:bg-[#28272a]'
								aria-label='Your Name'
							/>
						</div>

						<div className='relative w-full'>
							<input
								type='text'
								value={role}
								onChange={(e) => setRole(e.target.value)}
								placeholder='Your Role (Optional)'
								className='w-full h-12 px-5 border rounded-lg text-sm outline-none focus:bg-[#28272a]'
								aria-label='Your Role'
							/>
						</div>
					</div>

					{/* Email and Subject of Inquiry Input (side by side) */}
					<div className='flex md:flex-row flex-col gap-4 mb-4'>
						<div className='relative w-full'>
							<input
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder='Your Email'
								className='w-full h-12 px-5 border rounded-lg text-sm outline-none focus:bg-[#28272a]'
								aria-label='Your Email'
							/>
						</div>

						<div className='relative w-full'>
							<input
								type='text'
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								placeholder='Subject of Inquiry (Optional)'
								className='w-full h-12 px-5 border rounded-lg text-sm outline-none focus:bg-[#28272a]'
								aria-label='Subject of Inquiry'
							/>
						</div>
					</div>

					{/* Message Input */}
					<div className='relative mb-6'>
						<textarea
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder='Your Message'
							rows={8}
							className='w-full px-5 py-3 border rounded-lg text-sm outline-none focus:bg-[#28272a] resize-none'
							aria-label='Your Message'
						></textarea>
					</div>

					{/* Submit Button */}
					<button
						type='submit'
						className='text-white/50 border-2 hover:border-[#33cccc] hover:text-[#33cccc] hover:bg-black bg-[#28272a] transition-all px-6 py-2 rounded-lg active:scale-95 text-sm'
						aria-label='Send Message'
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactSection;
