import React from 'react'
import { SocialMediaIcons } from './SocialMediaIcons'

export const Footer = () => {
  return (
    <div>
        <div className='w-full bg-black h-20'>
            <SocialMediaIcons iconName="fa fa-instagram hover:text-pink-500"></SocialMediaIcons>
            <SocialMediaIcons iconName="fa fa-facebook-official hover:text-blue-500"></SocialMediaIcons>
            <SocialMediaIcons iconName="fa fa-youtube-play hover:text-red-500"></SocialMediaIcons>
            <SocialMediaIcons iconName="fa fa-twitter hover:text-blue-500"></SocialMediaIcons>
            <SocialMediaIcons iconName="fa fa-envelope-o hover:text-yellow-500"></SocialMediaIcons>
        </div>
        <div className='w-full bg-black h-16'>
            <div className='w-full pt-3 font-semibold header-list text-white'>
                <label htmlFor="">Designed and Developed with <i className='fa fa-heart text-red-500'></i> By</label>
            </div>
            <div className='w-full font-semibold text-lg header-list text-yellow-500'>
                <label htmlFor="">Manohar V</label>
            </div>
        </div>
        <div className='w-full bg-black h-16'>
            <div className='w-full header-list text-slate-300'>
                <i class="mt-5 ml-2 mr-2 cursor-pointer fa fa-copyright" aria-hidden="true"></i>
                <label htmlFor="">2024-2029 by Next U, Inc</label>
            </div>
        </div>
    </div>
  )
}
