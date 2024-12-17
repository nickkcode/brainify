'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';

export function MusicToggle() {
	const [playing, setPlaying] = React.useState(false);
	const audioRef = React.useRef<HTMLAudioElement | null>(null);
    
	// Initialize the audio object
	React.useEffect(() => {
        audioRef.current = new Audio('/bg_music.mp3');
		audioRef.current.loop = true;
		audioRef.current.volume = 0.5;
	}, []);
    
	const toggleMusic = () => {
		if (!audioRef.current) return;
		if (playing) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setPlaying(!playing);
	};

	return (
		<Button variant='ghost' size='icon' onClick={toggleMusic}>
			{playing ? (
				<Music className='h-[1.2rem] w-[1.2rem] transition-all' />
			) : (
				<Music className='h-[1.2rem] w-[1.2rem] opacity-50 transition-all' />
			)}
			<span className='sr-only'>Toggle music</span>
		</Button>
	);
}
