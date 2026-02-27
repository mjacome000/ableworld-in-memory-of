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
		<div className='relative border-l border-neutral-300 ml-4 md:ml-0 md:mx-auto md:max-w-3xl'>
			{milestones.map((item, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: index * 0.1 }}
					className='mb-12 ml-6'
				>
					<div className='absolute -left-2 w-4 h-4 bg-neutral-700 rounded-full' />
					<h3 className='text-xl font-semibold'>{item.year}</h3>
					<h4 className='text-lg font-medium text-neutral-700'>{item.title}</h4>
					<p className='text-neutral-600 mt-2'>{item.description}</p>
				</motion.div>
			))}
		</div>
	);
}
