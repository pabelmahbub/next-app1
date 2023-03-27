import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Header from '@/Components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Page Home</title>
      </Head>
      <main>
        <div style={{marginBottom:'30px'}}>
          <h2 className='py-6'>Next.js hello everyone.</h2>
          <Header />

          <Link href='/blog' style={{backgroundColor:'pink',marginLeft:'30px'}}>Blog Button</Link>
          <Link href='/posts' style={{backgroundColor:'pink',marginLeft:'30px'}}>GO TO POSTS</Link>
          <Link href='/comments' style={{backgroundColor:'pink',marginLeft:'30px'}}>GO TO COMMENTS</Link>
        </div>
      </main>

      <Image src='/nature.jpg' width={500} height={250}></Image>
    </>
  )
}
