import SkripsiForm from "@/components/skripsiForm/SkripsiForm"


function page() {
    return (
        <main className='min-h-screen'>
            <div className='max-w-[1240px] m-auto px-5 xl:px-0'>
                <div className=' py-5 border-b border-gray-300'>
                    <h3 className='font-medium text-2xl mt-5 flex lg:justify-normal justify-center'>Create Srkripsi</h3>
                </div>

                <div className="">
                    <SkripsiForm />
                </div>

            </div>
        </main>
    )
}

export default page