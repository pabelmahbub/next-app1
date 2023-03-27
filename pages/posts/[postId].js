import { useRouter } from "next/router";

function PostDetails({post}) {

    const router = useRouter();

    const handleClick = ()=>{
        router.push('/posts')
    }

  return (
    <div style={{backgroundColor:'pink'}}>
         <h2>Post Id: {post?.id}</h2>
        <h2>Post Title: {post?.title}</h2>
        <button onClick={handleClick}>Back to Posts</button>
    </div>
  )
}

//SSG:
export const getStaticProps = async (context) =>{

    const {params} = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
    const data = await res.json();

    console.log(data);
    return {
        props:{
            post: data
        }
    }
}

//SSG:
export const getStaticPaths = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const posts = await res.json();

    const paths = posts.map(post => {
        return {
            params: {
                postId :`${post.id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }

}


export default PostDetails

