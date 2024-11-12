import React from 'react'

const HeadSubhead = ({name, subname}) => {
  return (
    <div className="font-medium text-center md:mt-16 sm:mt-10 mt-6">
        <p className="text-primary-main md:text-xl sm:text-lg text-base">{name}</p>
        <p className="text-[#FFFFFF] md:text-[2.5rem] sm:text-3xl text-2xl">{subname}</p>
    </div>
  )
}

export default HeadSubhead