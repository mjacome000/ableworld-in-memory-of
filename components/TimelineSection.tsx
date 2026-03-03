'use client';

import { motion } from 'framer-motion';

interface TimelineItem {
	year: string;
	description: string;
}

interface Props {
	items: TimelineItem[];
}

export default function TimelineSection(props: Props) {
	return (
		<section className='relative py-20'>
			<div className='absolute left-4 md:left-1/2 top-0 h-full w-px bg-neutral-200 md:-translate-x-1/2' />

			<div className='space-y-16'>
				{props.items.map((item, index) => {
					const isLeft = index % 2 === 0;

					return (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
							className={`relative flex flex-row items-center ${
								isLeft ? 'md:justify-start' : 'md:justify-end'
							}`}
						>
							<div className='absolute left-4 md:left-1/2 w-3 h-3 bg-black rounded-full -translate-x-1/2' />

							<div
								className={`ml-12 md:ml-0 md:w-1/2 ${
									isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'
								}`}
							>
								<div className='bg-white rounded-xl shadow-sm ring-1 ring-neutral-200 p-6'>
									<p className='text-sm text-neutral-500 mb-2 tracking-wide'>{item.year}</p>
									<p>{item.description}</p>
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}
