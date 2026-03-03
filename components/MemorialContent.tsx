'use client';

import FadeInSection from '@/components/FadeInSection';
import PhotoCarousel from '@/components/PhotoCarousel';
import TimelineSection from '@/components/TimelineSection';
import { time } from 'console';

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
		timelineTitle: 'A Life in Moments',
		timeline: [
			{
				year: '1950',
				description: 'Born in a small village in Guangdong Province, China.',
			},
			{
				year: '1966',
				description:
					'Begins working alongside his father to help support the family during difficult economic times.',
			},
			{
				year: '1972',
				description:
					'Completes vocational training in mechanical repair and begins apprenticing in a local workshop.',
			},
			{
				year: '1978',
				description:
					'Marries Bing Chan; together they begin dreaming of opportunities abroad.',
			},
			{
				year: '1981',
				description:
					'Immigrates to the United States with limited savings and little English, determined to build a better future.',
			},
			{
				year: '1982',
				description:
					'Takes his first job in America working long hours in a restaurant kitchen while studying English at night.',
			},
			{
				year: '1985',
				description:
					'Saves enough money to bring his spouse to the United States.',
			},
			{
				year: '1987',
				description:
					'Welcomes his first child, strengthening his resolve to succeed.',
			},
			{
				year: '1990',
				description:
					'Launches his first small business, a neighborhood repair shop, operating seven days a week.',
			},
			{
				year: '1995',
				description:
					'Expands the business, earning a loyal customer base built on honesty and hard work.',
			},
			{
				year: '1998',
				description:
					"Purchases the family's first home — a milestone he considered one of his proudest achievements.",
			},
			{
				year: '2003',
				description:
					'Pays off major business debts, securing financial stability for his family.',
			},
			{
				year: '2008',
				description:
					'Celebrates the graduation of his eldest child from college — a moment he described as "the American Dream fulfilled."',
			},
			{
				year: '2012',
				description:
					'Business reaches its 22nd anniversary; recognized locally for service and community dedication.',
			},
			{
				year: '2015',
				description:
					'Welcomes his first grandchild; begins spending more time mentoring and sharing stories of perseverance.',
			},
			{
				year: '2018',
				description:
					'Gradually transitions business leadership to the next generation while remaining a trusted advisor.',
			},
			{
				year: '2020',
				description:
					'Marks 30 years in business and reflects on four decades in America.',
			},
			{
				year: '2023',
				description:
					'Celebrates 45 years of marriage surrounded by children and grandchildren.',
			},
			{
				year: '2026',
				description:
					'Remembered as a devoted patriarch whose courage transformed sacrifice into opportunity, leaving behind a thriving family and a legacy of resilience.',
			},
		],
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
		timelineTitle: 'Una Vida en Momentos',
		timeline: [
			{
				year: '1950',
				description:
					'Nacido en un pequeño pueblo de la provincia de Guangdong, China.',
			},
			{
				year: '1966',
				description:
					'Comienza a trabajar junto a su padre para ayudar a mantener a la familia durante tiempos económicos difíciles.',
			},
			{
				year: '1972',
				description:
					'Completa la formación profesional en reparación mecánica y comienza el aprendizaje en un taller local.',
			},
			{
				year: '1978',
				description:
					'Se casa con Bing Chan; juntos comienzan a soñar con oportunidades en el extranjero.',
			},
			{
				year: '1981',
				description:
					'Emigra a los Estados Unidos con ahorros limitados y poco inglés, decidido a construir un futuro mejor.',
			},
			{
				year: '1982',
				description:
					'Toma su primer trabajo en Estados Unidos, trabajando largas horas en la cocina de un restaurante mientras estudia inglés por la noche.',
			},
			{
				year: '1985',
				description:
					'Ahorrar suficiente dinero para traer a su cónyuge a los Estados Unidos.',
			},
			{
				year: '1987',
				description:
					'Da la bienvenida a su primer hijo, fortaleciendo su determinación de tener éxito.',
			},
			{
				year: '1990',
				description:
					'Lanza su primer pequeño negocio, un taller de reparación en el vecindario, operando los siete días de la semana.',
			},
			{
				year: '1995',
				description:
					'Expande el negocio, ganando una base de clientes leales basada en la honestidad y el trabajo duro.',
			},
			{
				year: '1998',
				description:
					'Compra la primera casa de la familia, un hito que consideró uno de sus logros más orgullosos.',
			},
			{
				year: '2003',
				description:
					'Paga las principales deudas del negocio, asegurando la estabilidad financiera para su familia.',
			},
			{
				year: '2008',
				description:
					'Celebra la graduación de su hijo mayor de la universidad — un momento que describió como "el sueño americano cumplido."',
			},
			{
				year: '2012',
				description:
					'El negocio alcanza su 22º aniversario; reconocido localmente por su servicio y dedicación a la comunidad.',
			},
			{
				year: '2015',
				description:
					'Da la bienvenida a su primer nieto; comienza a pasar más tiempo orientando y compartiendo historias de perseverancia.',
			},
			{
				year: '2018',
				description:
					'Transfiere gradualmente el liderazgo del negocio a la siguiente generación mientras sigue siendo un asesor de confianza.',
			},
			{
				year: '2020',
				description:
					'Marca 30 años en el negocio y reflexiona sobre cuatro décadas en Estados Unidos.',
			},
			{
				year: '2023',
				description: 'Celebra 45 años de matrimonio rodeado de hijos y nietos.',
			},
			{
				year: '2026',
				description:
					'Recordado como un patriarca devoto cuyo coraje transformó el sacrificio en oportunidad, dejando atrás una familia próspera y un legado de resiliencia.',
			},
		],
		closing: 'Por siempre en nuestros corazones.',
	},
};

const images = [
	{ src: '/images/photo1.png', alt: 'Alt text' },
	{ src: '/images/photo2.png', alt: 'Alt text' },
	{ src: '/images/photo3.png', alt: 'Alt text' },
];

export default function MemorialContent(props: Props) {
	const t = content[props.language as keyof typeof content];

	return (
		<div className='max-w-4xl mx-auto px-6 py-12'>
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
				<PhotoCarousel images={images} />
			</FadeInSection>

			<FadeInSection viewport={{ once: true, margin: '-100px 0px 0px 0px' }}>
				<h2 className='text-2xl md:text-3xl font-light mb-12 text-center'>
					{t.timelineTitle}
				</h2>
				<TimelineSection items={t.timeline} />
			</FadeInSection>

			<FadeInSection>
				<p className='text-center text-3xl italic'>{t.closing}</p>
			</FadeInSection>
		</div>
	);
}
