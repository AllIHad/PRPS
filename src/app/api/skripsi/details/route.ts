import Skripsi from "@/models/skripsiModel";
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helpers/getDataFromToken';
import { connect } from '@/dbconfig/dbconfig';

connect()

export async function GET(request: NextRequest) {

    try {
        const skripsi = await Skripsi.find({user_id : getDataFromToken(request)}).sort({createdAt : -1})

        return NextResponse.json({
            message : 'Skripsi found',
            detail : skripsi
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}