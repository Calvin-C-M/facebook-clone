import "../styles/Photos.css";
import photo from "../img/profpic.jpg";

const Photos = () => {
    const photoSize = {
        width: 130,
        height: 130,
    }
    return (
        <div className="photos">
            <div className="header">
                <h2>Photos</h2>
                <a href="#">See All Photos</a>
            </div>
            <div className="photos-grid">
                <div className="top spacing">
                    <div className="the-photos"><img src={photo} width={photoSize.width} height={photoSize.height} /></div>
                    <div className="the-photos"><img src={photo} width={photoSize.width} height={photoSize.height} /></div>
                    <div className="the-photos"><img src={photo} width={photoSize.width} height={photoSize.height} /></div>
                </div>
                <div className="mid spacing">
                    <div className="the-photos"><img src={photo} width={photoSize.width} height={photoSize.height} /></div>
                    <div className="the-photos"><img src={photo} width={photoSize.width} height={photoSize.height} /></div>
                    <div className="the-photos"><img src={photo} width={photoSize.width} height={photoSize.height} /></div>
                </div>
                <div className="bot spacing">
                    <div className="the-photos"><img src={photo} width={photoSize.width} height={photoSize.height} /></div>
                    <div className="the-photos"><img src={photo} width={photoSize.width} height={photoSize.height} /></div>
                    <div className="the-photos"><img src={photo} width={photoSize.width} height={photoSize.height} /></div>
                </div>
            </div>
        </div>
    );
}
 
export default Photos;