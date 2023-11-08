
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import CalendarComp from './components/CalenderComp';
import { HashRouter,Route,Routes } from 'react-router-dom';




function App() {
  return (
    <div style={{overflowX:"hidden"}}>
      <HashRouter>
      
        <Routes>
          <Route path="/" element={<div><NavBar/><Login/><About/><Contact/></div>}/>
          <Route path="/m-home" element={<div><NavBar/><Login/><About/><Contact/></div>}/>
          <Route path="/m-about" element={<div><NavBar/><About/></div>}/>
          <Route path="/m-contact" element={<div><NavBar/><Contact/></div>}/>
          <Route path="/sign-emp" element={<div><NavBar/><SignUp/><About/><Contact/></div>}/>
          <Route path="/m-panel" element={<CalendarComp/>}/>
        </Routes>
      </HashRouter>



     
      {/* whenClicked is a property not an event, per se
      
        <NavBar/>
 <Login/>
 <About/>
      <Contact/>
     
      
      <SignUp/>
      
      <AttList/>
       <CalendarComp/>
       */}
     
     
      
     
      
    </div>
  );
}

export default App;
