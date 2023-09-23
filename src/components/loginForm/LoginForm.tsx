"use client"

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import axios from "axios";


export default function LoginForm() {

    const router = useRouter()

    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        
        console.log(user.username)
        console.log(user.password)

        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/progress/skripsi");
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className=''
            >
                <label>User name</label>
                <input
                    type="text"
                    id='username'
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    value={user.username} />
                <label >password </label>
                <input
                    type="password"
                    id='password'
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <button className='' type='submit'> {loading ? "Loading..." : "Masuk"}</button>
            </form>
        </>
    )
}
