import "../styles/Friends.css";
import photo from "../img/profpic.jpg";

const Friends = () => {
    const photoSize = {
        width: 130,
        height: 130
    }
    const name = "Calvin Montolalu"
    
    return (
        <div className="friends">
            <div className="header">
                <h2>Friends</h2>
                <a href="#">See All Friends</a>
            </div>
            <p className="total-friends">94 friends</p>
            <div className="friends-grid">
                <div className="top spacing">
                    <p><img src={photo} width={photoSize.width} height={photoSize.height} />{name}</p>
                    <p><img src={photo} width={photoSize.width} height={photoSize.height} />{name}</p>
                    <p><img src={photo} width={photoSize.width} height={photoSize.height} />{name}</p>
                </div>
                <div className="mid spacing">
                    <p><img src={photo} width={photoSize.width} height={photoSize.height} />{name}</p>
                    <p><img src={photo} width={photoSize.width} height={photoSize.height} />{name}</p>
                    <p><img src={photo} width={photoSize.width} height={photoSize.height} />{name}</p>
                </div>
                <div className="bot spacing">
                    <p><img src={photo} width={photoSize.width} height={photoSize.height} />{name}</p>
                    <p><img src={photo} width={photoSize.width} height={photoSize.height} />{name}</p>
                    <p><img src={photo} width={photoSize.width} height={photoSize.height} />{name}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Friends;