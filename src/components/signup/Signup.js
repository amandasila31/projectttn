import React from 'react'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'; 
import { NavLink } from 'react-router-dom';
import tothenewlogo from '../../images/tothenewlogo.jpg'
import "./signup.css";
const Signup = () => {
    const Navigate=useNavigate();
    const[user,setUser]=useState(
        {
            name:"",email:"",password:"",phone:""
        }); 
        let name,value;
        const changeData=(e)=>{
            console.log(e)
                name=e.target.name;
                value=e.target.value;
                setUser({...user,[name]:value});

        }
        const postdata=async (e)=>{
                e.preventDefault();
                const {name,email,password,phone}=user;
                const res= await fetch("/register",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                        name,email,password,phone
                    })
                });
                const data=await res.json();
              
                if(data.status === 422 || !data)
                {
                    window.alert("invalid");
                   
                }
                
                else{
                    window.alert("succssful")
                    Navigate("/");
                }
        }
    

  return (
    <>
    
    <div className="container" id="container row">
    <div className="overlay-container col-md-6 col-sm-12">
        <div className="overlay">
            <div className="overlay-panel overlay-right">
            <NavLink to="/"><img src={tothenewlogo} alt="TTN Logo"/> </NavLink>
                <h4>Enter your details and Start <br/>
                    your journey with us</h4><br/>
                <p className="dont">Don't Stop until you are proud</p><br/><br/>
                <NavLink  to="/">  <button>Sign in</button> </NavLink> 
            </div>
        </div>
    </div>
            <div className="form-container log-in-container col-md-6 col-sm-12">
        <form method="POST">
            <h4 className='overview'>Get Register and make your future bright</h4>
            <br/>
            <input type="text" name="name" value={user.name} onChange={changeData}  placeholder="Enter your Fullname" />
            
            <input type="email" name="email" value={user.email} onChange={changeData} autoComplete='off' placeholder="Enter your Email" />
            <input type="text"  name="phone" value={user.phone} onChange={changeData}autoComplete='off' placeholder="Enter your Contact Number" />
            <input type="password" name="password" value={user.password} onChange={changeData} autoComplete='off' placeholder="Enter Password" />
           
            
            
            <br/>
            <button id="sign-in" name="signup" value="register" onClick={postdata}>Sign Up</button>
        </form>
    </div>
   
</div>
            
    </>
  )
}

export default Signup