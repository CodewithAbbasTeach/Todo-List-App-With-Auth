import React from 'react'
import "./SignUp.css"
const HeadingComp = ({first , Second}) => {
  return (
    
       <div>
         <h1 className='text-center sign-in-heading'>{first} <br/> {Second}</h1>
       </div>
               
  )
}

export default HeadingComp
