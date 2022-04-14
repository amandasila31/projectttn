import "./Sidebar.css";

import { Users } from "../../dummyData";
import people from "../../images/people.svg"
import calendar from "../../images/calendar.svg"
import hash from "../../images/hash.svg"
import journal from "../../images/journal.svg"
import key from "../../images/key.svg"
import discord from "../../images/discord.svg"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItemHeadingggg">
            <img src="" className="sidebarIcon" />
            <span className="sidebarListItemHeadingggg">Feed</span>
          </li>
          <li className="sidebarListItem">
            <img src={hash} className="sidebarIcon" />
            <span className="sidebarListItemText">JavaScript </span>
          </li>
          <li className="sidebarListItem">
            <img src={calendar} className="sidebarIcon" />
            <span className="sidebarListItemText">App Development </span>
          </li>
          <li className="sidebarListItem">
            <img src={people} className="sidebarIcon" />
            <span className="sidebarListItemText">Feelance Developer</span>
          </li>
         
          
          <hr className="sidebarHr" />
          <li className="sidebarListItemHeadingggg">
            <img src="" className="sidebarIcon" />
            <span className="sidebarListItemHeadingggg">Groups</span>
          </li>
          <li className="sidebarListItem">
            <img src={hash} className="sidebarIcon" />
            <span className="sidebarListItemText">JavaScript </span>
          </li>
          <li className="sidebarListItem">
            <img src={calendar} className="sidebarIcon" />
            <span className="sidebarListItemText">App Development </span>
          </li>
          <li className="sidebarListItem">
            <img src={people} className="sidebarIcon" />
            <span className="sidebarListItemText">Feelance Developer</span>
          </li>
          
          <hr className="sidebarHr" />
          
          <li className="sidebarListItemHeadingggg">
            
            <span className="sidebarListItemHeadingggg">Subscription</span>
          </li>
          <li className="sidebarListItem">
            <img src={journal} className="sidebarIcon" />
            <span className="sidebarListItemText">E-learning Bridge</span>
          </li>
          <li className="sidebarListItem">
            <img src={discord} className="sidebarIcon" />
            <span className="sidebarListItemText">Clever Programer</span>
          </li>
          <li className="sidebarListItem">
          <img src={key} className="sidebarIcon" />
            <span className="sidebarListItemText">Learning with Mosh</span>
          </li>
        </ul>
        
        
      </div>
    </div>
  );
}