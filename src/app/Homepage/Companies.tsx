'use client';
import React from 'react';
import Style from './homepage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Company {
  logo: string;
  link: string;
}

const companiesObj: Company[] = [
  { logo: '/companies/logo1.svg', link: '#' },
  { logo: '/companies/logo2.svg', link: '#' },
  { logo: '/companies/logo3.svg', link: '#' },
  { logo: '/companies/logo4.svg', link: '#' },
  { logo: '/companies/logo5.svg', link: '#' },
  { logo: '/companies/logo6.svg', link: '#' },
  { logo: '/companies/logo7.svg', link: '#' },
  { logo: '/companies/logo8.svg', link: '#' },
  { logo: '/companies/logo9.svg', link: '#' }
];

const Companies: React.FC = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

  return (
    <section className={`${Style.dotVector} pb-10 md:pb-16`}>
      <Slider {...settings}>
        {companiesObj.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className='border border-[#E0E0E0] rounded-[1rem] md:rounded-[2rem] px-[1.5rem] md:px-[3rem] h-[7rem] md:h-[12rem] flex justify-center items-center bg-[#F6F6F8]'>
              <Image
                src={item.logo}
                alt={`Company Logo ${index + 1}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </Link>
        ))}
      </Slider>
    </section>
  );
};

export default Companies;
