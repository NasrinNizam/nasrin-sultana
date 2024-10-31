import React from 'react'
import { Link } from 'react-router-dom'

export const SocialButton = ({icons , path}) => {
  return (
    <Link to={path} target='blank' className='w-10 h-10 bg-black bg-opacity-10 rounded-full flex justify-center items-center '>
        {icons}
    </Link>
  )
}
