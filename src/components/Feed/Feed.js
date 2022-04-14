import React from 'react'
import "./feed.css";

import Topbar from '../Topbar/Topbar';
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.png";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.png";
import pic5 from "../../images/pic5.jpg";
import pic6 from "../../images/pic6.png";
// import pic7 from "./images/pic7.jpg";
// import Post from './components/Post';
import PostData from '../PostData/PostData'
import AccFeed from '../AccFeed/AccFeed';
import { Posts } from "../../dummyData";
import Sidebar from '../Sidebar/Sidebar';
import search from "../../images/search.svg"

// const[state,setState]=useState()

export default function Feed() {
    return (
        <>
            <div className="feedbody">
                <div className="left-feed">
                   <AccFeed/>
                   <Sidebar/>
                </div>

                <div className="mid-feed">
            
                <Topbar/>
                {Posts.map((p) => (
          <PostData key={p.id} post={p} />
        ))}
               
                </div>

                <div className="right-feed">

                    <div className="feed-find-friend-container">
                        <div className="find-friend-header">
                            <div className="heading">
                                Contacts
                                <img src={search} />
                                </div>
                            
                        </div>
                        <div className="find-friend-body">
                            <div className="user-row">
                                <div className="user-info">
                                    <img src={pic1} />
                                    <span>Jason Bond</span>
                                </div>
                               

                            </div>

                            <div className="user-row">
                                <div className="user-info">
                                    <img src={pic2} />
                                    <span>Aman Dasila</span>
                                </div>
                              

                            </div>

                            <div className="user-row">
                                <div className="user-info">
                                    <img src={pic4} />
                                    <span>Agam Agrwal</span>
                                </div>
                                

                            </div>

                            <div className="user-row">
                                <div className="user-info">
                                    <img src={pic5} />
                                    <span>Akash Bhatt</span>
                                </div>
                              

                            </div>

                            <div className="user-row">
                                <div className="user-info">
                                    <img src={pic6} />
                                    <span>Deep Chatt</span>
                                </div>
                                

                            </div>
                            
                        </div>
                    </div>

                    <div className="feed-find-friend-container">
                        <div className="find-friend-header">
                            <div className="heading">Suggestion
                            <img src={search} /></div>
                            
                        </div>
                        <div className="find-friend-body">
                            <div className="user-row">
                                <div className="user-info">
                                    <img src={pic1} />
                                    <span>Jason Bond</span>
                                </div>
                                <button className='action-follow'>+Friend</button>

                            </div>

                            <div className="user-row">
                                <div className="user-info">
                                    <img src={pic2} />
                                    <span>Aman Dasila</span>
                                </div>
                                <button className='action-follow'>+Friend</button>

                            </div>

                            <div className="user-row">
                                <div className="user-info">
                                    <img src={pic3} />
                                    <span>Aditi Roy</span>
                                </div>
                                <button className='action-follow'>+Friend</button>

                            </div>

                            <div className="user-row">
                                <div className="user-info">
                                    <img src={pic4} />
                                    <span>Agam Agrwal</span>
                                </div>
                                <button className='action-follow'>+Friend</button>

                            </div>

                        
                           
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
