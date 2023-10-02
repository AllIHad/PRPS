"use client"

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import axios from "axios";
import { Input } from '@nextui-org/react'
import {Button} from "@nextui-org/react";

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
            toast.error('Your username or password is incorrect');
        } finally {
            setLoading(false);
        }
    }

    return (
        <section>
          
            <form
                className='block'
            >
                  <h2 className='text-center font-bold text-3xl'>LOGIN PRPS</h2>
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
            {loading ?  
            <Button color='success' className='flex justify-center' isLoading >Loading</Button> 
            : 
            <Button className='flex justify-center text-white hover:bg-green-700' color='success' onClick={handleSubmit} >Masuk</Button> }
            </form>
        </section>
    )
}
