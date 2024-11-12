import React from 'react'
import Layout from '../components/layout'
import ServiceHeroSection from '../components/service-hero-section'
import BookAppoint from '../components/book-appoint'
import Image from 'next/image'
import { IoCall } from 'react-icons/io5'
import { IoMdPricetags } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'

const ContactUs = () => {
  return (
    <Layout>
        <ServiceHeroSection img={'/assests/08.png'} name={'Contact Us'} subname={'Make an Appointment'} />
        <BookAppoint />
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 sm:gap-6 gap-4 my-10 max-w-7xl mx-auto xl:px-0 px-6">
        <div className="rounded-lg overflow-hidden">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
            width="100%"
            height={"100%"}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            />

            </div>
            <div className="pt-10">
                <p className="md:text-[2.5rem] sm:text-2xl text-xl font-bold">Contact Us</p>
                <div className="flex md:gap-6 gap-4 mt-8">
                    <IoCall className="text-4xl bg-primary-main text-white p-2 rounded-lg" />
                    <div>
                        <p className="md:text-2xl sm:text-xl text-lg font-semibold">Phone</p>
                        <p className="text-[#858587] mt-1.5">+91 7925846989 , +91 7925846989</p>
                    </div>
                </div>
                <div className="flex md:gap-6 gap-4 md:my-10 sm:my-8 my-6">
                    <IoMdPricetags className="text-4xl bg-primary-main text-white p-2 rounded-lg" />
                    <div>
                        <p className="md:text-2xl sm:text-xl text-lg font-semibold">Email</p>
                        <p className="text-[#858587] mt-1.5">infoliquam@gmail.com</p>
                    </div>
                </div>
                <div className="flex md:gap-6 gap-4 md:my-10 sm:my-8 my-6">
                    <FaLocationDot className="text-4xl bg-primary-main text-white p-2  rounded-lg max-md:w-16" />
                    <div>
                        <p className="md:text-2xl sm:text-xl text-lg font-semibold"> Location</p>
                        <p className="text-[#858587] mt-1.5">Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </Layout>
  )
}

export default ContactUs