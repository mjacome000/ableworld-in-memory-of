'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LanguageSelector from '@/components/LanguageSelector';
import MemorialContent from '@/components/MemorialContent';

export default function Home() {
	const [language, setLanguage] = useState<string | null>(null);

	return (
		<main className='min-h-screen overflow-hidden bg-neutral-50 relative'>
			<AnimatePresence mode='wait'>
				{!language ? (
					<motion.div
						key='language'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<LanguageSelector onSelect={setLanguage} />
					</motion.div>
				) : (
					<motion.div
						key='content'
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<MemorialContent language={language} />
					</motion.div>
				)}
			</AnimatePresence>
		</main>
	);
}
