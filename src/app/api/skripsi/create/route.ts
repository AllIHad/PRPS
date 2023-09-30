import { connect } from '@/dbconfig/dbconfig';
import Skripsi from '@/models/skripsiModel';
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helpers/getDataFromToken';

connect()

export async function POST(request: NextRequest) {
    try {

        const reqbody = await request.json()
        const { judul, priode, presentaseSistem, presentaseSkripsi, keterangan } = reqbody

        if (!judul || !priode || !presentaseSistem || !presentaseSkripsi || !keterangan) {
            return NextResponse.json({ message: "Please fill in the required information" }, { status: 400 })
        }

        const user_id =  { _id: getDataFromToken(request) }
        const newSkripsi = await new Skripsi({
            judul,
            priode,
            presentaseSistem,
            presentaseSkripsi,
            keterangan,
            user_id
        })

        const saveSkripsi = await newSkripsi.save()
        console.log(saveSkripsi)

        return NextResponse.json({
            message: "Skripsi berhasil ditambahkan",
            status: 200,
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }


}