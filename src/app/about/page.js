import React from 'react'
import BaseLayout from '../../layout/BaseLayout'
import Span from '../components/span'

export const metadata = {
  title : 'About',
}

const page = () => {
  return (
    <BaseLayout>
        <div className='mt-16 md:mt-28 mb-24'>

        <h1 className="text-white text-2xl md:text-[2.7rem] font-bold">Welcome to Syntax Stories</h1><br/><h1 className="text-neutral-200 text-lg md:text-xl font-bold mx-2 mb-16">– Your Ultimate Destination for Techno Enthusiasts !</h1>
        

        <div className='text-white text-lg md:text-xl font-bold mt-8'>🌟 About Us 🌟</div>

        <div className='text-neutral-400 text-sm md:text-lg leading-relaxed md:leading-loose my-4 md:my-8'>At Syntax Stories, we believe in the power of Technology to inspire, inform, and entertain. Whether you're a seasoned Technology aficionado or just dipping your toes into the fascinating world of Techonology our blog is your go-to source for everything Tech-related.</div>

        <div className='text-white text-lg md:text-xl font-bold'>🚀 What Sets Us Apart 🚀</div>

        <div className='text-neutral-400 text-sm md:text-lg leading-relaxed md:leading-loose my-4 md:my-8'>

        <ul className='space-y-4'>
            <li><strong className='text-neutral-300'>Passion for Techonology:</strong> We are a team of dedicated <Span children="Tech enthusiasts"></Span> who eat, sleep, and breathe techonology. Our passion for [Blog Niche] is the driving force behind everything we do.</li>
            <li><strong className='text-neutral-300'>Quality Content:</strong> We take pride in delivering high-quality, well-researched, and engaging content. Whether you're looking for in-depth guides, the latest trends, or personal insights, we've got you covered.</li>
            <li><strong className='text-neutral-300'>Diverse Perspectives:</strong> Syntax Stories welcome contributors from various backgrounds, ensuring a rich tapestry of perspectives within our content.
</li>
            <li><strong className='text-neutral-300'>Interactive Community:</strong> Join our thriving community of <Span children="Tech enthusiasts"></Span>! Share your experiences, ask questions, and connect with like-minded individuals who share your passion.</li>
        </ul>
</div>
        <div className='text-white text-lg md:text-xl font-bold'>📚 What You'll Find Here 📚</div>
        <div className='text-neutral-400 text-sm md:text-lg leading-relaxed md:leading-loose my-4 md:my-8'>
        <ul className='space-y-4'>
            <li><strong className='text-neutral-300'>Informative Articles:</strong> Dive into our extensive collection of informative articles covering a wide range of <Span children="Technical topics"></Span>. From beginner's guides to advanced techniques, there's something for everyone.</li>
            <li><strong className='text-neutral-300'>Inspiring Stories:</strong> Discover real-life stories from individuals who have found joy, success, and fulfillment through their Tech journey. Get motivated and inspired to pursue your own passions.</li>
            <li><strong className='text-neutral-300'>Trending Topics:</strong> Stay up-to-date with the latest trends, news, and developments in the dynamic world of Technology. We keep our finger on the pulse to bring you the freshest content.</li>
            <li><strong className='text-neutral-300'>How-To Guides:</strong> Learn the ropes with our step-by-step how-to guides. Whether you're a novice or an expert, you'll find valuable insights to enhance your Tech experience.</li>
        </ul>
        </div>

        <div className='text-white text-lg md:text-xl font-bold'>🌐 Connect With Us 🌐</div>

        <div className='text-neutral-400 text-sm md:text-lg leading-relaxed md:leading-loose my-4 md:my-8'>We love hearing from our readers! Connect with us on <Span children="LinkedIn"></Span> to join the conversation, share your thoughts, and stay updated on the latest Tech happenings.

        Thank you for being a part of the Syntax Stories community. We're thrilled to embark on this Tech journey with you!</div>

        <div>

            <h1 className='text-neutral-300 mt-24 text-lg text-end'>
            Happy reading,<br/>
            The Nilam's Blog Team
            </h1>

        </div>
        
        </div>
    </BaseLayout>
  )
}

export default page