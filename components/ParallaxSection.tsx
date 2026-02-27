export default function ParallaxSection({
	imageUrl,
	children,
}: {
	imageUrl: string;
	children: React.ReactNode;
}) {
	return (
		<section
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
			className='relative flex items-center justify-center min-h-[80vh] bg-center bg-cover bg-no-repeat md:bg-fixed'
		>
			{/* Soft overlay */}
			<div className='absolute inset-0 bg-black/40' />

			{/* Content */}
			<div className='relative z-10 text-white text-center px-6 max-w-2xl'>
				{children}
			</div>
		</section>
	);
}
