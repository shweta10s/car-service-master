import React , {useState} from 'react'
import HeadSubhead from './head-subhead'
import Image from 'next/image'

const BookAppoint = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    date: '',
    time: '',
    service: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
      <div className="shadow-[0px_8px_16px_0px_rgba(255,255,255,0.07)] w-full h-full relative flex items-center md:my-10 sm:my-8">
        <div className="md:w-[605px] md:h-[620px] relative">
            <Image src="/assests/05.png" alt="" fill className="object-cover" />
        </div>
        <div className="md:bg-[#3D3D3D] md:w-[60vw] md:h-[560px] w-full p-6 md:absolute md:right-20">
          <p className="font-semibold md:text-2xl sm:text-xl text-base">Contact info</p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 my-4">
      <div className="w-full">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="appearance-none text-white block w-full md:text-base text-sm bg-transparent border border-[#858587] rounded md:py-3 sm:py-2 py-1 md:px-4 px-2 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
          placeholder="Name"
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="appearance-none text-white block w-full md:text-base text-sm bg-transparent border border-[#858587] rounded md:py-3 sm:py-2 py-1 md:px-4 px-2 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
          placeholder="Phone Number"
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="appearance-none text-white block w-full md:text-base text-sm bg-transparent border border-[#858587] rounded md:py-3 sm:py-2 py-1 md:px-4 px-2 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
          placeholder="Date"
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          className="appearance-none text-white block w-full md:text-base text-sm bg-transparent border border-[#858587] rounded md:py-3 sm:py-2 py-1 md:px-4 px-2 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500 text"
          placeholder="Time"
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          className="appearance-none text-white block w-full md:text-base text-sm bg-transparent border border-[#858587] rounded md:py-3 sm:py-2 py-1 md:px-4 px-2 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500"
          placeholder="Service"
        />
      </div>
          <button type="submit" className="md:text-base text-sm bg-primary-main rounded p-2 md:mt-10 sm:mt-6 mt-4 w-fit">Make an Appointment</button>
    </form>
        </div>

      </div>
  )
}

export default BookAppoint