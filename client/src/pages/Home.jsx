import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <ul>
        <Link to='/login'>
            <li className='text-blue-700 hover:underline'>log in</li>
        </Link>
        <Link to='/about'>
            <li className='text-blue-700 hover:underline'>about</li>
        </Link>
        <Link to='/registration_verification'>
            <li className='text-blue-700 hover:underline'>registration</li>
        </Link>
      </ul>
    </div>
  )
}
