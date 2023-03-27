function Comments({comments}) {
    console.log(comments)
  return (
    <div>
        <h1>Hello comments</h1>
        {
            comments.map(comment => <div  style={{backgroundColor:'pink'}}  key={comment.id}><h2 style={{paddingLeft:'5px'}}>{comment.name}</h2></div>)
        }
    </div>
  )
}



export default Comments;

//SSR: Server side rendering;

export const getServerSideProps = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=40');
    const data = await res.json();

    return {
        props: {
            comments: data
        }
    }

}