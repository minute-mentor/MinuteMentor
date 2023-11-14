import React from 'react'
import { useParams } from 'react-router-dom'

export default function Teso() 
{
    const {hope} = useParams();
  return (
    <div>
        <h1>{hope}</h1>
      
    </div>
  )
}
