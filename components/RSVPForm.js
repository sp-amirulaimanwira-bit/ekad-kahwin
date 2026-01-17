"use client";
import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from "firebase/firestore";

export default function RSVPForm() {
  const [form, setForm] = useState({ nama: '', kehadiran: 'Ya', pax: 1 });
  const [loading, setLoading] = useState(false);

  // Fungsi untuk hantar ke Firebase
  const hantarRSVP = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "tetamu"), { 
        ...form, 
        timestamp: new Date() 
      });
      alert("Terima kasih! Jumpa di sana.");
      // Reset form selepas berjaya
      setForm({ nama: '', kehadiran: 'Ya', pax: 1 });
    } catch (err) {
      console.error(err);
      alert("Ralat berlaku. Sila pastikan Firebase Rules anda membenarkan 'write'.");
    }
    setLoading(false);
  };

  return (
    <section id="rsvp" className="p-10 bg-stone-100 text-center">
      <h2 className="text-3xl font-serif mb-6 text-stone-800">Kehadiran</h2>
      
      <form onSubmit={hantarRSVP} className="max-w-md mx-auto space-y-4 text-left">
        <div>
          <label className="block text-sm mb-1 text-stone-600">Nama Penuh</label>
          <input 
            type="text" 
            placeholder="Contoh: Ahmad Ali" 
            required
            value={form.nama}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-200 outline-none text-black"
            onChange={(e) => setForm({...form, nama: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-stone-600">Kehadiran</label>
          <select 
            className="w-full p-3 border rounded-lg text-black bg-white"
            value={form.kehadiran}
            onChange={(e) => setForm({...form, kehadiran: e.target.value})}
          >
            <option value="Ya">Akan Hadir</option>
            <option value="Tidak">Tidak Hadir</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1 text-stone-600">Bilangan Pax</label>
          <input 
            type="number" 
            min="1" 
            max="10"
            value={form.pax}
            className="w-full p-3 border rounded-lg text-black"
            onChange={(e) => setForm({...form, pax: parseInt(e.target.value)})}
          />
        </div>

        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-stone-800 text-white p-3 rounded-lg hover:bg-stone-700 transition disabled:bg-stone-400"
        >
          {loading ? "Menghantar..." : "Hantar RSVP"}
        </button>
      </form>
    </section>
  );
}