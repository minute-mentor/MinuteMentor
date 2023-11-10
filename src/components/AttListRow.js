import React, { useEffect,useState } from 'react'


export default function AttListRow(props) 
{
    const [newTime,setNewTime] = useState();

    const {_id,status,DATE,username,duration} = props.obj;

    useEffect(()=>
    {
      let ms = duration * 1000;
      // Create a new Date object with the milliseconds value
      let date = new Date(ms);
      // Use the toISOString method to get the time in HH:mm:ss format
      let time = date.toISOString().slice(11, 19);
      // Return the time string
      setNewTime(time);
    },[]);

    


  return (
    <tr>

        <td>{DATE}</td>
        <td>{status}</td>
        <td>{newTime}</td>
        
    </tr>
  )
}
