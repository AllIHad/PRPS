import { connect } from '@/dbconfig/dbconfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { name, username, password } = reqBody

        // check if username is already exist
        const user = await User.findOne({ username })
        if (user) {
            return NextResponse.json({ message: 'Username already exist' }, { status: 400 })
        }

        // hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // create new user
        const newUser = new User({
            name,
            username,
            password: hashedPassword
        })

        const savedUser =  await newUser.save()
        console.log(savedUser)

        return NextResponse.json({
            message: 'User created successfully',
            savedUser
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}