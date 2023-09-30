import Proposal from '@/models/proposalModel';
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helpers/getDataFromToken';
import { connect } from '@/dbconfig/dbconfig';

connect()

export async function GET(request: NextRequest) {

    try {
        const proposal = await Proposal.find({user_id : getDataFromToken(request)}).sort({createdAt : -1})

        return NextResponse.json({
            message : 'Proposal found',
            detail : proposal
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}