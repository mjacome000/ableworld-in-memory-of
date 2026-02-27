import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'In Memory of a Friend',
	description:
		'The life of a friend who passed away, told through photos and stories.',
};

type Props = {
	children: React.ReactNode;
};

export default function RootLayout(props: Props) {
	return (
		<html lang='en'>
			<body className='bg-linear-to-br from-slate-900 via-gray-900 to-black text-white font-sans'>
				{props.children}
			</body>
		</html>
	);
}
