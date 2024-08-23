"use client"
import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState ("")
  const [email, setEmail] = useState ("")
  const [message, setMessage] = useState ("")

  async function fetchApi(e){
    try {
      const baseurl = "https://forms-io.onrender.com/submit-form/c2c061a8-7fbe-48d9-b39a-20c5d25d7554"
      const response = await fetch (baseurl,{
        method: "POST",
        headers: {"content-type" : "application/json"},
        body:JSON.stringify({name, email, message})
      })
      .then((res)=>(res.json))
      if(response){
        alert("Sent!")
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
        <div className='flex flex-col items-center py-[150px]'>
            <div className='flex flex-col'>
                <h1 className='font-bold text-[35px]'>Contact.</h1>
                <p>Get in touch or shoot me an email directly on <a href="mailto:Happiness9979@gmail.com" className='text-[25px] font-bold'>Happiness9979@gmail.com</a></p>

                <form className='flex flex-col gap-[20px]'>
                    <input onChange={(e)=>setName(e.target.value)} className='w-[50vw] py-[20px]' type="text" name="" id="" placeholder='Name'/>
                    <input onChange={(e)=>setEmail(e.target.value)} className='w-[50vw] py-[20px]' type="email" name="" id="" placeholder='Email'/>
                    <textarea onChange={(e)=>setMessage(e.target.value)} className='' name="" id="" placeholder='Message'></textarea>

                    <button>Submit</button>
                </form>
            </div>
            
        </div>
    </>
  )
}

export default Contact