import Image from 'next/image'
import React from 'react'
import Card from './Card'
import { cardsInfo } from '@/app/constants'
import SwipeAll from '../swipe-all/SwipeAll'

function GoalCard() {
  return (
    <div className='min-w-[312px] h-[475px] w-full flex flex-col gap-[16px]'>
        {/** heading */}
        <div className='w-full h-[28px] flex justify-between'>
            <h2 className='w-[96px] h-[11px] font-dmsans font-medium text-[16px] leading-[20.83px] text-[#ebe9e8]'>
                Today&apos;s Goal
            </h2>
            <div className='w-[36px] h-[28px]'>
                <Image
                    src="/heart.gif"
                    layout={'responsive'}
                    height={28}
                    width={36}
                    alt=''
                    unoptimized={true}
                />
            </div>
        </div>

        {/** cards */}
        <div className='flex flex-col gap-[10px]'>
            {cardsInfo.map((item, i) => (
                <div key={i}>
                    <Card
                        title={item.title}
                        img={item.img}
                        bgColor={item.checkBoxColor}
                    />
                </div>
            ))}
        </div>

        {/** swipe all */}
        <div className='w-full flex items-center justify-center'>
            <SwipeAll />
        </div>
    </div>
  )
}

export default GoalCard