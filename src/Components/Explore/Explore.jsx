import React from 'react'
import './Explore.css'
import { Link } from 'react-router-dom'
import { GoTriangleDown } from 'react-icons/go'
import { IoIosArrowDown } from 'react-icons/io'


const Explore = () => {
  return (
    <>
    
    <div className="  md:pb-[120px] pb-[30px] bg-[#FEFCFB] w-full mx-auto md:pt-[20px] pt-[5px]  ">
        <div className=" container ">
            <div className=" mx-auto rounded-[10px] md:w-[841px] flex justify-between  items-center bg-[#ffffff] p-[32px] ">
                {/* ---------------------------------------------- */}
                <div className="">
                    <div className="">
                        <div className="relative group md:w-[100px] w-[70px] ">
                            <Link className="text-gray-700 font-medium hover:text-oratransition-all duration-[.2s] md:text-[16px] text-[11px] ">Location <IoIosArrowDown  className=' absolute right-[20%] top-[6px] text-[#fa7436] ' /></Link>
                            <div className="hidden bg-white group-hover:block absolute bshadow-lg mt-0 rounded">
                            <ul className="md:p-2">
                                <li>
                                <Link className="block px-4 py-2 text-ghover:bg-gray-100 transition-all duration-[.2s] [16px] text-[10px]">Option1</Link>
                                </li>
                                <li>
                                <Link className="block px-4 py-2 text-ghover:bg-gray-100 transition-all duration-[.2s] [16px] text-[10px]">Option2</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <p className=' md:text-[12px] text-[10px] font-poppins text-[#666666] ' >Where are you going</p>
                </div>
                {/* ---------------------------------------------- */}
                <div className="">
                    <div className="">
                        <div className="relative group md:w-[100px] w-[70px] ">
                            <Link className="text-gray-700 font-medium hover:text-oratransition-all duration-[.2s] md:text-[16px] text-[11px] ">Date <IoIosArrowDown  className=' absolute left-[37%] top-[6px] text-[#fa7436] ' /></Link>
                            <div className="hidden bg-white group-hover:block absolute bshadow-lg mt-0 rounded">
                            <ul className="md:p-2">
                                <li>
                                <Link className="block px-4 py-2 text-ghover:bg-gray-100 transition-all duration-[.2s] [16px] text-[10px]">Option1</Link>
                                </li>
                                <li>
                                <Link className="block px-4 py-2 text-ghover:bg-gray-100 transition-all duration-[.2s] [16px] text-[10px]">Option2</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <p className=' md:text-[12px] text-[10px] font-poppins text-[#666666] ' >When you will go</p>
                </div>
                {/* ---------------------------------------------- */}
                <div className="">
                    <div className="">
                        <div className="relative group md:w-[100px] w-[70px] ">
                            <Link className="text-gray-700 font-medium hover:text-oratransition-all duration-[.2s] md:text-[16px] text-[11px] ">Guest <IoIosArrowDown  className=' absolute right-[40%] top-[6px] text-[#fa7436] ' /></Link>
                            <div className="hidden bg-white group-hover:block absolute bshadow-lg mt-0 rounded">
                            <ul className="md:p-2">
                                <li>
                                <Link className="block px-4 py-2 text-ghover:bg-gray-100 transition-all duration-[.2s] [16px] text-[10px]">Option1</Link>
                                </li>
                                <li>
                                <Link className="block px-4 py-2 text-ghover:bg-gray-100 transition-all duration-[.2s] [16px] text-[10px]">Option2</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <p className=' md:text-[12px] text-[10px] font-poppins text-[#666666] ' >Number of guest</p>
                </div>
                {/* ---------------------------------------------- */}
                <div className="">
                    <Link className="bg-[#fa7436] hover:text-black duration-200 text-white px-4 py-2 rounded-md md:text-[16px] text-[11px] ">Explore Now</Link>
                </div>
            </div>

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
    </div>

    
    </>
  )
}

export default Explore