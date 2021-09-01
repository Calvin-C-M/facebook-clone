import "../styles/PostView.css";
import { CgOptions } from "react-icons/cg";
import { MdSettings, MdMenu } from "react-icons/md";
import { IoGrid } from "react-icons/io5";

const PostView = () => {
    return (
        <div className="post-view">
            <div className="upper">
                <h2>Posts</h2>
                <div className="options">
                    <button><CgOptions />Filters</button>
                    <button><MdSettings />Manage posts</button>
                </div>
            </div>
            <div className="views">
                <a href="#"><MdMenu />List view</a>
                <a href="#"><IoGrid />Grid view</a>
            </div>
        </div>
    );
}
 
export default PostView;