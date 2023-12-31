import React, { useState } from 'react';
import styled from 'styled-components';
import main from '../../src/images/main.png'
import { Link } from "react-router-dom";
import axios from "axios";
import moment from 'moment'

const SidebarContainer = styled.div`
    width: 20%;
    height: 100vh;
    background-image: url(${main});
    background-size: cover;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Title = styled.h1`
    color: #2F5061;
    text-align: center;
`;
    
const List = styled.ul`
    font-size: 1.2em;
    padding: 0;
`;
    
const ListItem = styled.li`
    color: #2F5061;
    margin-left: 20px;
    list-style-type: none;
    font-weight: 700;
    margin-bottom: 20px;
    transition: color 0.3s ease-in-out;
    &:hover {
        color: #fff;
        cursor: pointer;
    }
`;

const Hr = styled.hr`
    border-color: #2F5061;
    transition: border-color 0.3s ease-in-out;
`;

const Button = styled.button`
    color: #2F5061;
    background-color: transparent;
    // border: none;
    padding: 10px;
    font-size: 1.2em;
    font-weight: 700;
    transition: color 0.3s ease-in-out;
    &:hover {
        color: #fff;
        cursor: pointer;
    }
`;


export default function Sidebar(props) 
{
    let _id = props.id;
    let uname = props.uname;
    let lt = props.lt;
    
    const[stat,setstat]=useState();

    const [idTime,setIdTime] = useState();

    
    axios.get("https://minute-mentor.onrender.com/attendanceRoute")
    .then((res)=>{
        for (let index = 0; index < res.data.length; index++) 
        {
            if(res.data[index].email===uname&&res.data[index].DATE===moment().format('MMMM Do YYYY'))
            {
                setIdTime(res.data[index]._id);
                setstat(res.data[index].status);
            }
            
            
        }
    })





    const tcal = () =>
    {
        const duration2 = Math.floor((Date.now() - lt) / 1000);
        console.log(duration2);

        const data={_id:idTime,DATE:moment().format('MMMM Do YYYY'),status:stat,email:uname,duration:duration2 };
        axios.put("https://minute-mentor.onrender.com/attendanceRoute/update-att/"+idTime,data)
        .then((res)=>{
            if(res.status === 200)
            {
                console.log("duration updated")

            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));



    }
    
  return (
    <SidebarContainer>
            <div>
                <Title>MINUTE<br />MENTOR</Title>
                <Hr />
                <List>
                    <ListItem><Link to={"/m-panel/"+uname}  style={{textDecoration:"none",width:"100%"}}>Dashboard</Link></ListItem>
                    <Hr />
                    <ListItem><Link to={"/m-edit/"+_id}  style={{textDecoration:"none",width:"100%"}}>Edit Profile</Link></ListItem>
                    <Hr />
                   
                    
                </List>
            </div>
            
            <Link to="/"  style={{textDecoration:"none",width:"100%"}}><Button onClick={tcal} style={{width:"94%",margin:"8px"}}>Sign Out</Button></Link>
        </SidebarContainer>
  )
}
