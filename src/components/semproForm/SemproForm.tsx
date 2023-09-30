"use client"

import React from "react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

export default function SemproForm() {

  const router = useRouter()

  const [progress, setProgress] = React.useState({
    judul: '',
    priode: '',
    presentaseProposal: '',
    keterangan: '',
  });
  
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: any) => {
    try {
      setLoading(true);
      await axios.post('/api/proposal/create', progress);

      console.log('success', progress)
      router.push('/progress/proposal')

    } catch (error: any) {
      console.log(error.response.data)
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
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
        type="text"
        label="Presentase Proposal"
        variant="underlined"
        className='mt-10'
        placeholder="20"
        value={progress.presentaseProposal}
        onChange={((e: any) => setProgress({ ...progress, presentaseProposal: e.target.value }))}
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

    </>
  )
}

