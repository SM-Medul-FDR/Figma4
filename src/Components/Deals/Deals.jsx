import React from 'react'
import './Deals.css'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
// -----------------------
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6';
import { IoArrowBackCircleOutline, IoLocationSharp } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import { BsFillStarFill } from 'react-icons/bs';
// ------------------------
import { Link } from 'react-router-dom';


const Deals = () => {

    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <IoArrowForwardCircle />,
        prevArrow: <IoArrowBackCircleOutline />,
      };




  return (
    <>
    
        <div className=" pb-[80px] md:pb-[50px] ">
            <div className=" container ">
                <div className="">
                    <div className="">
                        <div className=" relative ">
                            <div className=" flex flex-col items-center text-center justify-center ">
                            <h2 className=" TH2 ">Exclusive<span className="TDSpan"> deals & discounts</span></h2>
                                <p className=" TP md:!w-[430px] ">Discover our fantastic early booking discounts & start planning your journey.
                                </p>
                            </div>
                            
                        </div>

{/* ----------------------------------------------------------------------------------- */}
<div className=" relative">
<Slider {...settings}>
    {/* ------------------------------------------------------------------ */}
      <div className=' Main_Single_Deals overflow-hidden border-[1.5px] border-[#66666631] rounded-[10px]  '>
            <div className="sdi "><img className='  duration-150  w-full' src="imgs/dci1.png" alt="dci" />

            </div>
            <div className="flex items-center justify-between px-2 md:px-4 md:mt-[32px] md:mb-[18px] ">
                <h2 className="dch2">Madrid</h2>
                <div className="flex items-center gap-1 md:gap-2"><BsFillStarFill className=' text-yellow-400' />
                <p className="">4.8</p></div>
            </div>
            <div className="px-1.5 md:px-4 flex justify-between items-center md:mb-[32px]  ">
            <div className="flex items-center gap-1/2 md:gap-2"><IoLocationSharp  className='text-[11px] md:text-[16px] text-[#999999] ' />
            <p className="dcp">Spain</p></div>
                <div className="flex items-center md:gap-4 gap-1">
                    <div className=""><p className="price1">$950</p></div>
                    <div className=""><p className="price2">$850</p></div>
                </div>
            </div>
      </div>
    {/* ------------------------------------------------------------------ */}
      <div className=' Main_Single_Deals overflow-hidden border-[1.5px] border-[#66666631] rounded-[10px] '>
            <div className="sdi "><img className='  duration-150  w-full' src="imgs/dci2.png" alt="dci" />

            </div>
            <div className="flex items-center justify-between px-2 md:px-4 md:mt-[32px] md:mb-[18px] ">
                <h2 className="dch2">Firenze</h2>
                <div className="flex items-center gap-1 md:gap-2"><BsFillStarFill className=' text-yellow-400' />
                <p className="">4.5</p></div>
            </div>
            <div className="px-1.5 md:px-4 flex justify-between items-center md:mb-[32px]  ">
            <div className="flex items-center gap-1/2 md:gap-2"><IoLocationSharp  className='text-[11px] md:text-[16px] text-[#999999] ' />
            <p className="dcp">Italy</p></div>
                <div className="flex items-center md:gap-4 gap-1">
                    <div className=""><p className="price1">$850</p></div>
                    <div className=""><p className="price2">$750</p></div>
                </div>
            </div>
      </div>
    {/* ------------------------------------------------------------------ */}
      <div className=' Main_Single_Deals overflow-hidden border-[1.5px] border-[#66666631] rounded-[10px] '>
            <div className="sdi "><img className='  duration-150  w-full' src="imgs/dci3.png" alt="dci" />

            </div>
            <div className="flex items-center justify-between px-2 md:px-4 md:mt-[32px] md:mb-[18px] ">
                <h2 className="dch2">Paris</h2>
                <div className="flex items-center gap-1 md:gap-2"><BsFillStarFill className=' text-yellow-400' />
                <p className="">4.4</p></div>
            </div>
            <div className="px-1.5 md:px-4 flex justify-between items-center md:mb-[32px]  ">
            <div className="flex items-center gap-1/2 md:gap-2"><IoLocationSharp  className='text-[11px] md:text-[16px] text-[#999999] ' />
            <p className="dcp">France</p></div>
                <div className="flex items-center md:gap-4 gap-1">
                    <div className=""><p className="price1">$699</p></div>
                    <div className=""><p className="price2">$599</p></div>
                </div>
            </div>
      </div>
    {/* ------------------------------------------------------------------ */}
      <div className=' Main_Single_Deals overflow-hidden border-[1.5px] border-[#66666631] rounded-[10px] '>
            <div className="sdi "><img className='  duration-150  w-full' src="imgs/dci4.png" alt="dci" />

            </div>
            <div className="flex items-center justify-between px-2 md:px-4 md:mt-[32px] md:mb-[18px] ">
                <h2 className="dch2">London</h2>
                <div className="flex items-center gap-1 md:gap-2"><BsFillStarFill className=' text-yellow-400' />
                <p className="">4.8</p></div>
            </div>
            <div className="px-1.5 md:px-4 flex justify-between items-center md:mb-[32px]  ">
            <div className="flex items-center gap-1/2 md:gap-2"><IoLocationSharp  className='text-[11px] md:text-[16px] text-[#999999] ' />
            <p className="dcp">UK</p></div>
                <div className="flex items-center md:gap-4 gap-1">
                    <div className=""><p className="price1">$850</p></div>
                    <div className=""><p className="price2">$850</p></div>
                </div>
            </div>
      </div>


</Slider>
</div>






                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Deals