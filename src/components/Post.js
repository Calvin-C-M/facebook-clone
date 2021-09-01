import "../styles/Post.css";
import profPic from "../img/profpic.jpg"
import { MdMoreHoriz, MdGif, MdEdit } from "react-icons/md";
import { AiOutlineGlobal, AiOutlinePushpin } from "react-icons/ai"
import { BiLike, BiComment, BiShare, BiSmile, BiSticker } from "react-icons/bi";
import { FiCamera, FiLock, FiBookmark, FiArchive } from "react-icons/fi"
import { FaUserFriends } from "react-icons/fa"
import { IoNotificationsOffOutline, IoCalendarOutline, IoTrashOutline } from "react-icons/io5"
import { useState } from "react";

const Post = ({ id, from, date, text, status, handleDelete }) => {
    const profPicSize = 40;
    const profPicComment = 30;
    const moreIconSize = 20;
    const [showMore, setShowMore] = useState(false);

    const openMore = () => {
        if(showMore) {
            setShowMore(false);
        } else {
            setShowMore(true);
        }
    }

    return (
        <div className="post">
            <div className="post-header">
                <div className="header-details">
                    <img src={profPic} alt="A Photo of Calvin" width={profPicSize} height={profPicSize} />
                    <div className="details">
                        <p><b>{ from }</b></p>
                        <p className="status gray">{ date }
                        { 
                            (status === "private") ? <FiLock /> : 
                            (status === "global") ? <AiOutlineGlobal /> :
                            <FaUserFriends />
                        }</p>
                    </div>
                </div>
                <MdMoreHoriz onClick={openMore} className="more-button gray" />
                { showMore && <div className="more">
                    <div className="more-top">
                        <p><AiOutlinePushpin size={moreIconSize} />Pin post</p>
                        <p><FiBookmark size={moreIconSize} />Save post</p>
                    </div>
                    <div className="more-mid">
                        <p><MdEdit size={moreIconSize} />Edit post</p>
                        <p><FiLock size={moreIconSize} />Edit audience</p>
                        <p><IoNotificationsOffOutline size={moreIconSize} />Turn off notifications for this post</p>
                        <p><AiOutlineGlobal size={moreIconSize} />Turn off translations</p>
                        <p><IoCalendarOutline size={moreIconSize} />Edit date</p>
                    </div>
                    <div className="more-bot">
                        <p><FiArchive size={moreIconSize} />Move to archive </p>
                        <p onClick={() => handleDelete(id)} ><IoTrashOutline size={moreIconSize} />Move to Recycle bin</p>
                    </div>
                </div> }
            </div>
            <div className="post-content">
                { text }
            </div>
            <div className="post-options">
                <p className="gray"><BiLike /> Like</p>
                <p className="gray"><BiComment /> Comment</p>
                <p className="gray"><BiShare rotate="90" /> Share</p>
            </div>
            <div className="post-comments">
                <img src={ profPic } alt="A photo of Calvin" width={profPicComment} height={profPicComment} />
                <input
                    placeholder="Write a comment..."
                />
                <div className="options">
                    <a className=" gray"><BiSmile /></a>
                    <a className=" gray"><FiCamera /></a>
                    <a className=" gray"><MdGif /></a>
                    <a className=" gray"><BiSticker /></a>
                </div>
            </div>
        </div>
    );
}
 
export default Post;