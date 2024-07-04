import './Stories_Post_title.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'

function Stories_Post_Title() {
    const[GeneralData,setGeneralData] = useState([]);
    const fetchData = async (category,setData)=>{
        try{
            const response = await axios.get("https://newsapi.org/v2/top-headlines",{
                params:{
                    category:category,
                    country:"us",
                    apiKey:"300ad6828e164a278c705ebec7cbbfc3"
                }
            })
            setData(response.data.articles.slice(0,4));
        }
        catch(error){
            console.log("Error Fetching",error);
        }
    }
    useEffect(()=>{
        fetchData("general",setGeneralData)
    },[])
  return (
    <>
        <div className="headline-container">
      <div className="headline-container-title mb-2">
        <div className="headline-container-line"></div>
        <h2 className="title pt-4 pb-2">Top Stories</h2>
      </div>
      </div>
      {GeneralData.length===0 ?(
        Array.from({length:4}).map((_,index)=>
          <div className="stories_post_wrap" key ={index}>
        <div className="stories_post">       
          <div className="stories-post-content">
            <Link to= "/Business"  className="stories-post-tag"></Link>
            <h5 className="stories-post-title pt-3">
              <a href="" className="stories-post-details " target="_blank" rel="noopener noreferrer">
            <Skeleton width={190} height={'10%'}/>
              </a>
            </h5>
            <div className="pusblishment">
              <ul className="publisher">
                <li>
                  <FontAwesomeIcon icon={faCalendarAlt} className='mr-2 mt-3'/> 
                 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        )
      ):(GeneralData.map((item,index)=>(
        <div className="stories_post_wrap" key={index}>
        <div className="stories_post">
            <div className="stories_post_number">
                {index+1}
            </div>         
          <div className="stories-post-content">
            <Link to= "/Business"  className="stories-post-tag"></Link>
            <h5 className="stories-post-title pt-3">
              <a href={item.url} className="stories-post-details " target="_blank" rel="noopener noreferrer">
              {item.title ? item.title.substring(0,50):"No any title available"}
              </a>
            </h5>
            <div className="pusblishment">
              <ul className="publisher">
                <li>
                  <FontAwesomeIcon icon={faCalendarAlt} className='mr-2 mt-3'/> 
                  {new Date(item.publishedAt).toLocaleDateString()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      )))}
     
       
    </>
  )
}

export default Stories_Post_Title