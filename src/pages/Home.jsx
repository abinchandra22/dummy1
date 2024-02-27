import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='bg-danger '>
     <Link className='btn' to={'/login'}>Login.</Link>
     <Link className='btn' to={'/register'}>Register</Link>

    </div>
  )
}

export default Home