'use client';

import FadeInSection from './FadeInSection';

interface Props {
	language: string;
}

const content = {
	en: {
		title: 'In Loving Memory',
		intro:
			'We gather here to honor the life, love, and legacy of someone who meant so much to us.',
		section1Title: 'A Beautiful Life',
		section1Text:
			'He brought warmth, kindness, and laughter to every room he entered.',
		section2Title: 'Cherished Memories',
		section2Text:
			'Though no longer with us, his memory continues to guide and inspire.',
		closing: 'Forever in our hearts.',
	},
	es: {
		title: 'En Amorosa Memoria',
		intro:
			'Nos reunimos aquí para honrar la vida, el amor y el legado de alguien que significó tanto para nosotros.',
		section1Title: 'Una Vida Hermosa',
		section1Text:
			'Traía calidez, bondad y alegría a cada lugar al que entraba.',
		section2Title: 'Recuerdos Apreciados',
		section2Text:
			'Aunque ya no esté con nosotros, su memoria continúa guiándonos e inspirándonos.',
		closing: 'Por siempre en nuestros corazones.',
	},
};

export default function MemorialContent({ language }: Props) {
	const t = content[language as keyof typeof content];

	return (
		<div className='max-w-3xl mx-auto px-6 py-12'>
			<FadeInSection>
				<h1 className='text-4xl md:text-6xl font-light mb-6'>{t.title}</h1>
				<p className='text-lg'>{t.intro}</p>
			</FadeInSection>

			<FadeInSection>
				<h2 className='text-2xl md:text-3xl font-light mb-4'>
					{t.section1Title}
				</h2>
				<p>{t.section1Text}</p>
			</FadeInSection>

			<FadeInSection>
				<h2 className='text-2xl md:text-3xl font-light mb-4'>
					{t.section2Title}
				</h2>
				<p>{t.section2Text}</p>
			</FadeInSection>

			<FadeInSection>
				<p className='text-center text-xl italic'>{t.closing}</p>
			</FadeInSection>
		</div>
	);
}
