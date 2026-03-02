'use client';
import { motion } from 'framer-motion';

interface Props {
	onSelect: (lang: string) => void;
}

export default function LanguageSelector(props: Props) {
	return (
		<div className='flex flex-col items-center justify-center h-screen p-6 gap-12'>
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 0.8 }}
				className='text-3xl md:text-5xl text-center font-light'
			>
				Please select your language
			</motion.h1>

			<div className='flex gap-6'>
				<button
					className='px-8 py-3 border border-neutral-300 rounded-full hover:bg-neutral-100'
					onClick={() => props.onSelect('en')}
				>
					English
				</button>

				<button
					className='px-8 py-3 border border-neutral-300 rounded-full hover:bg-neutral-100'
					onClick={() => props.onSelect('es')}
				>
					Español
				</button>
			</div>
		</div>
	);
}
