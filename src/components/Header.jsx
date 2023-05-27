import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import {HiOutlineBell} from 'react-icons/hi'
import { Link,useNavigate } from 'react-router-dom'

const Header = () => {
  const[query,setQuery]=useState('')
  const navigate =useNavigate()

  const handleSearch =()=>{
    if(!query) return;
     navigate(`/search-result/${query}`);

  }

 
  return (
    <header className='navbar bg-dark text-light'>
<Link to='/' className='text-decoration-none text-light'>
<h1> 
  <img src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png" alt=""
  style={{width :'100px'}} />
  Youtube
</h1>
</Link>

<div className='d-flex'>
  <input type="text" className='form-control' onChange={(e) =>setQuery(e.target.value)} />
  <button className='btn btn-secondary' onClick={handleSearch} ><BsSearch/></button>
</div>
<span className='pe-3 fs-3 '>
  <HiOutlineBell/>
</span>


    </header>
   )
}

export default Header