import React from 'react'
import "./AccFeed.css";
import userbg from "../../images/userbg.jpg";
import pic from "../../images/pic.png";
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

export default function AccFeed() {
    const Navigate=useNavigate();
    const[userData,SetUserData]=useState({});
    const callAboutPage=async()=>{

        try{
              const res= await fetch('/userdetails',{
                  method:"GET",
                  headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                  },
                  credentials:"include"
              });
              const data= await res.json();
              console.log(data.name)
              console.log(data.email)
              SetUserData(data)
              if(!res.status===200)
              {
                  const error=new Error(res.error)
                  throw error
              }

        }
        catch (err)
        { 
            console.log(err)
            Navigate('/')

        }
  }
  useEffect(() => {
      callAboutPage();
  }, [])
  return (
    <div className='wrapperr'>
    <div className="coverr">
        <img src={userbg} />
    </div>

    <div className="id-sectionn">
        <div className="circlee">
            <NavLink to="profile">
            <img src={pic} className="logoo" />
            </NavLink>
        </div>
        <div className="ids">
            <h2>{userData.name}</h2>
            <h4>Newly Recruit at TTN</h4>
            <div className="pro-post">
                <div className="profile">
                    <h1>100</h1>
                    <h4>Profile View</h4>
                </div>
                <div className="post">
                    <h1>12</h1>
                    <h4>Post</h4>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}
