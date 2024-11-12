
import HeroSection from "./components/hero-section";
import OurService from "./components/our-service";
import WhyChoose from "./components/why-choose";
import PricePlan from "./components/price-plan";
import OurBlogs from "./components/our-blogs";
import BookAppoint from "./components/book-appoint";
import Faq from "./components/faq";
import Layout from "./components/layout";
import HeadSubhead from "./components/head-subhead";
// import { poppins } from "./font";


export default function Home() {
  return (
    <Layout>
    <div
    >
      <HeroSection />
      <OurService />
      <WhyChoose />
      <PricePlan />
      <OurBlogs />
      <div className="md:my-10 sm:my-8 my-4">
        <HeadSubhead name={'Book an'} subname={"appointment"} /> 
        <BookAppoint />
      </div>
      <Faq />
    </div>

    </Layout>
  );
}
