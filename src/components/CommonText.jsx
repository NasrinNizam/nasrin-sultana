import React from 'react'

export const CommonText = ({text ,size}) => {
  return (
          <div className="flex items-center gap-[17px]">
            <div className="w-[108px] h-[2px] bg-black "></div>
            <p className='text-black font-roboto font-normal text-[16px] '>{text} </p>
          </div>
  )
}
