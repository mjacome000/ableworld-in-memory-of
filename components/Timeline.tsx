'use client';
import { motion } from 'framer-motion';

const milestones = [
	{
		year: '1950',
		title: 'Born in New York',
		description: 'Entered the world surrounded by love.',
	},
	{
		year: '1975',
		title: 'Marriage',
		description: 'Married the love of his life.',
	},
	{
		year: '1980',
		title: 'Fatherhood',
		description: 'Welcomed his first child.',
	},
	{
		year: '2024',
		title: 'Legacy Lives On',
		description: 'Forever remembered by family and friends.',
	},
];

export default function Timeline() {
	return (
		<div className='relative max-w-3xl mx-auto'>
			<div className='absolute left-4 top-0 bottom-0 w-px bg-neutral-300' />

			<div className='space-y-16'>
				{milestones.map((item, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.7, delay: index * 0.1 }}
						className='relative pl-12'
					>
						{/* Bullet (now animates properly) */}
						<div className='absolute left-2 top-2 w-4 h-4 bg-neutral-700 rounded-full' />

						<h3 className='text-xl font-semibold'>{item.year}</h3>
						<h4 className='text-lg font-medium text-neutral-700 mt-1'>
							{item.title}
						</h4>
						<p className='text-neutral-600 mt-2'>{item.description}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
}
