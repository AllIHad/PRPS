import React from 'react'

export const metadata = {
    title: 'Create Srkripsi - Progress',
}

function page() {
    return (
        <main className='min-h-screen'>
            <div className='max-w-[1240px] m-auto'>
                <div className=' py-5 border-b border-gray-300'>
                    <h3 className='font-medium text-2xl '>Create Srkripsi</h3>
                </div>

                <div className="mt-8">
                    <form className='w-1/2'>
                        <label>
                            <span>Judul</span>
                            <input type="text" />
                        </label>
                        <label>
                            <span>BAB 1</span>
                            <input type="text" />
                        </label><label>
                            <span>BAB 2</span>
                            <input type="text" />
                        </label>
                        <label>
                            <span>BAB 3</span>
                            <input type="text" />
                        </label>
                        <label>
                            <span>BAB 4</span>
                            <input type="text" />
                        </label>
                        <label>
                            <span>BAB 5</span>
                            <input type="text" />
                        </label>
                        <button className='bg-green-500 hover:bg-green-700 rounded-md px-3 py-1 text-white'>
                            Create
                        </button>
                    </form>
                </div>

            </div>
        </main>
    )
}

export default page