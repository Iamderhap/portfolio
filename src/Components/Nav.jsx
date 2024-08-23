import React from 'react'
import Image from 'next/image'
const Nav = () => {
  return (
    <>
        <nav className='flex justify-between bg-black px-[70px]'>
         <Image className='img' src={'/icon.png'} width={50} height={300}/>  
              <ul className='flex text-white gap-[20px]'>
                  <a href="/About-us"><li>About</li></a>
                  <li>Project</li>
                  <li>Contact</li>
              </ul>
        </nav>
    </>
  )
}

export default Nav