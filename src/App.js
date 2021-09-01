import "./styles/App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroBanner";
import NewMessage from "./components/FloatingButton";
import Intro from "./components/Intro";
import Photos from "./components/Photos";
import MakePost from "./components/MakePost";
import Friends from "./components/Friends";
import Post from "./components/Post";
import PostView from "./components/PostView";

function App() {  
  const [posts, setPosts] = useState([
    {
      id: 1,
      from: "Calvin Montolalu",
      date: "21 Agustus 2021",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque.",
      status: "private"
    },
    {
      id: 2,
      from: "Calvin Montolalu",
      date: "31 Desember 2020",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque.",
      status: "friends"
    },
    {
      id: 3,
      from: "Calvin Montolalu",
      date: "29 Desember 2020",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque.",
      status: "global"
    },
    {
      id: 4,
      from: "Calvin Montolalu",
      date: "25 Desember 2020",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque.",
      status: "friends"
    },
    {
      id: 5,
      from: "Calvin Montolalu",
      date: "01 October 2020",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque.",
      status: "private"
    }
  ])

  const handleDelete = (id) => {
    setPosts(prevPost => prevPost.filter(post => post.id !== id))
  }

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Hero />
        <div className="sections">
          <div className="left-section">
            <Intro />
            <Photos />
            <Friends />
          </div>
          <div className="right-section">
            <MakePost setPosts={setPosts} posts={posts} /> 
            <PostView />
            { posts.map(post => (
              <div key={post.id}>
                <Post id={post.id} from={post.from} date={post.date} text={post.text} status={post.status} handleDelete={handleDelete} />
              </div>
            )) }
          </div>
        </div>
      </div>
      <NewMessage />
    </div>
  );
}

export default App;
