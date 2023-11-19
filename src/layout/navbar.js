"use client"
import Link from 'next/link'
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { usePathname } from 'next/navigation';





const NavBar = () => {
    const pathname = usePathname();
  return (
    <>


        <div className=''>
            <div>
                <ul className='flex justify-evenly text-neutral-400 md:mx-0 items-center'>
                    <Link href="/"><Image src='/logo.png' width={200} height={200} alt='Image not found' className='h-[2rem] w-[3rem] mr-2' /></Link>
                    <Link href="/"><li className={`hover:text-white duration-300 drop-shadow-2xl ${pathname === '/' ? 'text-white' : ''} hover:scale-105`}>Home</li></Link>
                    <Link href="/blog"><li className={`hover:text-white duration-300 drop-shadow-2xl ${pathname === '/blog' ? 'text-white' : ''} hover:scale-105`}>Blog</li></Link>
                    <Link href="/about"><li className={`hover:text-white duration-300 drop-shadow-2xl ${pathname === '/about' ? 'text-white' : ''} hover:scale-105`}>About</li></Link>
                    <Link href="/contact"><li className={`hover:text-white duration-300 drop-shadow-2xl ${pathname === '/contact' ? 'text-white' : ''} hover:scale-105`}>Contact</li></Link>

                </ul>
            </div>
        </div>


    </>
    
  )
}

export default NavBar