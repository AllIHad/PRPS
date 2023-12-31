import React from 'react'
import Link from 'next/link'
import DetailSkripsi from '@/components/detailSkripsi/DetailSkripsi'


function page() {
    return (
        <main className='min-h-screen'>
            <div className='max-w-[1240px] m-auto px-5 xl:px-0'>
                <div className=' py-5 border-b border-gray-300 flex lg:justify-normal justify-center'>
                    <h3 className='font-medium text-2xl '>Progress Skripsi</h3>
                </div>
                <div className='mt-5 pl-3 flex lg:justify-normal justify-center'>
                    <Link className='text-base' href='/progress/skripsi/create'>+ Tambah</Link>
                </div>

                <DetailSkripsi />

            </div>
        </main>
    )
}

export default page