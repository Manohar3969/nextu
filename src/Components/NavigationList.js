import React from 'react'

export const NavigationList = (props) => {
  return (
    <>
    <li className='float-left ml-5 mr-5 font-semibold text-white hover:text-amber-500 cursor-pointer header-list'>
        {props.children}
    </li>
    </>
  )
}
