'use client'

import { navigation } from '@/app/constants'
import React, { useState } from 'react'
import NavCard from './NavCard'
import Link from 'next/link';

function Navbar() {


  const [activeLink, setActiveLink] = useState(navigation[0].title);

    const handleSetActiveLink = (title) => {
        setActiveLink(title);
    };

  return (
    <div className='bg-[#242424] min-w-[360px] h-[70px] w-full flex justify-center'>
      {/** container */}
      <div className='w-[300px] h-[49px] flex items-center justify-between'>
        {navigation.map((item, index) => (
          <Link href={item.link} key={index}>
            <NavCard 
              svgImg={item.img} 
              title={item.title} 
              isActive={activeLink === item.title}
              setActiveLink={handleSetActiveLink} 
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar