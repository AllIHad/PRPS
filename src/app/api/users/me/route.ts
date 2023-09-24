import User from "@/models/userModel";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import { connect } from '@/dbconfig/dbconfig'

connect()

export async function GET(request: NextRequest) {
    try {
        const user = await User.findOne({ _id: getDataFromToken(request) }).select('-password -isadmin')

        return NextResponse.json({
            message : "user found",
            data : user 
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}