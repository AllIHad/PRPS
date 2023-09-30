import { SingleDetailProposal } from '@/components/singleDetailProposal/SingleDetailProposal'  

// export async function generateStaticParams(){
//   const res = await axios.get('/api/proposal/details')

//   const proposals = await res.data.detail

//   return proposals.map((proposal : any) =>({
//     id : proposal._id
//   }));
// }

export default function SingleDetail({
  params:
  { id },
}: {
  params: {
    id: string
  }
}) {
  return (
    <main className='bg-[#ffff] min-h-screen'>
      <div className='my-10  px-5 xl:px-0'> 
        <SingleDetailProposal id={id} />
      </div>
    </main>
  )
}
