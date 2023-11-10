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
    axios.get("http://localhost:4000/attendanceRoute")
    .then((res)=>
    {
      let arrayOfMrs = [];
      setMyData(res.data);
      console.log(res.data[0].username);
      for (let index = 0; index < res.data.length; index++) 
        {
            if(res.data[index].username===uname)
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
        <table style={{maxWidth:"100%",margin:"50px auto"}} className="table table-bordered table-striped table-info m-0 shadow-lg">
            <thead>
                <tr>
                <th class="text-center">Date</th>
                <th class="text-center">Status</th>
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
