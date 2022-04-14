
import './App.css';
import Feed from './components/Feed/Feed';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
 import Profile from './Profile';
 import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route exact path='/' element={ <Login />} />
      <Route path='/signup' element={ <Signup />} />
        <Route path='/feed' element={<Feed/>}/>
      <Route path='/feed/profile/:username' element={<Profile/>} />
    
        </Routes>
    </Router>
    </div>
  );
}

export default App;
