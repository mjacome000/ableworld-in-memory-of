'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

export default function ImageCarousel({ images }: { images: string[] }) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className='relative'>
			<div className='overflow-hidden rounded-2xl' ref={emblaRef}>
				<div className='flex'>
					{images.map((src, index) => (
						<div className='flex-[0_0_100%]' key={index}>
							<img src={src} alt='' className='w-full h-[400px] object-cover' />
						</div>
					))}
				</div>
			</div>

			<button
				onClick={scrollPrev}
				className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur px-3 py-2 rounded-full'
			>
				‹
			</button>
			<button
				onClick={scrollNext}
				className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur px-3 py-2 rounded-full'
			>
				›
			</button>
		</div>
	);
}
