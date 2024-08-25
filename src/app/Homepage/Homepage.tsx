import React from 'react'
import Style from './homepage.module.css'
import Image from 'next/image'
import Features from './Features'
import HeaderMenu from '../Component/HeaderMenu'
import Companies from './Companies'
import MobileHeader from '../Component/MobileHeader'

function Homepage() {
    
    
  return (
    <>
        <MobileHeader/>
        <section className={`${Style.bannerSection} pt-[7rem]`}>
            <div className='max-w-[148rem] w-full px-5 mx-auto '>
                <div className='relative'>
                    <div className='max-w-[64rem] w-full p-5 mx-auto'>
                        <div className='mb-5 text-center'>
                            <Image className='mx-auto w-[6rem] hidden md:block' src={'/favicon.svg'} width={60} height={60} alt='Nextgen Ai'/>
                            <div className='mt-0 md:mt-11 inline-block bg-[#FCFCFC] rounded-2xl border-2 border-slate-100 px-5 py-3 shadow-md'>
                                <div className='flex items-center'>
                                    <div className='relative flex'>
                                        <div className='border-4 border-white rounded-full'>
                                            <Image className='rounded-full' src={'/member1.png'} width={22} height={22} alt='member 1'/>
                                        </div>
                                        <div className='border-4 border-white rounded-full -ml-5'>
                                            <Image className='rounded-full' src={'/member2.png'} width={22} height={22} alt='member 2'/>
                                        </div>
                                        <div className='border-4 border-white rounded-full -ml-5'>
                                            <Image className='rounded-full' src={'/member3.png'} width={22} height={22} alt='member 3'/>
                                        </div>
                                    </div>
                                    <p className='pl-4 graphikRegular text-[1.4rem]'>Join 3k+ Members</p>
                                </div>
                            </div>
                            <h1 className='graphikMedium my-[2rem] md:my-[3rem] text-[2.7rem] md:text-[4.4rem] leading-tight'>#1 Platform for all your marketing needs</h1>
                            <p className='color-[#171618] opacity-75 '>NextGen AI is a unified AI platform that provides all generative AI tools in one platform for all the marketing needs.</p>
                        </div>
                    </div>
                    <Features/>
                </div>
                <HeaderMenu/>
            </div>
        </section>
        <div className='py-8 md:py-20 text-center'>
            <p className='graphikRegular text-[1.6rem]'>Loved by product folks at</p>
        </div>
        <Companies/>
    </>
  )
}

export default Homepage