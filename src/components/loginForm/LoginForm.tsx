"use client"

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import axios from "axios";
import { Input } from '@nextui-org/react'

export default function LoginForm() {

    const router = useRouter()

    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/progress/skripsi");
        } catch (error: any) {
            console.log(error.response.data);
            toast.error(error.response.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
          
            <form
                onSubmit={handleSubmit}
                className='block'
            >
                  <h2 className='text-center font-semibold text-lg'>Login</h2>
                <Input
                    type="text"
                    label="User Name"
                    labelPlacement="outside"
                    className='my-10'
                    value={user.username}
                    onChange={(e) => setUser({...user, username: e.target.value })}
                />
                <Input
                    type="password"
                    label="Password"
                    labelPlacement="outside"
                    className='my-10'
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value })}
                />
                <button className='flex px-3 py-2 justify-center bg-green-600 hover:bg-green-700 rounded-md text-white' type='submit'> {loading ? "Loading..." : "Masuk"}</button>
            </form>
        </>
    )
}
