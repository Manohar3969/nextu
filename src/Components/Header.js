import React from 'react'
import { NavigationList } from './NavigationList'

export const Header = () => {
  return (
    <div className='flex w-full h-20 bg-black'>
        <div className='w-1/4 h-full'>
            <img src="#" alt="" />
            <label htmlFor="" className='flex font-bold text-5xl justify-center mt-4 text-amber-500 logo-font'>Next U</label>
        </div>
        <div className='w-2/4 h-full'>
            <ul className='flex justify-center mt-7'>
                <NavigationList>Home</NavigationList>
                <NavigationList>Movies</NavigationList>
                <NavigationList>Series</NavigationList>
            </ul>
        </div>

    </div>
  )
}
