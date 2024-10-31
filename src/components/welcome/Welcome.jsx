import React from 'react'
import './welcome.css'
import { CommonButton } from './CommonButton'
import { PiMouseSimpleLight } from "react-icons/pi";
import { MdKeyboardArrowDown  } from "react-icons/md";
import { SocialButton } from '../social/SocialButton';
import { FaFacebook, FaWhatsapp , FaGithub , FaLinkedin  } from "react-icons/fa";

export const Welcome = () => {
  return (
    <section className='greet'>
      <div className="container relative">
        <div className="flex justify-between items-start">
          <div className="text">
            <CommonButton show='bg-opacity-10' title='Welcome' />
            <h1>I am <span>Nasrin Sultana</span></h1>
            <div className="flex items-center gap-[10px]">
              <div className="line"></div>
              <h2 className='lg:text-[34px] font-medium font-roboto lg:leading-[45px] '>React Developer</h2>
            </div>
            <p className="lg:text-[16px] font-roboto font-normal leading-5 lg:w-[620px] mt-[15px] mb-[50px] ">I’m a dedicated React developer committed to building dynamic, user-friendly web applications that prioritize innovation and deliver exceptional quality.</p>
            <CommonButton title='Get in Touch' color='text-white' />
            <div className="w-[30px] ml-2 mt-[160px] hidden lg:block">
              <PiMouseSimpleLight size={20} className='mx-auto' />
              <MdKeyboardArrowDown className='mx-auto' />
            </div>
          </div>
          <div className="image">
            <img src="/images/image.png" alt="nasrin" />
          </div>
        </div>
        <div className="absolute right-3 top-[40px] flex flex-col justify-center items-center gap-2 ">
          <div className="w-[2px] h-[56px] bg-black "></div>
          <div className='flex flex-col justify-center gap-1'>
            <SocialButton icons={<FaFacebook size={20} />} path='https://www.facebook.com/profile.php?id=61557964826146' />
            <SocialButton icons={<FaLinkedin size={20}  />} path='https://www.facebook.com/profile.php?id=61557964826146' />
            <SocialButton icons={<FaWhatsapp size={20}  />} path='https://www.facebook.com/profile.php?id=61557964826146' />
            <SocialButton icons={<FaGithub size={20}  />} path='https://github.com/NasrinNizam' />
          </div>
        </div>
      </div>
    </section>
  )
}
