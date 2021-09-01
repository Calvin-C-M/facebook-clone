import "../styles/Intro.css";
import { MdSchool } from "react-icons/md";
import { IoHomeSharp, IoLocationSharp } from "react-icons/io5";

const Intro = () => {
    return (
        <div className="intro">
            <h2>Intro</h2>
            <div className="details">
                <p><MdSchool /> Studies Teknik Informatika at <b>Universitas Padjadjaran</b></p>
                <p><MdSchool /> Went to sd Tunas Jakasampurna</p>
                <p><IoHomeSharp /> Lives in <b>Jakarta, Indonesia</b></p>
                <p><IoLocationSharp/> From <b>Bekasi</b></p>
            </div>
            <div className="edit-intro">
                <button className="edit-buttons">Edit details</button>
                <button className="edit-buttons">Add Hobbies</button>
                <button className="edit-buttons">Add Featured</button>
            </div>
        </div>
    );
}
 
export default Intro;