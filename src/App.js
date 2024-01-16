import React, { useEffect } from 'react'
import './App.css';
import Header from '../src/components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './components/firebase';
import Widgets from './components/Widgets';

function App() {

  const user=useSelector(selectUser)
  const dispatch=useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        // User is logged in
        dispatch(login({
          email:authUser.email,
          uid:authUser.uid,
          displayName:authUser.displayName,
          photoURL:authUser.profilePic,
        })) 
      }
      else{
        // User is logged out
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="app">
      <Header/>
      {!user?
      <Login/>: (
        <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;