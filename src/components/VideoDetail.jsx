import React, { useState, useEffect} from 'react'
import ReactPlayer from 'react-player/youtube'
import { useParams } from 'react-router-dom'
import {fetchDataFromApi } from '../utils/api'
import loading from '../assets/loading.gif'
import VideoCard from './VideoCard'
import {BiLike} from 'react-icons/bi'
 
const VideoDetail = () => {

    const {videoId}= useParams()

const [video,setVideo]=useState(null)
 const [relatedVideos,setRelatedVideos]=useState([])
 
useEffect(()=>{
fetchVideoDetails()
fetchRelatedVideos()
},[])

const fetchVideoDetails =()=>{
    fetchDataFromApi(`video/details/?id=${videoId}`).then((res)=>{
 // console.log(res)
 setVideo(res)
    })
}

const fetchRelatedVideos =()=>{
    fetchDataFromApi(`video/related-contents/?id=${videoId}`).then((res)=>{
        console.log(res)
        setRelatedVideos(res.contents)
    })
}


  return (
    <div className='d-flex justify-content-between p-4 bg-dark text-light gap-5'>
      
       {
         !video && <img className='loading' src={loading} alt="" />  
       } 
       {
        video && 
        <>
        <div className='flex-grow-1'>
            <ReactPlayer 
             url={`https://www.youtube.com/watch?v=${videoId}`}
             controls
             playing={true}
             width= '100%'
             height={'70vh'} />
            <h3>{video.title} </h3>
            <div className='d-flex gap-2'>
                <img src={video.author.avatar[0].url} alt="" />
                <p> {video.author.title} </p>
                <p>{video.stats.subscribersText} </p>
                <p><BiLike/> {video.stats.likes} </p>
                <div>
                <p> {video.stats.views} Görüntüleme </p>
                <p>{video.publishedTimeText} </p>
                </div>
                
            </div>
        </div>
        </>
      }
    <div>
    {
    relatedVideos.map((video)=>{
      if (video.type !== 'video') return  false
       return <VideoCard video={video} />
      })
  }
    </div>
     </div>
  )
 } 

export default VideoDetail