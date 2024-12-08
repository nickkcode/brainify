'use client';

import { MagicCard } from "@/components/ui/magic-card";
import { Send } from "lucide-react";

export default function ContactForm() {
	return (
		<section id="contact" className="min-h-screen text-gray-300 py-16">
			<div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
						Get in Touch
					</h2>
					<p className="text-gray-400 mt-2">
						Feel free to reach out for collaborations, inquiries, or just to say hello!
					</p>
				</div>

				<MagicCard className="p-8">
					<form
						action="https://formsubmit.co/your-email@example.com"
						method="POST"
						className="grid grid-cols-1 md:grid-cols-2 gap-8"
					>
						{/* Left Section */}
						<div className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-500"
								>
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									placeholder="i.e Charlie"
									className="w-full mt-2 px-4 py-2 border rounded-lg text-gray-500 placeholder-gray-300 focus:ring-cyan-500 focus:border-cyan-500"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-500"
								>
									Your Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									placeholder="example@gmail.com"
									className="w-full mt-2 px-4 py-2 border rounded-lg text-gray-500 placeholder-gray-300 focus:ring-cyan-500 focus:border-cyan-500"
								/>
							</div>

							<div>
								<button
									type="submit"
									className="px-6 py-3 text-sm font-medium bg-[#33cccc] border-2 border-black text-black rounded-lg hover:scale-95 transition-all w-full flex justify-center items-center gap-2"
								>
									Send Message
                                    <Send className="scale-75"/>
								</button>
							</div>
						</div>

						{/* Right Section */}
						<div className="flex flex-col">
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-500"
							>
								Your Message
							</label>
							<textarea
								id="message"
								name="message"
								required
								placeholder="Type your message..."
								rows={5}
								className="flex-1 mt-2 px-4 py-2 border rounded-lg text-gray-500 placeholder-gray-300 focus:ring-cyan-500 focus:border-cyan-500 resize-none"
							></textarea>
						</div>
					</form>
				</MagicCard>
			</div>
		</section>
	);
}
