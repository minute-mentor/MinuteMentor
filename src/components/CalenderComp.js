import React,{useState,useEffect} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import moment from "moment";


export default function CalenderComp() 
{

  const [myData,setMyData] = useState([]);


  useEffect(()=>{
    axios.get("http://localhost:4000/attendanceRoute")
    .then((res)=>
      setMyData(res.data)
    );
  },[]);


  

  const hello =({ activeStartDate, date, view }) => 
  {

    for (let index = 0; index < myData.length; index++) 
    {
      if(myData[index].username==="emp2")
      {
          if(view === 'month' && moment(date).format("MMMM Do YYYY") === myData[index].DATE)
          {
              if(date.getDay()===0||date.getDay()===6)
              {
                  return <h4 class="m-4-1 bg-warning" style={{color:"black"}}>H</h4>
              }
              else
              {
                  return <h4 class="m-4-1 bg-success" style={{color:"black"}}>P</h4>

              }     
        
          }
         
      }
      else if(view === 'month' &&(date.getDay()===0||date.getDay()===6))
      {
          return <h4 class="m-4-1 bg-warning" style={{color:"black"}}>H</h4>
      }

  
    }

  }
  


  return (
    <div class="mx-auto shadow-lg p-3 mb-5 bg-body rounded mt-5" style={{borderRadius:"50px",width:"fit-content"}}>
      <Calendar tileContent={hello} />
    </div>
  )
}
