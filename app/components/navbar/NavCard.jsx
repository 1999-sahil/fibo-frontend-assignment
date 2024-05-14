import React from 'react'

function NavCard({ svgImg, title, isActive }) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div>
            {svgImg}
        </div>
        <div className='w-[25px] h-[7px]'>
        <h2 
            className={`font-dmsans font-normal text-[10px] leading-[23px] text-center
            ${isActive ? "text-[#d15439]" : "text-[#b5b5b5]"} `}
        >
            {title}
        </h2>
        </div>
    </div>
  )
}

export default NavCard