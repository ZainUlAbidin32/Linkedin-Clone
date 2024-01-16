import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import "./Feed.css"
import InputOption from './InputOption'
import Post from './Post'
import { db } from './firebase'
import {serverTimestamp} from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import FlipMove from 'react-flip-move'

function Feed() {
    const user=useSelector(selectUser)
    const [posts,setPosts]=useState([])
    const [input,setInput]=useState()

    useEffect(()=>{
        db.collection('posts').orderBy("timestamp","desc").onSnapshot((snapshot)=>
        setPosts(
            snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            }))
        )
        );
    },[]);

    const sendPost=(e)=>{
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message:input,
            photoUrl:user.photoURL || '',
            timestamp: serverTimestamp(),
        })
        setInput("")
    }

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <Create/>
                <form action="">
                <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
                <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption color="blue" Icon={Image} title="Photo"/>
                <InputOption color="yellow" Icon={Subscriptions} title="Video"/>
                <InputOption color="gray" Icon={EventNote} title="Event"/>
                <InputOption color="green" Icon={CalendarViewDay} title="Write Article"/>
            </div>
        </div>

        {/* {posts} */}
        <FlipMove>
        {posts.map(({id, data: {name,description,message,photoUrl}})=>(
            <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoUrl}
            />
            ))}
        </FlipMove>
    </div>
  )
}

export default Feed