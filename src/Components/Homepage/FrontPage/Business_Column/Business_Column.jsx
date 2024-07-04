import React from 'react'
import './Business_Column.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'react-bootstrap'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
function Business_Column() {
  const[ BusinessData,setBusinessData] = useState([])
  const [GameData,setGameData]=useState([])
  const fetchData = async (category,setData, count) =>{
    try{
      const response= await axios.get("https://newsapi.org/v2/top-headlines",{
        params:{
          category:category,
          country:"us",
          apiKey:"300ad6828e164a278c705ebec7cbbfc3"
        }
      })
      setData(response.data.articles.slice(0,count));
    }catch(error){
      console.log("error while fetching the data",error)
    }
  }
  useEffect(()=>{
    fetchData("business",setBusinessData,1)
    fetchData("sports",setGameData,2)
  },[])
  return (
    <Container>
      <div className="stories-post-wrap">
      {BusinessData.length === 0 ? (
          <div className="stories-post  border-b border-gray-300 ">
          <div className="stories-post-thumb pt-3 pb-3">
           <Skeleton height={150}/>
          </div>
          <div className="stories-post-content">
            <Link to= "/Business"  className="post-tag  "><Skeleton/></Link>
            <h5 className="post-title pt-3">
              <a href="" className="post-details" target="_blank" rel="noopener noreferrer">
               <Skeleton count={1}/>
              </a>
            </h5>
            <div className="pusblishment pt-3 pb-3">
              <ul className="publisher">
                <li>
                  <FontAwesomeIcon icon={faCalendarAlt} /> <Skeleton count={1}/>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        
      ):(
        BusinessData.map((item,index)=>{
          return(
            <div className="stories-post  border-b border-gray-300 " key={index}>
            <div className="stories-post-thumb pt-3 pb-3">
              <img src={item.urlToImage || "https://placehold.co/800x400" } />
            </div>
            <div className="stories-post-content">
              <Link to= "/Business"  className="post-tag  ">Business</Link>
              <h5 className="post-title pt-3">
                <a href={item.url} className="post-details" target="_blank" rel="noopener noreferrer">
                  {item.title ? item.title.substring(0,50):"No any title available"}
                </a>
              </h5>
              <div className="pusblishment pt-3 pb-3">
                <ul className="publisher">
                  <li>
                    <FontAwesomeIcon icon={faCalendarAlt} /> {new Date(item.publishedAt).toLocaleDateString()
                    }
                  </li>
                </ul>
              </div>
            </div>
          </div>
          )
        
        })
      )}
      <div/>
   {
GameData.length===0 ?(
  <div className="stories-post-content pt-3">
  <Link to= "/Sports"  className="post-tag"><Skeleton count={1}/></Link>
  <h5 className="post-title pt-3">
    <a href="" className="post-details" target="_blank" rel="noopener noreferrer">
    <Skeleton count={1}/>
    </a>
  </h5>
  <div className="pusblishment pt-3 ">
    <ul className="publisher">
      <li>
        <FontAwesomeIcon icon={faCalendarAlt} />  <Skeleton count={1}/>
      </li>
    </ul>
  </div>
</div>
):(
  GameData.map((item,index)=>{
    return(
      <div className="stories-post-content pt-3" key={index}>
      <Link to= "/Sports"  className="post-tag">Sports</Link>
      <h5 className="post-title pt-3">
        <a href={item.url} className="post-details" target="_blank" rel="noopener noreferrer">
          {item.title ? item.title.substring(0,50):"No Title available"}
        </a>
      </h5>
      <div className="pusblishment pt-3 ">
        <ul className="publisher">
          <li>
            <FontAwesomeIcon icon={faCalendarAlt} /> {new Date(item.publishedAt).toLocaleDateString()}
          </li>
        </ul>
      </div>
    </div>
    )

  })

)
   }
    
  </div>
      
 
    </Container>
   
  )
}

export default Business_Column
