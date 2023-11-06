
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/SignUp';


function App() {
  return (
    <div style={{overflowX:"hidden"}}>
     
      
      {/* whenClicked is a property not an event, per se.
      
      <Login/>
       */}
       <NavBar/>
      <SignUp/>
      <About/>

      <Contact/>
     
     
      
      
    </div>
  );
}

export default App;
