import React from 'react'

const Card = ({image,title,subTitle,link}) => {
  return (
    <a href={link} className='m-4 block max-w-sm overflow-hidden rounded-lg'>
        <div className='relative'>
            <img src={image} alt={title} className='w-full' />
            <div className='flex flex-col justify-between p-4 text-white'>
                <h2 className='mb-2 text-2xl font-bold'>{title}</h2>
                <p className='mb-4 text-sm font-medium'>{subTitle}</p>
            </div>
        </div>
    </a>
  )
}

export default Card
