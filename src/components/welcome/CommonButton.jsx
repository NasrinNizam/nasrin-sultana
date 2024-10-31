import React from 'react'
import { Link } from 'react-router-dom'

export const CommonButton = ({show , title, page, color}) => {
  return (
    <>
       <Link to={page} className={`py-[10px] px-5 text-[16px] ${color} font-roboto font-medium bg-black ${show} rounded-[5px] `}>
          {title}
       </Link>
    </>
  )
}
