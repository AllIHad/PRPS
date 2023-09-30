import { connect } from '@/dbconfig/dbconfig';
import Proposal from '@/models/proposalModel'
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helpers/getDataFromToken';

connect()

export async function POST(request: NextRequest) {
    try {

        const reqbody = await request.json()
        const { judul, priode, presentaseProposal, keterangan } = reqbody

        if (!judul || !priode ||  !presentaseProposal || !keterangan) {
            return NextResponse.json({ message: "Please fill in the required information" }, { status: 400 })
        }

        const user_id = { _id: getDataFromToken(request) }
        const newProposal = await new Proposal({
            judul,
            priode,
            presentaseProposal,
            keterangan,
            user_id
        })

        const saveProposal = await newProposal.save()
        console.log(saveProposal)

        return NextResponse.json({
            message: "Proposal berhasil ditambahkan",
            status: 200,
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}