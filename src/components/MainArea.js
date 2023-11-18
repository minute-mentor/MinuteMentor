import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Calendar from 'react-calendar';
import Card from './Card';
import main from '../../src/images/main.png'
import profile_pic from '../../src/images/profile_pic.png'
import CalenderComp from './CalenderComp';
import AttList from './AttList';
import axios from "axios";

const MainContainer = styled.div`
  margin-left: 20%;
  padding: 20px;
  position: relative;
  background-image: url('${main}');
  background-size: cover;
`;

const TimeDisplay = styled.div`
  position: absolute;
  top: 8px;
  right: 20px;
  padding: 10px;
  font-size: 30px;
`;

const GreetingDisplay = styled.div`
  position: absolute;
  top: 8px;
  left: 20px;
  padding: 10px;
  font-size: 30px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const UserDataLine = styled.div`
  margin-bottom: 18px;

`;

const UserData = styled.div`
  margin-left: 20px;
  font-size: 20px;
  font-weight: 700;
`;

const CalendarContainer = styled.div`
  margin-top: 115px;
`;



export default function MainArea(props) 
{
   let uname = props.uname;
   const [currentTime, setCurrentTime] = useState(new Date());


   const [_id,setId] = useState();
    const [fname,setFname] = useState();
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();
    const [role,setRole] = useState();
    const [password,setPassword] = useState();
    const [dob,setDob] = useState();
    const [addr,setAddr] = useState();
    const [gender,setGender] = useState();
    //const [uname,setUname] = useState();

    useEffect(()=>{
      axios.get("https://minute-mentor.onrender.com/empRoute")
      .then((res)=>
      {

        for (let index = 0; index < res.data.length; index++) 
        {
            if(res.data[index].email===uname)
            {
                console.log("found it");
                setFname(res.data[index].fullname);
                //setEmail(res.data[index].email);
                setPhone(res.data[index].phone);
                setRole(res.data[index].role);
                setPassword(res.data[index].password);
                setDob(res.data[index].dob);
                setAddr(res.data[index].addr);
                setGender(res.data[index].gender);
                setId(res.data[index]._id); // this will only run once
                break; // exit the loop
            } 
        }
        
      }
        
      );
    },[]); 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const profilePic = process.env.PUBLIC_URL + '/profile_pic.png';

  const greeting = currentTime.getHours() < 12 ? 'Good Morning' : 'Good Evening';

  return (
    <MainContainer>
      
      <Card>
        <TimeDisplay>{currentTime.toLocaleTimeString()}</TimeDisplay>
        <GreetingDisplay>{greeting}, {fname}</GreetingDisplay>
      </Card>
      <Card>
        <ProfileContainer>
          <img src={profile_pic} alt="Profile" />
          <UserData>
            <UserDataLine>Employee ID: {_id}</UserDataLine>
            <UserDataLine>Name: {fname}</UserDataLine>
            <UserDataLine>Designation: {role}</UserDataLine>
            <UserDataLine>Phone: {phone}</UserDataLine>
            <UserDataLine>Email: {uname}</UserDataLine>
          </UserData>
        </ProfileContainer>
      </Card>
      <Card>
        <div class="row">
            <div class="col-lg-6 col-sm-12">
            <h2 class="text-white" style={{marginLeft:"28%"}}>Attendance Calender</h2>
              
                
                    <CalenderComp uname={uname}/>
                
            </div>
            <div class="col-lg-6 col-sm-12">
            <h2 class="text-white" style={{marginLeft:"20%"}}>Attendance Information</h2>
                <AttList uname={uname}/>

            </div>

        </div>
        
        
      </Card>
      
    </MainContainer>
  );
}


