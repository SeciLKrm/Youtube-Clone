import React from 'react'
import {useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utils/api'
import { useParams } from 'react-router-dom'
import LeftNav from './LeftNav'
import VideoCard from './VideoCard'

const SearchResult = () => {
const {query}= useParams()
const[result, setResult]= useState(null)

useEffect(()=>{
fetchDataFromApi(`search/?q=${query}`).then((res)=>{
   setResult(res.contents)
})
    },[])
console.log(result)
 if(!result) return 'Loading'
  return (
    <div className='d-flex bg-dark  '>
  <LeftNav/>
  <div className='d-flex flex-column w-100 px-4 '>
    {
        result.map((video)=>{
            if(video.type !== 'video') return false
          return  <VideoCard video={video}  />
        })
    }
  </div>
    </div>
  )
}

export default SearchResult