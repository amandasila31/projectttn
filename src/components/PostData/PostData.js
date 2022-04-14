import "./PostData.css";
import person1 from "../../assets/person/1.jpeg";
import person2 from "../../assets/person/2.jpeg";
import person3 from "../../assets/person/3.jpeg";
import person4 from "../../assets/person/4.jpeg";
import person5 from "../../assets/person/5.jpeg";
import person6 from "../../assets/person/6.jpeg";
import likeIcon from "../../assets/like.png";
import heart from "../../assets/heart.png";
import threedot from "../../assets/three-dots.svg";

import { Users } from "../../dummyData";
import { useState } from "react";



import React from 'react'

export default function PostData({post}) {
    const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="posttt">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" />
            <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
          <img src={threedot} alt="" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> {post?.desc}</span><br/>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postButtom">
          <div className="postButtomLeft">
            <img className="likeIcon" src={likeIcon} onClick={likeHandler} alt="" />
            <img className="heartIcon" src={heart} onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postButtomLeft">
             <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}
