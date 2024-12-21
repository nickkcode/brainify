import { cn } from '@/lib/utils';
import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import {
	IconRoute,
	IconTrendingUp,
	IconArrowMerge,
	IconShare3,
} from '@tabler/icons-react';

export default function FeaturesSection() {
	return (
		<div id='features'>
			<div className='flex flex-col justify-center items-center text-center mb-12 mx-8'>
				<h1 className='text-4xl font-bold'>
					Designed to
					<span className='text-[#33cccc]'> Simplify </span>
					Learnings
				</h1>
				<p className='text-white/75 my-1'>
					Brainify transforms your learning experience, making it
					smarter and more efficient.
				</p>
			</div>

			<BentoGrid className='max-w-4xl mx-auto md:auto-rows-[20rem]'>
				{items.map((item, i) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						className={item.className}
						icon={item.icon}
					/>
				))}
			</BentoGrid>
		</div>
	);
}
const Skeleton = () => (
	<div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black'></div>
);
const items = [
	{
		title: 'AI-Generated Personalized Roadmaps',
		description:
			'Generates personalized step-by-step learning or project plans based on user input and knowledge level.',
		header: <Skeleton />,
		className: 'md:col-span-2',
		icon: <IconRoute className='h-4 w-4 text-neutral-500' />,
	},
	{
		title: 'Progress Tracking',
		description:
			'Lets users track progress and stay motivated with real-time updates.',
		header: <Skeleton />,
		className: 'md:col-span-1',
		icon: <IconTrendingUp className='h-4 w-4 text-neutral-500' />,
	},
	{
		title: 'Flexible Expansion',
		description:
			'Users can add new topics or create branches for continuous learning.',
		header: <Skeleton />,
		className: 'md:col-span-1',
		icon: <IconArrowMerge className='h-4 w-4 text-neutral-500' />,
	},
	{
		title: 'Export & Share',
		description:
			'Allows exporting roadmaps, notes, and progress as PDFs or shareable links.',
		header: <Skeleton />,
		className: 'md:col-span-2',
		icon: <IconShare3 className='h-4 w-4 text-neutral-500' />,
	},
];
