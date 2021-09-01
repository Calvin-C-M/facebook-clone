import "../styles/HeroBanner.css";
import coverPict from "../img/profhead.jpg";
import profPict from "../img/profpic.jpg";
import { MdExpandMore, MdEdit, MdAddCircle, MdPhotoCamera, MdMoreHoriz } from "react-icons/md";
import { AiOutlineEye, AiOutlineSearch, AiOutlineUnorderedList } from "react-icons/ai"
import { FiAlertTriangle, FiArchive } from "react-icons/fi"
import { RiUserSettingsLine } from "react-icons/ri"
import { useState } from "react";

const Hero = () => {
    const coverPhoto = {
        width: 1100,
        height: 450
    };
    const profPictSize = 160;

    const [showMoreProfile, setShowMoreProfile] = useState(false);
    const handleClickMoreProfile = () => {
        if(showMoreProfile) {
            setShowMoreProfile(false);
        } else {
            setShowMoreProfile(true);
        }
    }

    const [showMoreOptions, setShowMoreOptions] = useState(false);
    const handleClickMoreOptions = () => {
        if(showMoreOptions) {
            setShowMoreOptions(false);
        } else {
            setShowMoreOptions(true);
        }
    }

    return (
        <div className="hero-banner">
            <div className="cover-photo">
                <img src={coverPict} alt="Cover Photo of Calvin" width={ coverPhoto.width } height={ coverPhoto.height } />
                <button>
                    <MdPhotoCamera className="edit-cover-pict" />
                    Edit Cover Photo
                </button>
            </div>
            <div className="profile-picture">
                <img src={profPict} alt="Photo of Calvin" width={profPictSize} height={profPictSize} />
                <a href="/editProfPict">
                    <MdPhotoCamera className="edit-profile-pict" />
                </a>
            </div>
            <div className="bio">
                <h1><b>Calvin Montolalu</b> (Calvin Montolalu)</h1>
                <a href="/addBio">Add bio</a>
            </div>
            <div className="profile-menus">
                <div className="profile-links">
                    <a href="#">Posts</a>
                    <a href="#">About</a>
                    <a href="#">Friends 94</a>
                    <a href="#">Photos</a>
                    <a href="#">Story Archive</a>
                    <a href="#">Videos</a>
                    <a onClick={handleClickMoreProfile}>More
                        <MdExpandMore className="nav-icons" />
                    </a>
                    { showMoreProfile && <div className="more-profile">
                        <p>Check-ins</p>
                        <p>Sports</p>
                        <p>Music</p>
                        <p>Films</p>
                        <p>TV Programmes</p>
                        <p>Books</p>
                        <p>Apps and Games</p>
                        <p>Likes</p>
                        <p>Events</p>
                        <p>Questions</p>
                        <p>Reviews Given</p>
                        <p>Groups</p>
                        <p>Manage Sections</p>
                    </div> }
                </div>
                <div className="profile-options">
                    <button>
                        <MdAddCircle className="nav-icons" /> 
                        Add to Story
                    </button>
                    <button>
                        <MdEdit className="nav-icons" /> 
                        Edit Profile
                    </button>
                    <button onClick={handleClickMoreOptions}>
                        <MdMoreHoriz className="nav-icons" />
                    </button>
                    { showMoreOptions && <div className="more">
                        <a><AiOutlineEye />View as</a>
                        <a><AiOutlineSearch />Search profile</a>
                        <a><FiAlertTriangle />Account status</a>
                        <a><FiArchive />Archive</a>
                        <a><AiOutlineUnorderedList />Activity log</a>
                        <a><RiUserSettingsLine />Profile and tagging settings</a>
                    </div> }
                </div>
            </div>
        </div>
    );
}
 
export default Hero;