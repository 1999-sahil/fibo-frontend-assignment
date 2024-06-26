import Image from 'next/image'
import React from 'react'

function ProgressBar({ progress }) {
    
  return (
    <div className='flex items-center lg:justify-center px-5 gap-[16px] min-w-[312px] w-full h-[78px] rounded-[16px] bg-gradient-to-r to-[#0e77d9] from-[#7da7ce]'>
        {/** image (left) */}
        <div className="left w-[55px] h-[56px] bg-blend-overlay">
            <Image 
                src="/bullseye.png" 
                alt='' 
                width={55} 
                height={56} 
                className='mix-blend-overlay' 
            />
        </div>

        {/** progress bar (right-container) */}
        <div className="right w-[209.32px] h-[51.3px] flex flex-col gap-[16px]">
            {/** top */}
            <div className='w-[192px] h-[26px] flex flex-col gap-[8px]'>
                <div className='h-[10px] w-fit capitalize whitespace-nowrap font-dmsans font-bold text-[14px] leading-[18.5px] text-[#ffffff]'>
                    your daily goal almost done
                </div>
                <div className='min-w-[100px] h-[8px]'>
                    <h2 className='font-dmsans font-normal text-[12px] leading-[18.5px] text-[#e1eaf2]'>
                        {Math.floor(progress * 0.05) % 100} of 5 completed
                    </h2>
                </div>
            </div>

            {/** bottom */}
            <div className='flex flex-col gap-[2px]'>
                <div 
                    
                    className='w-full h-[2.37px] relative rounded-[9.48px] bg-[#ffffff] bg-opacity-20'
                >
                    <div className='absolute w-full h-[2.37px] rounded-[9.48px]' style={{ width: `${progress}%`, backgroundColor: "#ffffff" }}></div>
                </div>
                <div className='w-full h-[7px] text-end font-dmsans font-medium text-[10px] leading-[13px] text-[#e1eaf2]'>
                    {progress}%
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProgressBar

