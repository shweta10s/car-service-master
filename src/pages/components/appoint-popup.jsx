import { RouteContext } from '@/context/context';
import React, { useState, useContext } from 'react';
import { ImCross } from "react-icons/im";

const AppointPopup = () => {
    const { isPopup, PopupClose } = useContext(RouteContext);
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
        <div>
                <div className={`modal w-[80%] bg-[#858587] lg:p-16 md:p-10 sm:p-6 p-4 mt-[16vh] md:h-[80%] h-fit rounded-2xl z-50 mx-auto fixed top-0 left-0 right-0 bottom-0 ${isPopup ? '' : 'hidden'}`}>
                    <div className="modal-box relative">
                        <button
                            className="absolute top-4 md:right-4 right-2 text-primary-main"
                            onClick={PopupClose}
                        >
                            <ImCross />
                        </button>
                        <div className="text-center">
                            <h1 className="xl:text-5xl md:text-3xl sm:text-2xl text-xl font-bold text-white md:mb-2">Ready to schedule an</h1>
                            <h1 className="xl:text-5xl md:text-3xl sm:text-2xl text-xl font-bold text-primary-main md:mb-10 mb-6">appointment?</h1>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                className="text-black md:p-3 sm:p-2 p-2 rounded-md border border-gray-300"
                                />
                                <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="Phone Number"
                                className="text-black md:p-3 sm:p-2 p-2 rounded-md border border-gray-300"
                                />
                                <input
                                type="text"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                placeholder="Date"
                                className="text-black md:p-3 sm:p-2 p-2 rounded-md border border-gray-300"
                                />
                                <input
                                type="text"
                                name="time"
                                value={formData.time}
                                onChange={handleInputChange}
                                placeholder="Time"
                                className="text-black md:p-3 sm:p-2 p-2 rounded-md border border-gray-300"
                                />
                            </div>
                            <input
                                type="text"
                                name="service"
                                value={formData.service}
                                onChange={handleInputChange}
                                placeholder="Select Service"
                                className="text-black p-3 w-full rounded-md border border-gray-300 mb-4"
                            />
                            <div className="flex justify-start">
                                <button onClick={handleSubmit} className="bg-red-500 text-white py-3 px-6 rounded-md">
                                Submit
                                </button>
                            </div>
                            </div>
                    </div>
                </div>
        </div>
    );
};

export default AppointPopup;
