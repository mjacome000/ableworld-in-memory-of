'use client';
import { useRef, useState } from 'react';

export default function BackgroundMusic() {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [playing, setPlaying] = useState(false);

	const toggleAudio = () => {
		if (!audioRef.current) return;

		if (playing) {
			audioRef.current.pause();
		} else {
			audioRef.current.volume = 0.4;
			audioRef.current.play();
		}

		setPlaying(!playing);
	};

	return (
		<>
			<audio ref={audioRef} src='/music/instrumental.mp3' loop />

			<button
				onClick={toggleAudio}
				className='fixed bottom-6 right-6 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-md text-sm hover:bg-white transition'
			>
				{playing ? 'Mute Music' : 'Play Music'}
			</button>
		</>
	);
}
