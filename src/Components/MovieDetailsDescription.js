import React from 'react'

export const MovieDetailsDescription = () => {
  return (
    <div className='w-full pl-60 pr-60 bg-green-500'>
        <div className='overflow-auto'>
            <div className='pt-3'>
                <label className="font-semibold text-2xl" htmlFor="">Hanuman</label>
            </div>
            <div>
                <label className="" htmlFor="">2024</label>
                <label className="pl-5" htmlFor="">U/A</label>
                <label className="pl-5" htmlFor="">2h 34m </label>
            </div>
            <div className='flex w-full float-left'>
                <img src="https://i.pinimg.com/736x/aa/92/13/aa92130b5dcbb96bd933c40ae7d798e2.jpg" className='w-1/4 h-[500px] pt-5 pb-5' alt="" />
                <div className='w-3/4 bg-yellow-500'>

                </div>
            </div>

            <div className='w-full'>
                
            </div>

        </div>
    </div>
  )
}
