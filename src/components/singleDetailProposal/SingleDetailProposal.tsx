'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { Progress } from '@nextui-org/react'
import { Card, CardHeader, CardBody,  Divider, } from "@nextui-org/react";

export function SingleDetailProposal({ id }: any) {

  const [data, setData] = useState<any>([])

  useEffect(() => {
    const getSingleDetail = async () => {
      const res = await axios.get(`/api/proposal/${id}`)
      setData(res.data.detail)
    }
    getSingleDetail()
  }, [id])

  return (
    <section>
      <Card className="max-w-[1240px] m-auto ">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
          <h2 className='text-xl '>{data.judul}</h2>
            <p className="text-small text-default-500 font text-gre">{data.priode}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
        <Progress
          size="md"
          radius="sm"
          classNames={{
            base: "max-w-full",
            track: "drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-pink-200 to-yellow-200",
            label: "tracking-wider font-medium text-default-800",
            value: "text-",
          }}
          label="Proposal progress"
          value={data.presentaseProposal}
          showValueLabel={true}
        />
        <p className='mt-5'>Keterangan : </p>
            <p className='mt-1'>{data.keterangan}</p>
        </CardBody>
        <Divider />
      </Card>
    </section>
  )
}
