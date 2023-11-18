import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import Sidebar from './Sidebar';
import styled from 'styled-components';

import Calendar from 'react-calendar';
import Card from './Card';
import main from '../../src/images/main.png'
import EmpForm from "./EmpForm";


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

export default function EditProfile() 
{
    const {id} = useParams();
    const [uname,setUname] = useState();


    const [data,setData] = useState({_id:"",fullname:"",email:"",phone:"",role:"",password:"",dob:"",gender:"",addr:""});

    const [newData,setNewData]=useState([]);



    
    axios.get("https://minute-mentor.onrender.com/empRoute")
    .then((res)=>{
        for (let index = 0; index < res.data.length; index++) 
        {
            if(res.data[index]._id===id)
            {
                setUname(res.data[index].email);
            }
            
            
        }
    })


    useEffect(()=>{
        axios.get("https://minute-mentor.onrender.com/empRoute/update-emp/"+id)
        .then((res)=>{
            if(res.status === 200)
            {
                const {_id,fullname,email,phone,role,password,dob,gender,addr} = res.data;
                setData({_id,fullname,email,phone,role,password,dob,gender,addr});

            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[id])

    const getState = (childData)=>{
        setNewData(childData);

    }

    const handleSubmit=()=>{
        const data={_id:newData[0],fullname:newData[1],email:newData[2],phone:newData[3],role:newData[4],password:newData[5],dob:newData[6],gender:newData[7],addr:newData[8]};
        axios.put("https://minute-mentor.onrender.com/empRoute/update-emp/"+id,data)
        .then((res)=>{
            if(res.status === 200)
            {
                alert("Details Updated");

            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }

  return (
    <div>
        <Sidebar id={id} uname={uname}/>
        <MainContainer><Card>
            <form onSubmit={handleSubmit}>
                <EmpForm getState={getState} idValue={data._id} fullnameValue={data.fullname} emailValue={data.email} phoneValue={data.phone} roleValue={data.role} passwordValue={data.password} dobValue={data.dob} genderValue={data.gender} addrValue={data.addr}>
                    Update Details
                </EmpForm>

            </form>
                
    
        </Card></MainContainer>

    </div>
  )
}
