import React from 'react'
import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";





const Footer = () => {
  return (
    <div className='h-full py-8 border-t-2 border-neutral-600'>
    <div className='flex-row text-center space-y-5 mt-auto justify-center'>

    <div>
                <ul className='flex justify-between text-neutral-500 mx-8 text-sm'>
                    <Link href="/"><li className={`hover:text-white duration-300 drop-shadow-2xl hover:scale-105`}>Home</li></Link>
                    <Link href="/blog"><li className={`hover:text-white duration-300 drop-shadow-2xl hover:scale-105`}>Blog</li></Link>
                    <Link href="/about"><li className={`hover:text-white duration-300 drop-shadow-2xl hover:scale-105`}>About</li></Link>
                    <Link href="/contact"><li className={`hover:text-white duration-300 drop-shadow-2xl hover:scale-105`}>Contact</li></Link>

                </ul>
                
            </div>
            <div className=''>
                <ul className='flex justify-evenly text-neutral-300 text-3xl m-12'>

                    <Link href="https://twitter.com/NilamJtiSharma" target='blank'><li className={`hover:text-white duration-300 drop-shadow-2xl hover:scale-105`}><FaTwitter /></li></Link>
                    <Link href="https://www.linkedin.com/in/nilam-jyoti-sharma-2912681aa/" target='blank'><li className={`hover:text-white duration-300 drop-shadow-2xl hover:scale-105`}><FaLinkedin /></li></Link>
                    <Link href="https://github.com/nilamjyotisharma" target='blank'><li className={`hover:text-white duration-300 drop-shadow-2xl hover:scale-105`}><FaGithub /></li></Link>
                    <Link href="https://www.facebook.com/nilamjyoti.sharma" target='blank'><li className={`hover:text-white duration-300 drop-shadow-2xl hover:scale-105`}><FaFacebookSquare /></li></Link>
                    <Link href="mailto:nilamjyotisharma2000@gmail.com"><li className={`hover:text-white duration-300 drop-shadow-2xl hover:scale-105`}><SiGmail /></li></Link>

                </ul>
            </div>

        <div className='my-36 mx-auto text-center'>
            <p className='text-neutral-500 text-sm mt-12'>&copy; All rights reserved by <span className='text-blue-500 text-sm'>Nilam Jyoti Sharma</span></p>
        </div>
        
    </div>
    </div>
    
  )
}

export default Footer