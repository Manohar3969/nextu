import React from 'react'

export const Title = (props) => {
  return (
    <div className='pt-3 pb-5'>
        <label className='text-yellow-500 float-left font-extrabold text-2xl pl-5' htmlFor="">|</label>
        <label htmlFor="" className='font-semibold text-2xl pl-5 text-white'>{props.children}</label>
    </div>
  )
}
