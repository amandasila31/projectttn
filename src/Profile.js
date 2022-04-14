import React from 'react'

import pic from "./images/pic.png";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.jpg";
import pic4 from "./images/pic4.png";
import pic5 from "./images/pic5.jpg";
import pic6 from "./images/pic6.png";
import pic7 from "./images/pic7.jpg";

import userbg from "./images/userbg.jpg";


export default function Profile() {
    return (
        <>
        <div className="all">
            <div className='wrapper'>
                <div className="cover">
                <img src={userbg} />
                </div>

                <div className="id-section">
                    <div className="circle">
                    <img src={pic} className="logo"/>
                    </div>
                    <div className="id">
                        <h1>Akash Bhatt</h1>
                    </div>
                </div>
                <div className="info">
                    <div className="info1">
                        <form action="">
                            <label for="fname">FastName</label><br />
                            <input type="text" id="fname" name="fname"></input><br /><br />
                            <label for="Designation">Designation</label><br />
                            <input type="text" id="Designation" name="Designation"></input><br /><br />
                            <label for="gender">Gender</label><br />
                            <input type="radio" name="gender" value="male" checked /> <i>Male</i>
                            <input type="radio" name="gender" value="female" /> <i>Female</i><br /><br />
                            <label for="city">City</label><br />
                            <input type="text" id="city" name="city"></input><br /><br />
                        </form>
                    </div>

                    <div className="info2">
                        <form action="">
                            <label for="lname">LastName</label><br />
                            <input type="text" id="lname" name="lname"></input><br /><br />
                            <label for="Mywebsite">Mywebsite</label><br />
                            <input type="text" id="Mywebsite" name="Mywebsite"></input><br /><br />
                            <label for="birthday">Birthday:</label><br />
                            <input type="date" id="birthday" name="birthday" /><br /><br />

                            <label for="select-beast">State:</label><br />
                            <select name="state" id="state" class="form-control">
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="btn">
                <button className='btn1'>Set</button>
                <button className='btn2'>Reset</button>
                </div>
               
            </div>



            <div className="find-friend-container">
                <div className="find-friend-header">
                    <div className="heading">Suggestion</div>
                    <div className="Search">
                        <input type="text" placeholder='Search a Friend'/>
                    </div>
                </div>
                <div className="find-friend-body">
                    <div className="user-row">
                        <div className="user-info">
                            <img src={pic1} />
                            <span>Jason Bond</span>
                        </div>
                        <button className='action-follow'>Follow</button>

                    </div>

                    <div className="user-row">
                        <div className="user-info">
                            <img src={pic2} />
                            <span>Aman Dasila</span>
                        </div>
                        <button className='action-follow'>Follow</button>

                    </div>

                    <div className="user-row">
                        <div className="user-info">
                            <img src={pic3} />
                            <span>Aditi Roy</span>
                        </div>
                        <button className='action-follow'>Follow</button>

                    </div>

                    <div className="user-row">
                        <div className="user-info">
                            <img src={pic4} />
                            <span>Agam Agrwal</span>
                        </div>
                        <button className='action-follow'>Follow</button>

                    </div>

                    <div className="user-row">
                        <div className="user-info">
                            <img src={pic5} />
                            <span>Akash Bhatt</span>
                        </div>
                        <button className='action-follow'>Follow</button>

                    </div>

                    <div className="user-row">
                        <div className="user-info">
                            <img src={pic6} />
                            <span>Deep Chatt</span>
                        </div>
                        <button className='action-follow'>Follow</button>

                    </div>
                    <div className="user-row">
                        <div className="user-info">
                            <img src={pic7} />
                            <span>Jason Bond</span>
                        </div>
                        <button className='action-follow'>Follow</button>

                    </div>
                </div>
            </div>

            </div>
        </>
    )
}
