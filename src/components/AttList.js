import React from 'react'
import axios from "axios";
import {useState,useEffect} from "react";
import CalendarComp from './CalenderComp';
import AttListRow from './AttListRow';


export default function AttList(props) 
{
  let uname = props.uname;

  const [myData,setMyData] = useState([]);
  const [newData,setNewData] = useState([])


  useEffect(()=>{
    axios.get("https://minute-mentor.onrender.com/attendanceRoute")
    .then((res)=>
    {
      let arrayOfMrs = [];
      setMyData(res.data);
      console.log(res.data[0].email);
      for (let index = 0; index < res.data.length; index++) 
        {
            if(res.data[index].email===uname)
            {
              arrayOfMrs.push(res.data[index]);
             
                
            } 
        }

        setNewData(arrayOfMrs);

    }
      
      
    );
  },[]);

  const ListItems = () =>{
    return newData.map((val,ind)=>{
      return <AttListRow obj={val}/>
    })
  }



  return (
    <div class="conatiner ">
        <table style={{maxWidth:"100%",margin:"50px auto"}} className="table align-middle mb-0 bg-white shadow-lg">
            <thead class="bg-light">
                <tr>
                <th class="text-center"><h2>Date</h2></th>
                <th class="text-center"><h2>Status</h2></th>
                <th class="text-center">Duration<br/> hour : minute : seconds</th>
                </tr>

            </thead>
            <tbody>
                {ListItems()}

            </tbody>

        </table>
    </div>
  )
}
