export default function Section({
	children,
	className = '',
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<section className={`py-20 px-6 md:px-16 ${className}`}>
			<div className='max-w-5xl mx-auto'>{children}</div>
		</section>
	);
}
