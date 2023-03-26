import Link from 'next/link'
import React from 'react'

function Post({post}) {
  return (
    <div style={{backgroundColor:'tomato'}}>
        <h3>{post.title}</h3>
        <Link href={`/posts/${post?.id}`}><button>See details</button></Link>
        
    </div>
  )
}

export default Post