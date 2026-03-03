'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import ExportedImage from 'next-image-export-optimizer';

interface Props {
	images: { src: string; alt: string }[];
}

export default function PhotoCarousel(props: Props) {
	const autoplay = useRef(Autoplay({ delay: 5000 }));
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		autoplay.current,
	]);

	function scrollPrev() {
		if (!emblaApi) return;
		autoplay.current.stop();
		emblaApi.scrollPrev();
	}

	function scrollNext() {
		if (!emblaApi) return;
		autoplay.current.stop();
		emblaApi.scrollNext();
	}

	return (
		<div className='flex items-center justify-between gap-6'>
			<button
				onClick={scrollPrev}
				className='hidden md:flex h-12 w-12 items-center justify-center rounded-full shadow-md ring-1 ring-neutral-300 hover:bg-neutral-100 '
				aria-label='Previous slide'
			>
				<svg
					className='h-5 w-5'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='1.5'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M15.75 19.5L8.25 12l7.5-7.5'
					/>
				</svg>
			</button>
			<div className='flex-1'>
				<div
					className='overflow-hidden rounded-2xl bg-neutral-100 shadow-sm ring-1 ring-neutral-200'
					ref={emblaRef}
				>
					<div className='flex touch-pan-y touch-pinch-zoom'>
						{props.images.map((image, index) => (
							<div key={index} className='flex-[0_0_100%] min-w-0 '>
								<div className='relative h-87.5 md:h-112.5 w-full'>
									<ExportedImage
										src={image.src}
										alt={image.alt}
										fill
										className='object-contain object-center'
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<button
				onClick={scrollNext}
				className='hidden md:flex h-12 w-12 items-center justify-center rounded-full shadow-md ring-1 ring-neutral-300 hover:bg-neutral-100'
				aria-label='Next slide'
			>
				<svg
					className='h-5 w-5'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='1.5'
					aria-hidden='true'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M8.25 4.5L15.75 12l-7.5 7.5'
					/>
				</svg>
			</button>
		</div>
	);
}
