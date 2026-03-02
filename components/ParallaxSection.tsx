'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxSection({
	imageUrl,
	children,
}: {
	imageUrl: string;
	children: React.ReactNode;
}) {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});

	// This controls intensity
	const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);

	return (
		<section
			ref={ref}
			className='relative min-h-[120vh] flex items-center justify-center overflow-hidden'
		>
			{/* Moving Background */}
			<motion.div
				style={{ y }}
				className='absolute inset-0 will-change-transform'
			>
				<div
					className='w-full h-[140%] bg-cover bg-center'
					style={{ backgroundImage: `url(${imageUrl})` }}
				/>
			</motion.div>

			{/* Overlay */}
			<div className='absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60' />

			{/* Content */}
			<div className='relative z-10 text-white text-center px-6 max-w-2xl'>
				{children}
			</div>
		</section>
	);
}
