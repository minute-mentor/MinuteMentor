
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import CalendarComp from './components/CalenderComp';
import { HashRouter,Route,Routes } from 'react-router-dom';
import EmpInfo from './components/EmpInfo';
import EmpList from './components/EmpList';
import AttList from './components/AttList';
import UserPage from './components/UserPage';
import Teso from './components/Teso';
import AdminPage from './components/AdminPage';
import AdminToUser from './components/AdminToUser';
import AdminLogin from './components/AdminLogin';
import EditProfile from './components/EditProfile';






function App() {
  return (
    <div style={{overflowX:"hidden"}}>
      <HashRouter>
      
      <Routes>
        <Route path="/" element={<div><NavBar/><Login/><About/><Contact/></div>}/>
        <Route path="/admin-home" element={<div><AdminPage/></div>}/>
        <Route path="/admin-user/:uname" element={<AdminToUser/>}></Route>
        <Route path="/admin-login" element={<div><NavBar/><AdminLogin/></div>}></Route>
        <Route path="/m-home" element={<div><NavBar/><Login/><About/><Contact/></div>}/>
        <Route path="/m-about" element={<div><NavBar/><About/></div>}/>
        <Route path="/m-contact" element={<div><NavBar/><Contact/></div>}/>
        <Route path="/sign-emp" element={<div><NavBar/><SignUp/><About/><Contact/></div>}/>
        <Route path="/m-panel/:uname" element={<div><UserPage/></div>}/>
        <Route path="/m-edit/:id" element={<div><EditProfile/></div>}/>

        <Route path="/m-teso/:hope" element={<div><Teso/></div>}/>
        
      </Routes>
    </HashRouter>
      
      
      
      
      
      


      
      
      




     
      {/* 
      
      

      
      <HashRouter>
      <HashRouter>
      
      <Routes>
        <Route path="/" element={<div><NavBar/><Login/><About/><Contact/></div>}/>
        <Route path="/m-home" element={<div><NavBar/><Login/><About/><Contact/></div>}/>
        <Route path="/m-about" element={<div><NavBar/><About/></div>}/>
        <Route path="/m-contact" element={<div><NavBar/><Contact/></div>}/>
        <Route path="/sign-emp" element={<div><NavBar/><SignUp/><About/><Contact/></div>}/>
        <Route path="/m-panel/:uname" element={<div><UserPage/></div>}/>
        <Route path="/m-teso/:hope" element={<div><Teso/></div>}/>
      </Routes>
    </HashRouter>
      
        <Routes>
          <Route path="/" element={<div><NavBar/><Login/><About/><Contact/></div>}/>
          <Route path="/m-home" element={<div><NavBar/><Login/><About/><Contact/></div>}/>
          <Route path="/m-about" element={<div><NavBar/><About/></div>}/>
          <Route path="/m-contact" element={<div><NavBar/><Contact/></div>}/>
          <Route path="/sign-emp" element={<div><NavBar/><SignUp/><About/><Contact/></div>}/>
          <Route path="/m-panel" element={<div><CalendarComp/><EmpInfo/><EmpList/><AttList/></div>}/>
        </Routes>
      </HashRouter>



      
      
      
      
      
      
      
      
      
      
      
      whenClicked is a property not an event, per se
      
        <NavBar/>
 <Login/>
 <About/>
      <Contact/>
     
      
      <SignUp/>
      
      <AttList/>
       
       */}
     
     
      
     
      
    </div>
  );
}

export default App;
