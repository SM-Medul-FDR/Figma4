import React, { useState } from 'react'
import './Footer.css'
import { FaFacebook, FaTwitter } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io'
import { IoMailOutline } from 'react-icons/io5'
import { getDatabase, push, ref, set } from "firebase/database";




const Footer = () => {


    const  [subscribeData , setSubscribeData ] = useState({Subscribe:'' , SubscribeError:''})
    const db = getDatabase();

    //----- allFunctions
    const handelTodo    = ()=>{
        if(subscribeData.Subscribe == ''){
            setSubscribeData((prev)=>({...prev , SubscribeError:'Enter your e-mail !'}))
        }else{
            set(push(ref(db , 'AllSubscriber/')), {
                Subscriberemail: subscribeData.Subscribe,
              });
        }
    };


    // const [todoData , setTodoData] = useState

  return (
    <>
    
        <div className=" bg-[#F7F8FC] md:pt-[300px] pt-[120px] relative ">
            <div className="container">
                <div className="">
                    <div className="fmi ">
                        <div className=""><img src="imgs/subscribe.png" alt="" className=" w-full" /></div>
                        <div className="absolute md:top-16 top-6 left-[23%] ">
                            <h2 className=" md:text-[48px] text-[20px] w-[280px] text-center text-white md:w-[640px] md:text-center font-volkhov  ">Subscribe and get exclusive deals & offer</h2>
                            <div className=" relative">
                                <input  onChange={(e)=>setSubscribeData((prev)=>({...prev , Subscribe: e.target.value}))}  placeholder="✉ Enter your mail" className='  w-full md:h-16 h-10 rounded-[10px] outline-none pl-6 '  type="text" />   
                                <button onClick={handelTodo} className=' absolute md:top-[10%] top-[18%] md:right-[1%] right-[3%] flex items-center justify-center md:w-[160px] w-[60px] md:h-[50px] h-[25px] hover:text-[#000] text-white bg-[#fa7436] rounded-[5px] transition-all duration-150 md:text-[16px] text-[10px] font-poppins font-semibold ' type='submit' >Subscribe</button> 
                                <p className=' md:text-[20px] text-[12px] text-red-700 flex items-center justify-center font-poppins font-semibold mt-[2%]  ' >{subscribeData.SubscribeError}</p>
                            </div>                       
                        </div>
                    </div>

                      <div className=" flex flex-wrap justify-between gap-8 mb-5 ">
                        <div className="">
                            <img src="imgs/logo.png" alt="bhum...." className="" />
                            <p className="Fp">Book your trip in minute, get full
                            Control for much longer.</p>
                            <div className=" flex items-center gap-2 md:gap-[23px] ">
                            <FaFacebook  className=' duration-150 text-white bg-black hover:text-[#fa7436] hover:bg-white rounded-full md:h-[40px] h-[20px] md:w-[40px] w-[20px] '/>
                            <IoLogoInstagram  className=' duration-150 text-black bg-white hover:text-[#ffffff] hover:bg-[#fa7436] rounded-full md:h-[40px] h-[20px] md:w-[40px] w-[20px] '/>
                            <FaTwitter className=' duration-150 text-black bg-white hover:text-[#ffffff] hover:bg-[#fa7436] rounded-full md:h-[40px] h-[20px] md:w-[40px] w-[20px] '/>


                            </div>

                        </div>
                        {/* ------------------- */}

                        <div className="flex items-center gap-20">
                            <div className="">
                                <h2 className=" md:mb-[25px] mb-[10px] md:text-[18px] text-[13px] text-[#222222] font-poppins font-semibold  ">Company</h2>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">About</p>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Careers</p>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Logistic</p>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Privacy & Policy</p>
                            </div>
                            <div className="">
                                <h2 className=" md:mb-[25px] mb-[10px] md:text-[18px] text-[13px] text-[#222222] font-poppins font-semibold  ">Contact</h2>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Help/FAQ</p>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Press</p>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Affilates</p>
                            </div>
                            <div className="">
                                <h2 className=" md:mb-[25px] mb-[10px] md:text-[18px] text-[13px] text-[#222222] font-poppins font-semibold  ">More</h2>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Press Centre</p>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Our Blog</p>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Low fare tips</p>
                            </div>

                        </div>
                      </div>
                        <hr />
                        <div className=" flex items-center justify-between md:mt-10 mt-7 ">
                        <p className=" md:text-[18px] md:mb-[10px] text-[10px] text-[#666666] font-poppins font-normal ">Copyright, Trabook 2022. All rights reserved.</p>
                        <p className=" md:text-[18px] md:mb-[10px] text-[10px] text-[#666666] font-poppins font-normal ">Terms & Conditions</p>

                        </div>

                    
                </div>
            </div>
        </div>
    
    
    </>
  )
}

export default Footer