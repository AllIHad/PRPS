"use client"

import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
import React, { useEffect } from "react"

export default function DetailSkripsi() {

  const [data, setData] = React.useState<any[]>([])

  const getProgressSkripsi = async () => {
    const res = await axios.get('/api/skripsi/details')
    setData(res.data.detail);
  }

  useEffect(() => {
    getProgressSkripsi();
  }, []);

  return (
    <section>
      {data ? data.map((data) => (
        <Link href={'/progress/skripsi/' + data._id} key={data.id} >
          <Card className="hover:bg-slate-100 mt-5">
            <CardBody>
              <h2 className="font-semibold text-lg">{data.judul}</h2>
              <p className="font-medium">Priode : {data.priode}</p>
              <p className="font-light">{data.keterangan.slice(0, 200)}...</p>
            </CardBody>
          </Card>
        </Link>
      )) :
        <p className="my-10 text-center font-light text-red-400">Diharapkan untuk membuat progress baru dengan menekan tombol <span className="font-medium">+ Tambah</span> di atas</p>
      }
    </section>
  )
}
