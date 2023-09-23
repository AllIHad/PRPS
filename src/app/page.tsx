import Image from 'next/image'
import LoginForm from '@/components/loginForm/LoginForm'

export default function Home() {
  return (
    <main className='bg-[#f4f6f9] min-h-screen'>
      Hello World
      <LoginForm />
    </main>
  )
}
