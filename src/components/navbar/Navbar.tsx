import Image from "next/image"
import Link from "next/link"

function Navbar() {
  return (
    <div className=" shadow-md bg-white">
      <div className="flex justify-between items-center h-[70px] max-w-[1240px] m-auto">
        <div className="flex text-center flex-1 font-bold gap-6 items-center">
          <Image src='/logo.png' alt="" width={30} height={30} />
          <h1 className="text-[20px]">SITEI</h1>
          <Link href='/progress/skripsi'>Progress Skripsi</Link>
          <Link href='/progress/sempro'>Progress Sempro</Link>
        </div>
        <div className="flex flex-1 items-center justify-end text font-bold ">
          <span className="cursor-pointer hover:text-green-500 duration-500">Logout</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar