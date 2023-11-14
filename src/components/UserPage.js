import React, { useState ,useEffect} from 'react';
import Sidebar from './Sidebar';
import MainArea from './MainArea';
import { useParams } from 'react-router-dom'
import axios from "axios";


const UserPage = () => {

  const {uname} = useParams();
  const [_id,setID] = useState();

  const [loginTime,setloginTime] = useState();

  useEffect(()=>{
    axios.get("http://localhost:4000/empRoute")
    .then((res)=>
    {
      
      for (let index = 0; index < res.data.length; index++) 
      {
          if(res.data[index].email===uname)
          {
              setloginTime(Date.now())
              console.log("found it two");
              setID(res.data[index]._id);
              console.log(res.data[index]._id)// this will only run once
              break; // exit the loop
          } 
      }
      
    }
      
    );
  },[]);  
  

  return (
    <div>
      <Sidebar id={_id} uname={uname} lt={loginTime}/>
      <MainArea uname={uname}/>
    </div>
  );
};

export default UserPage;