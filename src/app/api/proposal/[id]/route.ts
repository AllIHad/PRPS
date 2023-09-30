import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import Proposal from "@/models/proposalModel";


connect()


export async function GET(request: NextRequest, { params }: any) {
    try {
        const { id } = params;

        const proposal = await Proposal.findOne({ _id: id });

        return NextResponse.json({
            message : 'Single Proposal found',
            status: 200,
            detail: proposal
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

}