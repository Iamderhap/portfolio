// "use client"
import React from 'react'
// import React, { useEffect } from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
// import gsap from'gsap';
// import Image from 'next/image'

const Hero = () => {
  // useEffect(() => {
  //   const titles = gsap.utils.toArray('.text-wrapper p');
  //   const tl = gsap.timeline({ repeat: -1 }); 

  //   titles.forEach(title => {
  //     const text = title.textContent;
  //     const splitText = text.split("").map(char =>`<span>${char}</span>`).join("");
  //     title.innerHTML = splitText;

  //     const chars = title.querySelectorAll('span');

  //     tl.from(chars, {
  //       opacity: 0,
  //       y: 80,
  //       rotateX: -90,
  //       stagger: 0.02,
  //     }, "<")
  //     .to(chars, {
  //       opacity: 0,
  //       y: -80,
  //       rotateX: 90,
  //       stagger: 0.02,
  //     }, "<1");
  //   });
  // }, []);
  return (
    <>
         
        <div className=' flex flex-col items-center lg:gap-[20px] lg:bg-black h-[50vh]'>
              <h1 className='text-white w-[50vw] font-bold tracking-widest text-[35px]'>I'm Happiness Ajayi</h1>
                    <p className='lg:w-[50vw] text-[#bfbebe]'>A front-end web developer, i spend my days (and often night) writing lines of codes and building projects. I'm ready to take on an entry level role as a frontend web developer. I really enjoy working with UI and building Responsive Web Designs. Contact Me</p>
                  <p className='lg:w-[50vw] text-[#bfbebe]'>When I'm not crafting beautiful web experiences, you can find me reading Articles or swaying to the rhythm of Pop Music & Jazz, losing myself in the captivating flow of melodies.</p>
              <div className='flex flex-col gap-[5px]'>
                  <p className='text-[#bfbebe] flex items-center w-[50vw] gap-[10px]'>See More About me<HiArrowNarrowRight /></p>
                  <button className='text-[#bfbebe] border-4 px-3 py-3 w-[10vw] '>View my CV</button>
              </div>
        </div>
    </>
  )
}

export default Hero