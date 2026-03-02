import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Timeline from '@/components/Timeline';
import ParallaxSection from '@/components/ParallaxSection';
import BackgroundMusic from '@/components/BackgroundMusic';
import ImageCarousel from '@/components/ImageCarousel';

export default function Home() {
	return (
		<main className='relative bg-neutral-50 text-neutral-800 overflow-x-hidden'>
			<BackgroundMusic />

			{/* HERO */}
			<section className='min-h-screen flex items-center justify-center text-center px-6 bg-linear-to-b from-neutral-100 to-white'>
				<FadeIn>
					<div>
						<h1 className='text-4xl md:text-6xl font-light tracking-wide'>
							In Loving Memory of
						</h1>
						<h2 className='mt-4 text-3xl md:text-5xl font-semibold'>
							John Doe
						</h2>
						<p className='mt-6 text-lg text-neutral-600'>1950 – 2024</p>
					</div>
				</FadeIn>
			</section>

			{/* PARALLAX */}
			<ParallaxSection imageUrl='/images/sunset.png'>
				<h2 className='text-3xl md:text-4xl font-semibold'>
					Forever in Our Hearts
				</h2>
				<p className='mt-4'>
					A life of kindness, strength, and unwavering love.
				</p>
			</ParallaxSection>

			{/* TIMELINE */}
			<Section>
				<FadeIn>
					<h2 className='text-3xl font-semibold mb-12 text-center'>
						A Journey Through Time
					</h2>
					<Timeline />
				</FadeIn>
			</Section>

			{/* IMAGE CAROUSEL */}
			<Section className='bg-white'>
				<FadeIn>
					<h2 className='text-3xl font-semibold mb-8 text-center'>
						Cherished Memories
					</h2>

					<ImageCarousel
						images={[
							'/images/photo1.jpg',
							'/images/photo2.jpg',
							'/images/photo3.jpg',
						]}
					/>
				</FadeIn>
			</Section>

			{/* FOOTER */}
			<footer className='py-12 text-center text-sm text-neutral-500'>
				© 2026 In Loving Memory
			</footer>
		</main>
	);
}
