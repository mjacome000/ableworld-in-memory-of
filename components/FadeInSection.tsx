'use client';

import { motion, ViewportOptions } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	viewport?: ViewportOptions;
}

export default function FadeInSection(props: Props) {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={props.viewport ?? { once: true, amount: 0.2 }}
			transition={{ duration: 0.9 }}
			className='mb-12'
		>
			{props.children}
		</motion.section>
	);
}
