"use client"
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <div className='grid lg:grid-cols-12 mt-8 md:mt-12 w-full h-[30rem]' >
        <div className= 'm-1 mt-8 lg:col-span-7 ' >
            <h1 className='
            font-bold text-3xl md:text-5xl leading-tight text-zinc-50 max-w-3xl
            ' >Trust me, I'm a 
            <span className='text-cyan-500' > Web Developer</span>
            </h1>
            <p className='mt-4 text-md text-zinc-400' >
            Meet Adesh Rai, a skilled web developer and a Diploma in Computer Engineering student, passionate about building innovative web solutions.
            </p>
            <div>
            <p className='text-zinc-400 text-xl mt-4' >Reach out to me</p>
            <ul className='flex gap-4 my-4' >
                <li>
                    <a className='text-4xl hover:text-cyan-500'
                    target='_blank'
                    href="https://github.com/Adeshraigit">
                    <FaGithub />
                    </a>
                </li>
                <li>
                    <a className='text-4xl hover:text-cyan-500'
                    target='_blank'
                    href="https://www.linkedin.com/in/adeshrai">
                    <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a className='text-4xl hover:text-cyan-500' 
                    target='_blank'
                    href="https://x.com/adeshrai707">
                    <FaTwitter />
                    </a>
                </li>
            </ul>
            </div>
        </div>
        <div className='lg:col-span-5 p-2 ' >
        <img className='rounded' src="https://avatars.githubusercontent.com/u/100000001?v=4" alt="img"  />
        </div>
    </div>
  )
}

export default Hero
