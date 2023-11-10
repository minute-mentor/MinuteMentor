import React from 'react'
import Axios from "axios";
import { useEffect, useState } from "react";





import EmpListRow from './EmpListRow';

export default function EmpList() 
{
    const[arr,setArr] = useState([]);

    useEffect(()=>{
      Axios.get("http://localhost:4000/empRoute/")
      .then((res)=>{
        if(res.status === 200)
        {
          setArr(res.data);
          console.log(res.data);
        }
        else{
          Promise.reject();
        }
      })
      .catch((err)=>alert(err));
    },[])

    const ListItems = () =>{
        return arr.map((val,ind)=>{
          return <EmpListRow obj={val}/>
        })
      }
    


  return (

    <div class="conatiner ">
        <table style={{maxWidth:"60%",margin:"50px auto"}} className="table table-bordered table-striped table-success m-4 shadow-lg">
            <thead>
                <tr>
                <th class="text-center">Name</th>
                <th class="text-center">Designation</th>
                <th class="text-center">Email</th>
                <th class="text-center">Phone </th>
                <th class="text-center">Gender </th>
                <th class="text-center">Action </th>
                </tr>

            </thead>
            <tbody>
                {ListItems()}

            </tbody>

        </table>
    </div>
    
  )
}
