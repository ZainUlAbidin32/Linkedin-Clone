import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import "./Post.css"
import InputOption from './InputOption'
import { CommentOutlined, SendOutlined, ShareOutlined, ThumbUpAlt } from '@mui/icons-material'

const Post = forwardRef(({name,description,message,photoURL},ref) => {
  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photoURL}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <InputOption color="gray" title="Like" Icon={ThumbUpAlt}/>
            <InputOption color="gray" title="Comment" Icon={CommentOutlined}/>
            <InputOption color="gray" title="Share" Icon={ShareOutlined}/>
            <InputOption color="gray" title="Send" Icon={SendOutlined}/>
        </div>
    </div>
  )
}
)
export default Post