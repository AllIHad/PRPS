import SemproForm from "@/components/semproForm/SemproForm"

function page() {
    return (
        <main className='min-h-screen'>
            <div className='max-w-[1240px] m-auto px-5 xl:px-0'>
                <div className=' border-b border-gray-300 flex lg:justify-normal justify-center '>
                    <h3 className='font-medium text-2xl my-5'>Create Proposal</h3>
                </div>
               
                <div className="">
                    <SemproForm />
                </div>

            </div>
        </main>
    )
}

export default page