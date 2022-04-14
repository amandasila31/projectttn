import "./Topbar.css";
import PhotoLogo from "../../images/PhotoLogo.svg"
import AccLogo from "../../images/AccLogo.svg"

export default function Topbar() {

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <img src={AccLogo}/>
      </div>

      <div className="topbarCenter">
          <input type="text" placeholder=" Start a Post"/>
      </div>

      <div className="topbarRight" >
      
          <span><img src={PhotoLogo} /> Photo/Video</span>
      </div>
    </div>
  );
}