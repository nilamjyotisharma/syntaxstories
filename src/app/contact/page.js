import React from 'react'
import BaseLayout from '../../layout/BaseLayout'
import Span from '../components/span'
import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export const metadata = {
  title : 'Contact',
}

const page = () => {
  return (
    <BaseLayout>
    <div className='mt-16 md:mt-28 mb-24'>
    <div className="text-white text-xl md:text-[2.9rem] font-bold"> Connect With Us </div>

<div className='text-neutral-400 text-sm md:text-lg leading-relaxed md:leading-loose my-4 md:my-8'>We love hearing from our readers! Connect with us on <Span>LinkedIn</Span> to join the conversation, share your thoughts, and stay updated on the latest Tech happenings.

Thank you for being a part of the Syntax Stories community. We're thrilled to embark on this Tech journey with you!</div>

    </div>

    <div className="text-white text-xl md:text-[2.9rem] font-bold"> Follow Us on </div>

    <div className=''>
                <ul className='flex justify-evenly gap-2 text-white text-[2rem] md:text-[3em] mt-8 md:mt-12'>

                    <Link href="/"><li className={`hover:text-neutral-700 hover:bg-white bg-neutral-700 p-3 md:p-5 rounded-full duration-300 drop-shadow-2xl hover:scale-110`}><FaTwitter /></li></Link>
                    <Link href="/blog"><li className={`hover:text-neutral-700 hover:bg-white bg-neutral-700 p-3 md:p-5 rounded-full duration-300 drop-shadow-2xl hover:scale-110`}><FaLinkedin /></li></Link>
                    <Link href="/about"><li className={`hover:text-neutral-700 hover:bg-white bg-neutral-700 p-3 md:p-5 rounded-full duration-300 drop-shadow-2xl hover:scale-110`}><FaGithub /></li></Link>
                    <Link href="/contact"><li className={`hover:text-neutral-700 hover:bg-white bg-neutral-700 p-3 md:p-5 rounded-full duration-300 drop-shadow-2xl hover:scale-110`}><FaFacebookSquare /></li></Link>
                    <Link href="/contact"><li className={`hover:text-neutral-700 hover:bg-white bg-neutral-700 p-3 md:p-5 rounded-full duration-300 drop-shadow-2xl hover:scale-110`}><SiGmail /></li></Link>

                </ul>
            </div>
      
    </BaseLayout>
  )
}

export default page