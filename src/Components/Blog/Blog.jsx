import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import './Blog.css'
import { IoArrowBackCircleOutline, IoLocationSharp } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import { BsFillStarFill } from 'react-icons/bs';


const Blog = () => {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
          };
    
  return (
    <>
    
        <div className=" md:pb-[330px] pb-[110px] ">
            <div className=" container ">
                <div className="mm">
                    <div className="">
                        <div className="">
                            <div className=" flex flex-col items-center text-center justify-center ">
                                <h2 className=" TH2 mb-4 md:mb-10">Get update with <span className="TDSpan"> latest blog</span></h2>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------------------------------- */}
<div className=" relative">
<Slider {...settings}>
    {/* ------------------------------------------------------------------ */}
      <div className=' Main_Single_Deals overflow-hidden border-[5px] border-[#fff] rounded-[10px]  '>
            <div className="sdi "><img className='  duration-150  w-full' src="imgs/bi1.png" alt="dci" />

            </div>
            <div className="flex items-center justify-between px-2 md:px-4 md:mt-[32px] md:mb-[18px] ">
                <h2 className="dch2 md:!text-[18px] md:w-[240px]  !text-[9px] ">The Amazing Difference a Year of Travelling .</h2>
            </div>
            <div className="px-1.5 md:px-4 flex justify-between items-center md:mb-[32px]  ">
            <div className="flex items-center gap-1/2 md:gap-2">
            <p className="dcp">July 27, 2021</p></div>

            </div>
      </div>
    {/* ------------------------------------------------------------------ */}
    {/* ------------------------------------------------------------------ */}
      <div className=' Main_Single_Deals overflow-hidden border-[5px] border-[#fff] rounded-[10px]  '>
            <div className="sdi "><img className='  duration-150  w-full' src="imgs/bi2.png" alt="dci" />

            </div>
            <div className="flex items-center justify-between px-2 md:px-4 md:mt-[32px] md:mb-[18px] ">
                <h2 className="dch2 md:!text-[18px] md:w-[240px]  !text-[9px] ">Travel far enough, you meet yourself.</h2>
            </div>
            <div className="px-1.5 md:px-4 flex justify-between items-center md:mb-[32px]  ">
            <div className="flex items-center gap-1/2 md:gap-2">
            <p className="dcp">July 27, 2021</p></div>

            </div>
      </div>
    {/* ------------------------------------------------------------------ */}
    {/* ------------------------------------------------------------------ */}
      <div className=' Main_Single_Deals overflow-hidden border-[5px] border-[#fff] rounded-[10px]  '>
            <div className="sdi "><img className='  duration-150  w-full' src="imgs/bi3.png" alt="dci" />

            </div>
            <div className="flex items-center justify-between px-2 md:px-4 md:mt-[32px] md:mb-[18px] ">
                <h2 className="dch2 md:!text-[18px] md:w-[240px]  !text-[9px] ">How to Save Money While Visiting Africa .</h2>
            </div>
            <div className="px-1.5 md:px-4 flex justify-between items-center md:mb-[32px]  ">
            <div className="flex items-center gap-1/2 md:gap-2">
            <p className="dcp">July 27, 2021</p></div>

            </div>
      </div>
    {/* ------------------------------------------------------------------ */}
    {/* ------------------------------------------------------------------ */}
      <div className=' Main_Single_Deals overflow-hidden border-[5px] border-[#fff] rounded-[10px]  '>
            <div className="sdi "><img className='  duration-150  w-full' src="imgs/bi4.png" alt="dci" />

            </div>
            <div className="flex items-center justify-between px-2 md:px-4 md:mt-[32px] md:mb-[18px] ">
                <h2 className="dch2 md:!text-[18px] md:w-[240px]  !text-[9px] ">Reflections on 5 Months of Travel: Time to Hang</h2>
            </div>
            <div className="px-1.5 md:px-4 flex justify-between items-center md:mb-[32px]  ">
            <div className="flex items-center gap-1/2 md:gap-2">
            <p className="dcp">July 27, 2021</p></div>

            </div>
      </div>
    {/* ------------------------------------------------------------------ */}


</Slider>
</div>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Blog