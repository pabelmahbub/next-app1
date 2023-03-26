import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Page Home</title>
      </Head>
      <main>
        <div>
          <h2 className='py-6'>Next.js hello everyone.</h2>


          <button className="btn btn-accent">Button</button>
          <Link href='/blog'>Blog Button</Link>
        </div>
      </main>

      <Image src='/nature.jpg' width={500} height={250}></Image>
    </>
  )
}
