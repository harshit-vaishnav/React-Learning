import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-10 px-18 h-[90vh] flex justify-between items-center gap-4' >
         <LeftContent />
         <RightContent data = {props.data} />

         </div>
  )
}

export default Page1Content