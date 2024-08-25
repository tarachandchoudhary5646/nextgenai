'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

interface MenuItem {
    menu?: string;
    link: string;
}

const menuListing: MenuItem[] = [
    { menu: 'Home', link: '/' },
    { menu: 'Features', link: '#features' },
    { menu: 'How it works', link: '#how-it-works' },
    { menu: 'Pricing', link: '#pricing' },
    { menu: 'Testimonials', link: '#testimonials' },
    { menu: 'FAQs', link: '#faqs' },
    { menu: 'Blogs', link: '#blogs' },
  ];

function MobileHeader() {

    const pathname  = usePathname();
    const [menuDrawer, setMenuDrawer] = useState(false)

  return (
    <>
        <div className='md:hidden fixed top-0 left-0 w-full bg-white shadow-sm z-10'>
            <div className="px-5 py-5">
                <div className='flex justify-between'>
                    <div>
                        <Image className='mx-auto w-[4rem]' src={'/favicon.svg'} width={60} height={60} alt='Nextgen Ai'/>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className=''>
                            <a href="#" className='rounded-full border border-[#E0E0E0] block p-2'>
                                <Image src={'/globe.svg'} width={20} height={20} alt='language'/>
                            </a>
                        </div>
                        <div className='flex gap-5'>
                            <Link
                                href='#'
                                className={`graphikMedium text-[1.5rem] py-3 px-5 hover:text-white rounded-[1rem] headerMenu`}
                            >
                                Sign in
                            </Link>
                            <Link
                                href='#'
                                className={`graphikMedium text-[1.5rem] py-3 px-5 hover:text-white rounded-[.6rem] headerMenu text-white active`}
                            >
                                Live demo
                            </Link>
                        </div>
                        <div className="px-1">
                            <div className='' onClick={()=>setMenuDrawer(true)}>
                                <HiOutlineMenuAlt1 className='text-[3rem] text-slate-800'/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div className={`bg-white fixed max-w-[30rem] w-full h-full z-10 ${menuDrawer ? 'right-0' : '-right-[30rem] '} transition-all ease-in-out shadow-xl`}>
            <div className='cursor-pointer absolute right-10 top-5'>
                <IoClose className='text-[2.5rem]' onClick={()=>setMenuDrawer(false)}/>
            </div>
            <div className='px-4 py-10 mt-8'>
                <ul>
                    {
                        menuListing?.map((item, index) =>{
                            return(
                                <li key={index} className='mb-4'>
                                    <Link className={`graphikMedium rounded-2xl px-7 py-4 block headerMenu ${
                                        pathname === item.link ? 'text-white active' : ''
                                    }`} href={item.link}>{item.menu}</Link>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        </div>
        
    </>
  )
}

export default MobileHeader