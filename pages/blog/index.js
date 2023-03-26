import Head from "next/head"
import Link from "next/link"

function Blog() {
  return (
    <div>
       <Head>
        <title>Blog Page</title>
      </Head>
        <h1>Blog</h1>
        <Link href='/blog/blog1'>Blog Page1</Link>
    </div>
  )
}

export default Blog