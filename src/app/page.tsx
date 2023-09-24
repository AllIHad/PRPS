import LoginForm from '@/components/loginForm/LoginForm'

export default function Home() {
  return (
    <main className='bg-[#f4f6f9] min-h-screen grid grid-cols-1 md:grid-cols-2 justify-center'>
        <div className='flex justify-center items-center'>
          <h1>University Of Riau</h1>
        </div>
        <div className='flex justify-center items-center'>
          <LoginForm />
      </div>
    </main>
  )
}
