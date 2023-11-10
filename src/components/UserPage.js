import React from 'react';
import Sidebar from './Sidebar';
import MainArea from './MainArea';
import { useParams } from 'react-router-dom'


const UserPage = () => {

  const {uname} = useParams();
  

  return (
    <div>
      <Sidebar uname={uname} />
      <MainArea uname={uname}/>
    </div>
  );
};

export default UserPage;