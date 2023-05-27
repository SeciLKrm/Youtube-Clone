import React, { useContext } from 'react'
import LeftNav from './LeftNav'
import { Context } from '../context/contextApi'
import VideoCard from './VideoCard'




const Feed = () => {
  const {searchResult}= useContext(Context)

  return (
    <div className='d-flex bg-dark ' style={{minHeight: '70vh'}}>
    <LeftNav/>
    <div className='videos w-100'>
      {searchResult.map((video,index)=>{
        return(
          <VideoCard video={video} key={index}/>
        )
      })}
    </div>
        

    </div>
  )
}

export default Feed