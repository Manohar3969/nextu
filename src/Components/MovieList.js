import React from 'react'
import { Buttons } from './Buttons'

export const MovieList = ({movieTitle, moviePoster}) => {
  return (
    <div className='w-1/5 h-[550px] float-left justify-center'>
        <div className='ml-3 mr-3 mt-2 bg-slate-900 rounded-lg overflow-hidden'>
            <img className='h-[360px] w-full' src={moviePoster} alt="" />
            <div className='h-14 text-center overflow-hidden mt-5'>
                <label className='font-semibold text-white' htmlFor="">{movieTitle}</label>
            </div>
            <div className='text-center'>
                <button className='w-3/5 font-semibold bg-orange-500 text-white h-10 rounded mb-8'>Watch Trailer</button>
            </div>
        </div>
    </div>
  )
}
