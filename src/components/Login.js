import React from 'react'
import './Login.css'
import { useState } from 'react'
import {auth} from './firebase'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

function Login() {
  const [name,setName]=useState("")
  const [profilePic,setProfilePic]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch()

    const loginApp =(e)=>{
      e.preventDefault()
      auth.signInWithEmailAndPassword(email,password).then((authUser)=>{
        dispatch(login({
          email:authUser.user.email,
          uid:authUser.user.uid,
          displayName:authUser.user.displayName,
          profileUrl:authUser.user.photoURL,
        }))
      }).catch(error=>alert(error))
    }
    const register =()=>{
      if(!name){
        alert("Please Enter UserName")
      }
      auth.createUserWithEmailAndPassword(email,password)
      .then(authUser=>{
        authUser.user.updateProfile({
          displayName:name,
          photoURL:profilePic,
        }).then(()=>{
          dispatch(login({
            email:authUser.user.email,
            uid:authUser.user.uid,
            displayName:name,
            photoURL:profilePic,
          }))
        })
      }).catch(error=>alert(error))
    }
  return (
    <div className='login'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" alt="" />
        <form action="">
            <input type="text" placeholder='Full Name (required if registering)' value={name} onChange={e=>setName(e.target.value)} />
            <input type="text" placeholder='Profile pic Url (optional)' value={profilePic} onChange={e=>setProfilePic(e.target.value)} />
            <input type="email" placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
        <button type='submit' onClick={loginApp}>Sign In</button>
        </form>
        <p>Not a member?{' '}
        <span className='login__register' onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login