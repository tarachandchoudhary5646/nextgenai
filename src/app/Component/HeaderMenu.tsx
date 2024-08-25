'use client'; // Ensures this component is rendered on the client-side

import Image from 'next/image';
import Link from 'next/link';
import { usePathname  } from 'next/navigation';
import React, { useEffect } from 'react';

interface MenuItem {
  menu?: string;
  link: string;
  icon?: string;
}

const menuListing: MenuItem[] = [
  { menu: 'Home', link: '/' },
  { menu: 'Features', link: '#features' },
  { menu: 'How it works', link: '#how-it-works' },
  { menu: 'Pricing', link: '#pricing' },
  { menu: 'Testimonials', link: '#testimonials' },
  { icon: '/magic.svg', link: '#magic' },
  { menu: 'FAQs', link: '#faqs' },
  { menu: 'Blogs', link: '#blogs' },
];

const HeaderMenu: React.FC = () => {
    const pathname  = usePathname();
    
  return (
    <div className="bg-white py-9 px-7  justify-between mt-56 rounded-[2rem] shadow-lg hidden md:flex">
      <div className="flex items-center">
        {menuListing.map((item, index) => (
          <li key={index} className="list-none mr-4">
            {item.icon ? (
              <Link href={item.link} className="px-8 block">
                <Image src={item.icon} alt="Frame" width={40} height={40} />
              </Link>
            ) : (
              <Link
                href={item.link}
                className={`graphikMedium text-[1.8rem] py-5 px-8 hover:text-white rounded-[1rem] headerMenu ${
                    pathname === item.link ? 'text-white active' : ''
                }`}
              >
                {item.menu}
              </Link>
            )}
          </li>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <div className=''>
            <a href="#" className='rounded-full border border-[#E0E0E0] block p-2'>
                <Image src={'/globe.svg'} width={32} height={32} alt='language'/>
            </a>
        </div>
        <div className='flex gap-5'>
            <Link
                href='#'
                className={`graphikMedium text-[1.8rem] py-5 px-8 hover:text-white rounded-[1rem] headerMenu`}
              >
                Sign in
            </Link>
            <Link
                href='#'
                className={`graphikMedium text-[1.8rem] py-5 px-8 hover:text-white rounded-[1rem] headerMenu text-white active`}
              >
                Live demo
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
