import React from 'react'
import './ToDo.css'



const ToDo = () => {
  return (
    <>
    
    
        <div className=" bg-[#F7F8FC] ">
            <div className=" container ">
                <div className="">
                    <div className="">
                        <div className=" relative ">
                            <div className=" flex flex-col items-center text-center justify-center ">
                            <h2 className=" TH2 ">Things you need<span className="TDSpan">  to do </span></h2>
                                <p className=" TP ">We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford. </p>
                            </div>
                            <img className='thic' src="imgs/thic.png" alt="s" />
                        </div>
                        <div className=" flex justify-center items-center flex-wrap gap-1 ">
                            {/* =--=-=-=-= */}
                            <div className=" relative TMSC ">
                            <img src="imgs/todo1.png" alt="" className="todo  " />
                                <div className=" tCon ">
                                    <img src=" imgs/tic1.png" alt="" className="tic" />
                                    <h3 className="T3">Sign Up</h3>
                                    <p className="TCP">Completes all the work associated with planning and processing</p>
                                </div>
                            </div>
                            {/* =--=-=-=-= */}
                            {/* =--=-=-=-= */}
                            <div className=" relative TMSC ">
                            <img src="imgs/todo2.png" alt="" className="todo  " />
                                <div className=" tCon ">
                                    <img src=" imgs/tic2.png" alt="" className="tic" />
                                    <h3 className="T3">Worth of Money</h3>
                                    <p className="TCP">After successful access then book from exclusive deals & pricing</p>
                                </div>
                            </div>
                            {/* =--=-=-=-= */}
                            {/* =--=-=-=-= */}
                            <div className=" relative TMSC ">
                            <img src="imgs/todo3.png" alt="" className="todo  " />
                                <div className=" tCon ">
                                    <img src=" imgs/tic3.png" alt="" className="tic" />
                                    <h3 className="T3">Exciting Travel
                                    </h3>
                                    <p className="TCP">Start and explore a wide range of exciting travel experience.</p>
                                </div>
                            </div>
                            {/* =--=-=-=-= */}

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
    </>
  )
}

export default ToDo