import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Welcome } from './welcome/Welcome'
import { About } from './about/About'

export const Home = () => {
  return (
    <div className='w-full h-full bg-[#F8F8F8]'>
        <Navbar />
        <Welcome />
        <About />
    </div>
  )
}
