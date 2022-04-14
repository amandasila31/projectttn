import React from 'react'
import tothenewlogo from '../../images/tothenewlogo.jpg'
import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import "./login.css";

	const Login=()=>{
		
		const[email,setEmail]=useState('')
	
		const[password,setPassword]=useState('')

		const loginUser =async(e)=>{
					e.preventDefault();
					const res= await fetch("/signin",{
						method:"POST",
						headers:{
							"Content-Type":"application/json"
						},
						body: JSON.stringify({
							email,password
						})
					});
				const data=res.json();
				if(res.status===400 || !data)
				{
					window.alert("invalid crenditals")
				}
				
				else{
					window.alert("login succesful")
					Navigate('/feed')
				}
		}
		const Navigate=useNavigate();
		
  return (
    <>
    
    <div className="container" id="container">
	<div className="overlay-container">
			<div className="overlay">
				<div className="overlay-panel overlay-right">
					<NavLink to="/signup"><img src={tothenewlogo} alt="TTN Logo"/> </NavLink> 
					<h4>Enter your details and Start <br/>
                                   your journey with us</h4><br/>
					<p className="dont">Don't Stop until you are proud</p>
					<br/>
					
					{/* <Signingoogle/>
					 */}
					 <button id="google-sign-in">Google Signin</button>
				</div>
			</div>
		</div>

		<div className="form-container log-in-container">
			<form method="POST">
				<h3>Login to Your Account</h3>
				<br/>
				 
				<input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="TTN Username" />
				<input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" /><br/>
				<section className="subs">
					<div className="remember">
					<label><input type="checkbox" name=""/>remember me</label>	
					</div>
					<div class="forgot">
						<a href="#">Forgot your password?</a>
					</div>
               			 </section>
                          <br/>
				<button id="sign-in"  onClick={loginUser}>Sign In</button>
			
			</form>
		</div>
		
	</div>
    </>
  )
}

export default Login