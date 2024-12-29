import React from 'react'
import './Plan.css'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaCircleArrowLeft, FaCircleArrowRight, FaLocationArrow } from 'react-icons/fa6';
import { IoArrowBackCircleOutline, IoLocationSharp } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';



const Plan = () => {

        var settings = {
            // dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <IoArrowForwardCircle />,
            prevArrow: <IoArrowBackCircleOutline />,
          };


  return (
    <>
    
    
        <div className="relative md:pb-[120px] pb-[50px] ">
            <div className=" container">
                <div className="">
                    <div className="">
                        <div className="mmm">
                        <div className=" relative ">
                            <div className=" flex flex-col items-center text-center justify-center ">
                            <h2 className=" TH2 ">Best<span className="TDSpan">  vacation plan </span></h2>
                                <p className=" TP pb-8 md:!w-[550px] ">Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! </p>
                            </div>
                            <img className='thic md:!h-[91px] !h-[70px] ' src="imgs/plan.png" alt="s" />
                        </div>
                        {/* ----------------- */}

                        <Slider {...settings}>
    {/* ------------------------------------------------------------------ 1*/}
      <div className=' Main_Single_Deals overflow-hidden border-[1.5px] border-[#66666631] rounded-[10px]  '>
            <div className="sdi "><img className='  duration-150  w-full' src="imgs/plan1.png" alt="dci" />

            </div>

            <div className="flex items-center justify-between px-2 md:px-4 md:mt-[32px] md:mb-[18px] ">
                <h2 className="dch2">Rome, Italty</h2>
                <div className="flex items-center md:gap-4 gap-1">
                    {/* <div className=""><p className="price1">$950</p></div> */}
                    <div className=""><p className="Pprice2">$5,42k</p></div>
                </div>
            </div>
            
            <div className="px-1.5 md:px-4 flex justify-between items-center md:mb-[32px]  ">
            <div className="flex items-center gap-1/2 md:gap-2"><FaLocationArrow   className='text-[11px] md:text-[16px] text-[#fa7436] ' />
            <p className="dcp">10 Days Trip</p></div>
            <div className="flex items-center gap-1 md:gap-2"><BsFillStarFill className=' text-yellow-400' />
            <p className="ppp">4.8</p></div>
            </div>
      </div>
    {/* ------------------------------------------------------------------ 2*/}
      <div className=' Main_Single_Deals overflow-hidden border-[1.5px] border-[#66666631] rounded-[10px]  '>
            <div className="sdi "><img className='  duration-150  w-full' src="imgs/plan2.png" alt="dci" />

            </div>

            <div className="flex items-center justify-between px-2 md:px-4 md:mt-[32px] md:mb-[18px] ">
                <h2 className="dch2">London,UK</h2>
                <div className="flex items-center md:gap-4 gap-1">
                    {/* <div className=""><p className="price1">$950</p></div> */}
                    <div className=""><p className="Pprice2">$2,42k</p></div>
                </div>
            </div>
            
            <div className="px-1.5 md:px-4 flex justify-between items-center md:mb-[32px]  ">
            <div className="flex items-center gap-1/2 md:gap-2"><FaLocationArrow  className='text-[11px] md:text-[16px] text-[#fa7436] ' />
            <p className="dcp">07 Days Trip</p></div>
            <div className="flex items-center gap-1 md:gap-2"><BsFillStarFill className=' text-yellow-400' />
            <p className="ppp ">4.7</p></div>
            </div>
      </div>
    {/* ------------------------------------------------------------------ 3*/}
      <div className=' Main_Single_Deals overflow-hidden border-[1.5px] border-[#66666631] rounded-[10px]  '>
            <div className="sdi "><img className='  duration-150  w-full' src="imgs/plan3.png" alt="dci" />

            </div>

            <div className="flex items-center justify-between px-2 md:px-4 md:mt-[32px] md:mb-[18px] ">
                <h2 className="dch2">Osaka,Japan</h2>
                <div className="flex items-center md:gap-4 gap-1">
                    {/* <div className=""><p className="price1">$950</p></div> */}
                    <div className=""><p className="Pprice2">$5,42k</p></div>
                </div>
            </div>
            
            <div className="px-1.5 md:px-4 flex justify-between items-center md:mb-[32px]  ">
            <div className="flex items-center gap-1/2 md:gap-2"><FaLocationArrow  className='text-[11px] md:text-[16px] text-[#fa7436] ' />
            <p className="dcp">10 Days Trip</p></div>
            <div className="flex items-center gap-1 md:gap-2"><BsFillStarFill className=' text-yellow-400' />
            <p className="ppp">4.8</p></div>
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

export default Plan