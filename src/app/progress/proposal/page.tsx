import React from 'react'
import Link from 'next/link'
import DetailProposal from '@/components/detailProposal/DetailsProposal'


function page() {
    return (
        <main className='min-h-screen'>
            <div className='max-w-[1240px] m-auto px-5 xl:px-0'>
                <div className=' py-5 border-b border-gray-300 flex lg:justify-normal justify-center'>
                    <h3 className='font-medium text-2xl '>Progress Proposal</h3>
                </div>
                <div className='mt-5 pl-3 flex lg:justify-normal justify-center'>
                    <Link className='text-base' href='/progress/proposal/create'>+ Tambah</Link>
                </div>

                <DetailProposal />

            </div>
        </main>
    )
}

export default page