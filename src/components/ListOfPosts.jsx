import { Post } from "./Post";

export const ListOfPosts = ({posts}) => {

  return (
    <section className="posts">
      <h1>list of posts:</h1>
      {posts.map((post, i) => {
        return <Post key={i} {...post}/>
      })}

      {/* {posts.map(({title, body}, i) => {
        return <Post key={i} title={posts} body={body}/>
      })} */}
    </section >
  )
}