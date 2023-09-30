import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import Skripsi from "@/models/skripsiModel";

connect()

export async function GET(request: NextRequest, { params }: any) {
    try {
        const { id } = params;

        const skripsi = await Skripsi.findOne({ _id: id });

        return NextResponse.json({
            message : 'Single Skripsi found',
            status: 200,
            detail: skripsi
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

}