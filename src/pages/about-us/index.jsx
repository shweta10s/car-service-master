import React from 'react'
import Layout from '../components/layout'
import ServiceHeroSection from '../components/service-hero-section'
import AboutusComp from '../components/aboutus-comp'
import WhyChoose from '../components/why-choose'
import Sehdule from '../components/sehdule'

const index = () => {
  return (
    <Layout>
        <ServiceHeroSection img={'/assests/08.png'} name={'About us'} subname={'Your one - stop auto shop'} />
        <AboutusComp />
        <WhyChoose />
        <Sehdule />
    </Layout>
  )
}

export default index