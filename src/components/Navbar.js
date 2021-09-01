import "../styles/Navbar.css";
import { ReactComponent as Logo } from "../img/FacebookLogo.svg";
import profpic from "../img/profpic.jpg";
import { HomeOutlined, PeopleOutline, OndemandVideo, Storefront } from '@material-ui/icons';
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiNotification2Fill } from "react-icons/ri";
import { MdExpandMore, MdSearch } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi"

const Navbar = () => {
    const logoSize = 40;
    const profileImgSize = 28;
    const paths = {
        home: "/",
        friends: "/friends",
        watch: "/watch",
        market: "/marketplace",
        groups: "/groups",
        profile: "/profile",
        apps: "/apps",
        messenger: "/messenger",
        notifications: "/notifications",
        account: "/account",
    }

    return (
        <nav>
            <div className="search">
                <Logo className="facebook-logo" width={ logoSize } height={ logoSize } />
                <MdSearch className="icon" />
                <input
                    placeholder="Search Facebook"
                />
            </div>

            <div className="links">
                <a href={ paths.home }>
                    <HomeOutlined className="nav-icons" />
                </a>
                <a href={ paths.friends }>
                    <PeopleOutline className="nav-icons" />
                </a>
                <a href={ paths.watch }>
                    <OndemandVideo className="nav-icons" />
                </a>
                <a href={ paths.market }>
                    <Storefront className="nav-icons" />
                </a>
                <a href={ paths.groups }>
                    <HiUserGroup className="nav-icons" />
                </a>
            </div>

            <div className="menus">
                <a href={ paths.profile } className="profile selected">
                    <img src={profpic} alt="Foto Profile" width={ profileImgSize } height={ profileImgSize } />
                    <p>Calvin</p>
                </a>
                <a href={ paths.apps }>
                    <CgMenuGridO className="menu-icons" />
                </a>
                <a href={ paths.messenger }>
                    <FaFacebookMessenger className="menu-icons" />
                </a>
                <a href={ paths.notifications }>
                    <RiNotification2Fill className="menu-icons" />
                </a>
                <a href={ paths.account }>
                    <MdExpandMore className="menu-icons" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;