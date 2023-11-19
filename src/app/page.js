import Link from 'next/link'
import React from 'react'
import BaseLayout from '../layout/BaseLayout'
import Span from './components/span'
import Image from 'next/image';


export const metadata = {
  title : 'Home | Syntax-Stories',
}

const page = () => {
  return (
    <BaseLayout>

      <div className='mt-16 md:mt-28'>
        <h1 className="text-white text-3xl md:text-[2.8rem] font-bold">Hey<span>👋</span>, I am Nilam</h1>
        <div className='md:flex flex-row-reverse gap-10 items-end md:mb-24 mb-16'>

        <Image src='/heroImg.jpg' width={200} height={200} className='h-[14rem] w-[11rem] rounded-xl mt-8' />


        <div>

        <p className='flex flex-wrap text-neutral-400 text-sm md:text-lg leading-relaxed md:leading-loose my-4 md:mt-12'>Welcome to my digital nook, Syntax Stories. I'm a Web Developer from Assam, India. Here, I share what I've been working on recently and things I learned along the way.</p>

        <div className='flex justify-evenly md:justify-start gap-4'>
        <Link href='/blog'><div className='inline-flex rounded-xl px-6 py-2 md:px-8 md:py-2 bg-white font-bold duration-500 hover:-translate-y-2'>Read blogs</div></Link>
        <Link href='https://nilamjyotisharma.vercel.app/' target='blank'><div className='inline-flex rounded-2xl px-6 py-2 md:px-8 md:py-2 border-[1px] border-white text-white font-bold duration-500 hover:-translate-y-2'>Know More</div></Link>

      </div>

        </div>

        </div>
        
        
      </div>

      
      



      <div className='text-white text-xl md:text-2xl font-bold mt-8 md:mt-16'>What You'll Find Here</div>
        <div className='text-neutral-400 text-sm md:text-lg leading-relaxed md:leading-loose my-4 md:my-2 md:mb-32 mb-24'>
        <ul className='space-y-4'>
            <li><strong className='text-neutral-300'>Informative Articles:</strong> Dive into our extensive collection of informative articles covering a wide range of <Span children="Technical topics"></Span>. From beginner's guides to advanced techniques, there's something for everyone.</li>
            <li><strong className='text-neutral-300'>Inspiring Stories:</strong> Discover real-life stories from individuals who have found joy, success, and fulfillment through their Tech journey. Get motivated and inspired to pursue your own passions.</li>
            <li><strong className='text-neutral-300'>Trending Topics:</strong> Stay up-to-date with the latest trends, news, and developments in the dynamic world of Technology. We keep our finger on the pulse to bring you the freshest content.</li>
            <li><strong className='text-neutral-300'>How-To Guides:</strong> Learn the ropes with our step-by-step how-to guides. Whether you're a novice or an expert, you'll find valuable insights to enhance your Tech experience.</li>
        </ul>
        </div>
      
    </BaseLayout>
  )
}

export default page