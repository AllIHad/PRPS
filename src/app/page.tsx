import LoginForm from '@/components/loginForm/LoginForm'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[#ffff] min-h-screen flex justify-center'>
      <div className='bg-[#f4f6f9] w-[1000px] m-auto grid grid-cols-1 md:grid-cols-2 py-20 rounded-3xl'>
        <div className='flex-row'>
          <Image
            className='flex m-auto'
            src='/LOGO-UNRI.png'
            alt='logo'
            width={255}
            height={200}
          />
          <h1 className='flex justify-center font-bold text-3xl pt-6'>PRPS</h1>
        </div>
        <div className='flex justify-center items-center'>
          <LoginForm />
        </div>
      </div>

    </main>
  )
}
