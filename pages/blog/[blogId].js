import { useRouter } from 'next/router'
import React from 'react'

function blogId() {
    const router = useRouter();
    const id = router.query.blogId;
    //here blogId is file name of dynamic routing page:
    
  return (
    <div>blogId. this is dynamic page {id}</div>
  )
}

export default blogId