"use client"

import Image from "next/image"
import Link from "next/link"
import toast from "react-hot-toast"
import axios from "axios"
import { useRouter } from 'next/navigation'
import React from "react"

function Navbar() {

  const router = useRouter()
  // const [data,setData] = React.useState()

  const handleLogout = async () => {
    try {
      await axios.get('/api/users/logout')
      toast.success('Logged out successfully!')
      router.push('/')

    } catch (error: any) {
      toast.error(error.response.message)
    }
  }

  // const getUserDetails = async () => {
  //     const res = await axios.get('/api/users/me')
  //     setData(res.data.data.name) 
  // }

  // getUserDetails ()

  return (
    <div className=" shadow-md bg-white">
      <div className="flex justify-between items-center h-[70px] max-w-[1240px] m-auto px-5 xl:px-0">
        <div className="flex text-center flex-1 font-bold gap-6 items-center">
          <Image src='/logo.svg' alt="" width={30} height={30} />
          <h1 className="text-[20px]">PR</h1>
          <Link href='/progress/skripsi'>Progress Skripsi</Link>
          <Link href='/progress/sempro'>Progress Sempro</Link>
        </div>
        <div className="flex flex-1 items-center justify-end text font-bold gap-6 ">
          {/* {data && (
            <Link href={`/progress/profile/${data}`} >{data}</Link>
          )} */}
          <button onClick={handleLogout} className="cursor-pointer hover:text-green-500 duration-500">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar