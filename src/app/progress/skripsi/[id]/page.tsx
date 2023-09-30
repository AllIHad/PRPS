import SingleDetailSkripsi from '@/components/singleDetailSkripsi/SingleDetailSkripsi'


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
      <div className="my-10  px-5 xl:px-0">
      <SingleDetailSkripsi id={id} />
      </div>
    </main>
  )
}
