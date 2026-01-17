
"use client";
import { motion } from 'framer-motion';
import RSVPForm from '@/components/RSVPForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm mb-4">Walimatulurus</p>
          <h1 className="text-6xl md:text-8xl font-serif mb-4 text-stone-800">Amir & Sara</h1>
          <p className="text-xl italic text-stone-600 font-serif">12 Disember 2026</p>
        </motion.div>
      </section>

      {/* MAKLUMAT MAJLIS */}
      <section className="py-20 text-center px-6">
        <h3 className="text-2xl font-serif mb-4">Lokasi Majlis</h3>
        <p className="mb-6 text-stone-600">Dewan Perdana, Putrajaya</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="border border-stone-800 px-6 py-2 hover:bg-stone-800 hover:text-white transition">Waze</a>
          <a href="#" className="border border-stone-800 px-6 py-2 hover:bg-stone-800 hover:text-white transition">Google Maps</a>
        </div>
      </section>

      <RSVPForm />
      
      <footer className="py-10 text-center text-xs text-stone-400">
        Dibuat dengan ❤️ oleh {form.nama || 'Bakalan Pengantin'}
      </footer>
    </main>
  );
}