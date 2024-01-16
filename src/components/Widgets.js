import React, { useEffect, useState } from 'react'
import './Widgets.css'
import { FiberManualRecord, Info } from '@mui/icons-material'
import axios from 'axios';

function Widgets() {
    const [articles,setArticles]=useState([])
    const [error,setError]=useState()

    useEffect(()=>{ 
        axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=cb455ed9255443d6bf2ed824b31215fd').then(res=>setArticles(res.data.articles)).catch(err=>setError("Some error occured while fetching data"))
     },[] )
    

    const widgetsNews=(heading,desc)=>{
        return(
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecord/>
                </div>
                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        )
    }
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <Info/>
        </div>
        <h4>{error?error:""}</h4>
        {articles && articles.slice(0,4).map(element=>widgetsNews(element.title,element.description))}
    </div>
  )
}

export default Widgets