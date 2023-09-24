import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: 'Skripsi - Progress',
}

function page() {
    const data = null
    return (
        <main className='min-h-screen'>
            <div className='max-w-[1240px] m-auto px-5 xl:px-0'>
                <div className=' py-5 border-b border-gray-300 flex lg:justify-normal justify-center'>
                    <h3 className='font-medium text-2xl '>Progress Skripsi</h3>
                </div>
                <div className='mt-7 p-3 bg-[#e9ecef] flex lg:justify-normal justify-center'>
                    <span className='font-semibold'>Riwayat</span>
                </div>
                <div className='my-1 p-3 flex lg:justify-normal justify-center'>
                    <Link className=' text-sm' href='/progress/skripsi/create'>+ Tambah</Link>
                </div>

                <ul className='grid grid-cols-3 '>
                    <li className='text-center py-[6px] border border-gray-500 bg-[#383f45] text-white '>Judul</li>
                    <li className='text-center py-[6px] border border-gray-500 bg-[#383f45] text-white '>Status</li>
                    <li className='text-center py-[6px] border border-gray-500 bg-[#383f45] text-white '>Progress</li>
                </ul>

                {data && (
                    <ul className='grid grid-cols-3 '>
                        <li className='text-center py-[6px] border font-extrabold bg-[#e9ecef]'>Nama</li>
                        <li className='text-center py-[6px] border font-extrabold bg-[#e9ecef]'>Status</li>
                        <li className='text-center py-[6px] border font-extrabold bg-[#e9ecef]'>Progress</li>
                    </ul>
                )}
                {!data && (
                    <div className='flex h-12 justify-center bg-[#e9ecef]'>
                        <p className='flex items-center'>No data available in table</p>
                    </div>
                )}

                <div className='flex my-5 p-3 items-center justify-between'>
                    <Link className='flex justify-start' href='/'>Prev</Link>
                    <Link className='flex justify-end' href='/'>Next</Link>
                </div>
            </div>
        </main>
    )
}

export default page