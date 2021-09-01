import "../styles/CreatePost.css"
import photo from "../img/profpic.jpg"
import color from "../img/color.png"
import { MdClose, MdLocationOn, MdMoreHoriz } from "react-icons/md"
import { BiSmile } from "react-icons/bi"
import { GiMicrophone } from "react-icons/gi"
import { IoMdPhotos } from "react-icons/io"
import { FaUserTag } from "react-icons/fa"
import { CgSmileMouthOpen } from "react-icons/cg"
import { useState } from "react"

const CreatePost = ({ setShowCreatePost, setPosts, posts }) => {
    const photoSize = 40;
    const colorIconSize = 40;
    const iconOptionsSize = "25px";
    const [text, setText] = useState("");
    const [status, setStatus] = useState("private");

    const textIsNull = () => text === "";

    const handlePost = (e) => {
        e.preventDefault();

        const today = new Date();
        const date = today.getDate() + " " + (today.toLocaleString('default', {month: 'long'})) + " " + today.getFullYear();

        const post = {
            id: Math.random(),
            from: "Calvin Montolalu",
            date: date,
            text: text,
            status: status,
        }

        const newPosts = [post, ...posts];
        setPosts(newPosts);
        setShowCreatePost(false);
    }

    return (
        <div className="create-post">
            <div className="header">
                <h2>Create Post</h2>
                <p className="close" onClick={() => setShowCreatePost(false)}><MdClose className="icons" /></p>
            </div>
            <div className="inside">
                <div className="details">
                    <img src={photo} alt="A photo of Calvin" width={photoSize} height={photoSize} />
                    <div className="options">
                        <p>Calvin Montolalu</p>
                        <select 
                            value={ status }
                            onChange={e => setStatus(e.target.value)}
                        >
                            <option value="private">Only me</option>
                            <option value="friends">Friends</option>
                            <option value="global">Public</option>
                        </select>
                    </div>
                </div>
                <div className="form">
                    <textarea 
                        placeholder="What's on your mind?"
                        onChange={e => setText(e.target.value)}
                    />
                    <div className="decor">
                        <img className="color-icon" src={color} width={colorIconSize} height={colorIconSize} />
                        <BiSmile className="smile-icon" />
                    </div>
                    <div className="add-to-post">
                        <p>Add to your post</p>
                        <div className="options">
                            <p className="decor-icons"><IoMdPhotos color="#45bd62" size={iconOptionsSize} /></p>
                            <p className="decor-icons"><FaUserTag color="#1877f2" size={iconOptionsSize} /></p>
                            <p className="decor-icons"><CgSmileMouthOpen color="#f7b928" size={iconOptionsSize} /></p>
                            <p className="decor-icons"><MdLocationOn color="#f5533d" size={iconOptionsSize} /></p>
                            <p className="decor-icons"><GiMicrophone color="#f02849" size={iconOptionsSize} /></p>
                            <p className="decor-icons"><MdMoreHoriz color="#5f656e" size={iconOptionsSize} /></p>
                        </div>
                    </div>
                    { (textIsNull()) ? <button disabled>Post</button> : <button onClick={handlePost}>Post</button> }
                </div>
            </div>
            <div className="backdrop" onClick={() => setShowCreatePost(false)}></div>
        </div>
    );
}
 
export default CreatePost;