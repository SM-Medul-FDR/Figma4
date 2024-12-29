import React from 'react'
import './AboutUs.css'
import { IoArrowBackCircleOutline, IoArrowForwardCircle } from 'react-icons/io5'


const AboutUs = () => {

  return (
    <>
    
            <div className=" bg-[#F7F8FC] md:pt-[56px] md:pb-[120px] pt-[20px] pb-[40px] ">
                <div className="container">
                    <div className=" flex justify-between  ">
                        <div className="">
                            <h2 className=" md:!text-[48px] bannerHead   ">What people say
                            <span className="BSpan md:!text-[48px]"> about Us.</span></h2>
                            <p className="bannerPara md:!w-[427px] md:!text-[16px] ">Our Clients send us bunch of smilies with our services and we love them.</p>
                            <div className="flex gap-3 md:gap-7 ">
                            <IoArrowBackCircleOutline className=' md:text-[60px] text-[20px] hover:scale-[1.1] duration-[.2s] text-[#999999] ' />
                            <IoArrowForwardCircle className=' md:text-[60px] text-[20px] hover:scale-[1.1] duration-[.2s] text-[#FA7436]' />
                            </div>
                        </div>
                        <img src="imgs/aimg.png" alt="" className="Aimg" />
                    </div>
                </div>
            </div>
    
    </>
  )
}

export default AboutUs