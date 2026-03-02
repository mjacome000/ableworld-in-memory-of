'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function FadeInSection(props: Props) {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.9 }}
			className='mb-16'
		>
			{props.children}
		</motion.section>
	);
}
