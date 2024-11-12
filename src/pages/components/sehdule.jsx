/* eslint-disable @next/next/no-img-element */
import React , {useContext} from 'react'
import { RouteContext } from '@/context/context';

const Sehdule = () => {
  const { PopupOpen } = useContext(RouteContext);
  return (
    <div className="relative md:h-[25vw] sm:h-[40vh] h-[50vh] text-white overflow-hidden my-10">
  <div className="absolute inset-0">
    <img
      src="/assests/09.png"
      alt="Background Image"
      className="object-cover object-center w-full h-full"
    />
    <div className="absolute inset-0 bg-black/60" />
  </div>
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
  <div className="font-medium text-center">
        <p className="text-[#FFFFFF] xl:text-6xl md:text-4xl sm:text-3xl text-xl font-semibold drop-shadow-lg">Ready to schedule an <span className="block text-primary-main">appointment?</span></p>
        <p className="text-white my-5 md:text-xl sm:text-base text-sm">contact us today book  your  next service.</p>
        <button type="button" onClick={PopupOpen} className="text-white bg-primary-main hover:bg-primary-main focus:ring-4 focus:outline-none focus:ring-primary-main font-medium rounded-lg md:text-base text-base px-4 py-2 text-center dark:bg-primary-main dark:hover:bg-primary-main dark:focus:ring-primary-main">Make an Appointment</button>
    </div>
  </div>
</div>
  )
}

export default Sehdule