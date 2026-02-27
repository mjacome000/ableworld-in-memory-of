import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<section
				id='home'
				className='min-h-screen flex items-center justify-center text-center px-6'
			>
				<div data-aos='fade-up'>
					<h2 className='text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
						Welcome to My Modern Blog
					</h2>
					<p className='text-gray-300 max-w-2xl mx-auto text-lg'>
						Sharing ideas, creativity, and inspiration in a clean and modern
						layout.
					</p>
				</div>
			</section>

			<section id='posts' className='py-24 px-6 max-w-7xl mx-auto'>
				<h3 className='text-3xl font-bold mb-12 text-center' data-aos='fade-up'>
					Latest Posts
				</h3>

				<div className='grid md:grid-cols-3 gap-8'>
					<div
						className='bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10 hover:scale-105 transition duration-500'
						data-aos='fade-up'
					>
						<img
							src='https://source.unsplash.com/400x300?nature'
							className='rounded-xl mb-4'
						/>
						<h4 className='text-xl font-semibold mb-2'>Exploring Nature</h4>
						<p className='text-gray-400 text-sm'>
							Discover the beauty of untouched landscapes.
						</p>
					</div>

					<div
						className='bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10 hover:scale-105 transition duration-500'
						data-aos='fade-up'
						data-aos-delay='150'
					>
						<img
							src='https://source.unsplash.com/400x300?technology'
							className='rounded-xl mb-4'
						/>
						<h4 className='text-xl font-semibold mb-2'>Future of Tech</h4>
						<p className='text-gray-400 text-sm'>
							Insights into modern web development trends.
						</p>
					</div>

					<div
						className='bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10 hover:scale-105 transition duration-500'
						data-aos='fade-up'
						data-aos-delay='300'
					>
						<img
							src='https://source.unsplash.com/400x300?design'
							className='rounded-xl mb-4'
						/>
						<h4 className='text-xl font-semibold mb-2'>Creative Design</h4>
						<p className='text-gray-400 text-sm'>
							Minimalism meets bold modern aesthetics.
						</p>
					</div>
				</div>
			</section>

			<section id='gallery' className='py-24 bg-black/40'>
				<h3 className='text-3xl font-bold text-center mb-12' data-aos='fade-up'>
					Image Gallery
				</h3>

				<div className='relative max-w-4xl mx-auto overflow-hidden rounded-2xl'>
					<div id='carousel' className='flex transition-transform duration-700'>
						<img
							src='https://source.unsplash.com/1200x600?city'
							className='w-full flex-shrink-0'
						/>
						<img
							src='https://source.unsplash.com/1200x600?mountain'
							className='w-full flex-shrink-0'
						/>
						<img
							src='https://source.unsplash.com/1200x600?ocean'
							className='w-full flex-shrink-0'
						/>
					</div>

					<button className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 px-4 py-2 rounded-full'>
						‹
					</button>

					<button className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 px-4 py-2 rounded-full'>
						›
					</button>
				</div>
			</section>

			<section id='videos' className='py-24 px-6 max-w-5xl mx-auto'>
				<h3 className='text-3xl font-bold text-center mb-12' data-aos='fade-up'>
					Featured Video
				</h3>

				<div className='aspect-w-16 aspect-h-9' data-aos='zoom-in'>
					<iframe
						className='w-full h-[400px] rounded-2xl'
						src='https://www.youtube.com/embed/dQw4w9WgXcQ'
						frameborder='0'
						allowfullscreen
					></iframe>
				</div>
			</section>

			<footer className='py-8 text-center text-gray-500 border-t border-white/10'>
				© 2026 My Modern Blog. All rights reserved.
			</footer>
		</div>
	);
}
