import "../styles/MakePost.css";
import { useState } from "react";
import photo from "../img/profpic.jpg";
import { IoVideocam, IoFlagSharp } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import CreatePost from "./CreatePost";

const MakePost = ({ setPosts, posts }) => {
    const profPicSize = 40;
    const [showCreatePost, setShowCreatePost] = useState(false);

    return (
        <div className="make-new-post">
            <div className="make-post">
                <img src={photo} alt="A photo of Calvin" width={profPicSize} height={profPicSize} />
                <p className="make" onClick={() => setShowCreatePost(true)}>What's on your mind</p>
                { showCreatePost && <CreatePost setShowCreatePost={setShowCreatePost} setPosts={setPosts} posts={posts} /> }
            </div>
            <div className="make-post-options">
                <p><IoVideocam className="grow-icon" color="#f02849" /> Live Video</p>
                <p><IoMdPhotos className="grow-icon" color="#45bd62" /> Photo/Video</p>
                <p><IoFlagSharp className="grow-icon" color="#39afd5" /> Life Event</p>
            </div>
        </div>
    );
}
 
export default MakePost;