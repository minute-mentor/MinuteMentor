
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div style={{overflowX:"hidden"}}>
     
      <NavBar/>
      <Login/>
      <About/>

      <Contact/>
     
      
      
      
    </div>
  );
}

export default App;
