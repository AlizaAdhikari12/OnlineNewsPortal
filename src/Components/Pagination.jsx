import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; 


function Pagination({postsPerPage,totalPosts,paginate}) {
    const pageNumbers =[];
for(let i =1 ; i<=Math.ceil(totalPosts/postsPerPage);i++)
    {
        pageNumbers.push(i);
    }
  return (
    <>
    <nav>
        <ul className='pagination'>
            {pageNumbers.map((numbers,index)=>{
                return(
                <li key={index} className='page-item'>
                    <Link to="#"
                    onClick={()=>{paginate(numbers)}} className='page-link'>
                    {numbers}</Link>
                </li>
            )})}
        </ul>
    </nav>
    </>
  )
}

export default Pagination