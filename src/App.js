import { useEffect, useState } from 'react';
import './App.css';
import { ListOfPosts } from './components/ListOfPosts';

function App() {
  const [posts, setPosts] = useState([])

  useEffect( async _ => {
    let response = await fetch ('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()
    setPosts(json)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        header comp
      </header>
      <main className="App-main">
        <ListOfPosts posts={posts} />
      </main>
    </div>
  );
}

export default App;
