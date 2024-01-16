import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

function Sidebar() {

    const user = useSelector(selectUser)

    const RecentItem=(topic)=>{
        return(
            <div className='sidebar__recent'>
                <span className='sidebar__hash'>#</span>
                <p>{topic}</p>
            </div>
        )
    }
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1454117096348-e4abbeba002c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <Avatar src={user.photoURL} className='sidebar__avatar'>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Profile views</p>
                <p className="sidebar__statNumber">3218</p>
            </div>
            <div className="sidebar__stat">
                <p>Post views</p>
                <p className="sidebar__statNumber">10321</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {RecentItem("WebDeveloper")}
            {RecentItem("ReactJs")}      
            {RecentItem("Design")}      
            {RecentItem("SoftwareEngineer")}      
            {RecentItem("WebDesign")}      
        </div>
    </div>
  )
}

export default Sidebar