"use client"
import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'


const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    
    <>
        <div className='flex justify-center gap-[20px]'>
              <div className='flex flex-col gap-[40px]'data-aos="fade-right">
                  <h1 className='text-[30px] font-bold'>About Me</h1>
                  <p className='w-[50vw]'>My interest and my passion for technology led me to pursuing a career in programming. So I joined a full-stack web development course at Toshconsultinc, where I learned how to build single page applications using HTML, CSS and JavaScript. Currently, I spend many hours every day staring at code while fixating on making responsive web apps.</p>
                  <p className='w-[50vw]'>The power of first impressions cannot be underestimated, and the gateway to capitalizing on them lies in exceptional website design. An outstanding website transcends mere aesthetics and extends its influence to encompass seamless functionality and user-friendly navigation.</p>
                  <p className='w-[50vw]'>Drawing upon my expertise as a seasoned programmer, I possess the unique ability to tackle intricate technical challenges while crafting websites that exude sleekness and visual allure. Moreover, my extensive knowledge of recognized technical standards is complemented by my proficiency in modern building practices, ensuring that every aspect of your website is finely tuned to perfection.</p>
              </div>
              <div className= 'h-[40vh]'data-aos="fade-left">
                  <img src="/myImage-removebg-preview.png" alt="" />
              </div>
        </div>
    </>
  )
}

export default About