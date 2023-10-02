"use client"

import React from "react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";

export default function SkripsiForm() {

  const router = useRouter()

  const [progress, setProgress] = React.useState<any>({
    judul: '',
    priode: '',
    presentaseSistem: Number,
    presentaseSkripsi: Number,
    keterangan: '',
  });

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: any) => {
    try {

      if(progress.judul.length === 0 || progress.priode.length === 0 || progress.keterangan.length === 0 || progress.presentaseSkripsi.length === 0 || progress.presentaseSistem.length === 0) {
        throw new Error('Fill all the requirement')
      }

      if (progress.presentaseSkripsi > 100 || progress.presentaseSistem > 100) {
        throw new Error('Presentase Skripsi or System cannot beyond 100');
      }

      setLoading(true);
      await axios.post('/api/skripsi/create', progress);

      toast.success('success', progress)
      router.push('/progress/skripsi')

    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <h1 className="mt-10 text-lg font-semibold">Fill Field Below</h1>
      <Input
        type="text"
        label="Judul"
        variant="underlined"
        placeholder="Judul"
        className='mt-10'
        value={progress.judul}
        onChange={(e) => setProgress({ ...progress, judul: e.target.value })}
      />
      <Input
        type="text"
        label="Priode"
        variant="underlined"
        placeholder="Priode"
        className='mt-10'
        value={progress.priode}
        onChange={(e => setProgress({ ...progress, priode: e.target.value }))}
      />

      <Input
        type="number"
        label="Presentase Sistem"
        variant="underlined"
        placeholder="20"
        className='mt-10'
        value ={progress.presentaseSistem }
        onChange={((e) => setProgress({ ...progress, presentaseSistem: e.target.value }))}
      />
      <p className="mt-5">Masukkan angka tanpa persen range 1 - 100 <span className="font-bold">Contoh : 20</span></p>

      <Input
        type="number"
        label="Presentase Skripsi"
        variant="underlined"
        className='mt-10'
        placeholder="20"
        value={progress.presentaseSkripsi}
        onChange={((e) => setProgress({ ...progress, presentaseSkripsi: e.target.value }))}
      />
      <p className="mt-5">Masukkan angka tanpa persen range 1 - 100 <span className="font-bold">Contoh : 20</span></p>

      <Textarea
        label="Keterangan"
        variant="underlined"
        className="max-w-full mt-5"
        value={progress.keterangan}
        onChange={(e) => setProgress({ ...progress, keterangan: e.target.value })}
      />

      {loading ?
        <Button color='success' className='my-10' isLoading >Loading</Button>
        :
        <Button className=' text-white hover:bg-green-700 my-10' color='success' onClick={handleSubmit} >Submit</Button>}

    </section>
  )
}

