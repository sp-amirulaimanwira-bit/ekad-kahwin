"use client";
import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <audio ref={audioRef} loop src="/music/wedding-wedding-music-345462.mp3" />
      <button 
        onClick={togglePlay}
        className="bg-white/80 p-3 rounded-full shadow-lg backdrop-blur-sm border border-stone-200"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  );
}