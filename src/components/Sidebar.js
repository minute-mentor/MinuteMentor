import React from 'react';
import styled from 'styled-components';
import main from '../../src/images/main.png'

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

const Sidebar = () => {
    return (
        <SidebarContainer>
            <div>
                <Title>MINUTE<br />MENTOR</Title>
                <Hr />
                <List>
                    <ListItem>Dashboard</ListItem>
                    <Hr />
                    <ListItem>Edit Profile</ListItem>
                    <Hr />
                    <ListItem>Private Files</ListItem>
                    <Hr />
                    <ListItem>TO-DO</ListItem>
                    <Hr />
                    <ListItem>Leave Requests</ListItem>
                    <Hr />
                </List>
            </div>
            <Button>Sign Out</Button>
        </SidebarContainer>
    );
};

export default Sidebar;
