import Post from '@/Components/Post';
import React from 'react';
import styles from './Post.module.css'

function Posts({posts}) {
    //console.log(props);
  return (
    <div className={styles.box}>
        <h2> Total Post number: {posts.length}</h2>
        {
            posts.map(post => <Post post={post} key={post.id}></Post>)
        }
    
    </div>
  )
}

export default Posts;

//SSG:
export const getStaticProps = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const data = await res.json();

    console.log(data);
    return {
        props:{
            posts: data
        }
    }
}