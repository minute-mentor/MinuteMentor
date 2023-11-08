import React from 'react'
import Axios from "axios";
import {useState,useEffect} from "react";
import CalendarComp from './CalenderComp';


export default function AttList() 
{

    const[newData,setNewData] = useState([]);
    const[arr,setArr] = useState([]);

    useEffect(()=>{
      Axios.get("http://localhost:4000/attendanceRoute")
      .then((res)=>{
        if(res.status === 200)
        {
          setArr(res.data);
          setNewData(res.data);
          console.log(res);
          
          
        }
        else{
          Promise.reject();
        }
      })
      .catch((err)=>alert(err));
    },[])



  return (
    <div>
        
      
    </div>
  )
}
