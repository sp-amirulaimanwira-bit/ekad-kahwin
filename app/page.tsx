"use client";
import { motion } from 'framer-motion';
import RSVPForm from '@/components/RSVPForm';
import Countdown from '@/components/Countdown'; 
import AudioPlayer from '@/components/AudioPlayer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-800">
      <AudioPlayer />
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm mb-4">Walimatulurus</p>
          <h1 className="text-6xl md:text-8xl font-serif mb-4 text-stone-800">Amirul & Fairusnissa</h1>
          <p className="text-xl italic text-stone-600 font-serif mb-8">12 Disember 2026</p>
          
          {/* Komponen Countdown */}
          <Countdown targetDate="2026-12-12T11:00:00" />
        </motion.div>
      </section>

      {/* MAKLUMAT MAJLIS */}
      <section className="py-20 text-center px-6 bg-white">
        <h3 className="text-2xl font-serif mb-4 uppercase tracking-widest">Lokasi Majlis</h3>
        <p className="mb-6 text-stone-600 font-light max-w-md mx-auto">
          Dewan Perdana, Putrajaya<br/>
          Persiaran Perdana, Presint 1, 62000 Putrajaya
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://waze.com" target="_blank" className="border border-stone-800 px-8 py-2 hover:bg-stone-800 hover:text-white transition duration-300">Waze</a>
          <a href="https://maps.google.com" target="_blank" className="border border-stone-800 px-8 py-2 hover:bg-stone-800 hover:text-white transition duration-300">Google Maps</a>
        </div>
      </section>

      <RSVPForm />
      
      <footer className="py-10 text-center text-xs text-stone-400 tracking-widest uppercase">
        Dibuat dengan ❤️ oleh Amir & Sara
      </footer>
    </main>
  );
}