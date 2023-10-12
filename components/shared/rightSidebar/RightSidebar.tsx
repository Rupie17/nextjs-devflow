'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { questionList, badgeTags } from '@/constants/constants'
import RenderTag from '../RenderTag'

const RightSidebar = () => {
  return (
    // sticky keeps it in place, left-0 pins it left, top-0 at the top, h-screen full horizontal, flex-col so items stack
    <section className='background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden'>
      <div>
        <h3 className='h3-bold text-dark200_light900'>Hot Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'>
          {questionList.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className='flex cursor-pointer items-center justify-between gap-7'>
              <p className='body-medium text-dark500_light700'>
                {item.question}
              </p>
              <Image
                src={item.imgURL}
                alt='arrow'
                width={20}
                height={20}
                className='invert-colors'
              />
            </Link>
          ))}
        </div>
      </div>

      <div className='mt-16'>
        <h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
        <div className='mt-7 flex flex-col gap-4'>
          {badgeTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.tag}
              count={tag.count}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RightSidebar
