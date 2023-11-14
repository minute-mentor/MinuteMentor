import React from 'react'
import styled from 'styled-components';
import main from '../../src/images/main.png'
import { Link } from "react-router-dom";
import Card from './Card';

import profile_pic from '../../src/images/profile_pic.png'
import CalenderComp from './CalenderComp';
import AttList from './AttList';
import EmpList from './EmpList';



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



export default function AdminPage() 
{
  return (
    <>
    <SidebarContainer>
            <div>
                <Title>MINUTE<br />MENTOR</Title>
                <Hr />
                <List>
                    <ListItem>Dashboard</ListItem>
                    <Hr />
                    <ListItem>Leave Requests</ListItem>
                    <Hr />
                </List>
            </div>
            
            <Link to="/" className="text-light"><Button style={{width:"94%",margin:"8px"}}>Sign Out</Button></Link>
        </SidebarContainer>

        <MainContainer>
      
      
      <Card>
        <ProfileContainer>
          <img src={profile_pic} alt="Profile" />
          <UserData>
            <UserDataLine>Employee ID: Admin48</UserDataLine>
            <UserDataLine>Name: Minute Mentor</UserDataLine>
            <UserDataLine>Designation: Administrator</UserDataLine>
            <UserDataLine>Phone: +91 9874585985</UserDataLine>
            <UserDataLine>Email: minutementor48@gmail.com</UserDataLine>
          </UserData>
        </ProfileContainer>
      </Card>
      <Card>
        <center>
        <h2>List of all Employee</h2>
        <EmpList/>

        </center>
        
      </Card>
      
      
    </MainContainer>



    </>
  )
}
