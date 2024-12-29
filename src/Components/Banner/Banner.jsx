import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'


const Banner = () => {
  return (
    <>
    
    
        <div className=" relative bg-[#FEFCFB] ">
            <div className=" container ">
                <div className=" banner ">
                    <div className="  ">
                        <h2 className=" bannerHead ">Get started your exciting <span className="BSpan"> journey </span> 
                            with us.</h2>
                        <p className=" bannerPara ">A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place. </p>
                        <Link className=" bannerBtn ">Discover Now</Link>
                    </div>
                    <img src="imgs/bimg.png" alt="" className="BImg" />
                </div>
            </div>
        </div>
    
    
    
    </>
  )
}

export default Banner