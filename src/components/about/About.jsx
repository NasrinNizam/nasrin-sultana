import React from 'react'
import './about.css'
import { CommonHead } from '../CommonHead'
import { CommonText } from '../CommonText'

export const About = () => {
  return (
    <section className='about'>
        <div className="container">
          <CommonHead Heading='About' />
          <div className="flex justify-start items-start  ">
            <div className="lg:mt-[80px]">
              <CommonText size='size-[24px]'/>
            </div>
            <p className='text-black mt-[62px] leading-[38px] font-roboto font-normal text-[24px]'>I’m a passionate <span className='text-[36px] font-bold '>React developer</span> with a strong focus on building dynamic, user-centric web applications. With hands-on experience in creating efficient and innovative solutions, I specialize in crafting responsive interfaces, integrating cutting-edge features, and optimizing user experiences. I thrive in both collaborative and independent environments, constantly pushing the boundaries of web technologies. Beyond coding, I’m always eager to learn, adapt, and contribute to meaningful projects that make a difference. When I’m not coding, you’ll likely find me exploring the latest tech trends or working on open-source projects.</p>
          </div>
          <div className="w-[900px] h-[500px] mx-auto mt-[26px] mb-[200px] ">
            <iframe className='h-full w-full ' src="/images/video.mp4" frameborder="0"></iframe>
          </div>
        </div>
    </section>
  )
}
