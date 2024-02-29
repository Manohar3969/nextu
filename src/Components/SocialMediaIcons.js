import React from 'react'

export const SocialMediaIcons = ({iconName}) => {
    const iconNameStyled =  'text-2xl mt-5 ml-5 mr-5 cursor-pointer text-white '+iconName;
  return (
    <>
    <i class={iconNameStyled} aria-hidden="true"></i>
    </>
  )
}
 