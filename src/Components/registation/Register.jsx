import React, { useState } from 'react'
import { RiEyeCloseFill } from 'react-icons/ri'
import { VscEye } from 'react-icons/vsc'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword , sendEmailVerification} from "firebase/auth";
import { Bounce, toast } from 'react-toastify';
// import { getAuth,  } from "firebase/auth";




const Register = () => {
// -----------------------------------------
    const [ show , setShow ]= useState(false)
    const [ formData , setFormData ] = useState({userName:'' , Mail:'' , Pass:''})
    const [ error , setError ] = useState({userNameError:'' , MailError:'' , PassError:''})
    const navigate = useNavigate( )
//========
const auth = getAuth();
//=========
//------------------------------------------
    const handelSubmit = (e)=>{
        e.preventDefault()
        if(formData.userName == ''){
            setError((prev)=>({...prev , userNameError:'Enter your name !'}))
        }if(formData.Mail == ''){
            setError((prev)=>({...prev ,MailError:'Enter your e-mail !'}))
        }if(formData.Pass == ''){
            setError((prev)=>({...prev, PassError:'Enter your password !'}))
        }else{
            createUserWithEmailAndPassword(auth, formData.Mail, formData.Pass)
            .then((userCredential) => {
                const user = userCredential.user;

                //------------------
                sendEmailVerification(auth.currentUser)
                .then(() => {
                // ----------
                    toast('Verify Your e-mail !', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    navigate( '/log' ) 
                });
                                
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                //----------
                if(errorCode == 'auth/email-already-in-use'){
                    toast.error('This e-mail is already taken !', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                        });
                }if(errorCode == 'auth/weak-password'){
                    toast.error('This password is very very DURBOL', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                        });
                }

            });
        }
    }
//------------------------------------------








  return (
    <>
    
    
    
    
    
    <div className="flex justify-center items-center h-screen relative"
        //  style={{backgroundImage: "url('images/mountain.png')",backgroundRepeat: "no-repeat",backgroundSize: "cover",}} 
         // <<---------- Ey code ta diye ami ---- BACKGROUND_E_IMAGE ---- set korte parbo
    >

{/*---------------------------- Background with Blur */}

        <div className="absolute inset-0 bg-gradient-to-r from-orange-900 via-orange-600 to-orange-400 opacity-50 backdrop-blur-lg"></div>

{/*---------------------------- Login Form with Glassmorphism Effect  */}
        <div id="login" className="w-96 h-auto bg-[#fa7436e1] backdrop-blur-sm rounded-2xl shadow-lg flex flex-col justify-between p-8 z-10 border border-white/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <form className="text-indigo-500">
                <div className="p-6">

{/* --------------------------- Welcome Message */}
                    
                    <p className="text-xl font-semibold text-orange-100 text-center mb-6 transition-all duration-300 transform hover:text-indigo-900">Welcome!</p>

{/*----------------------------- Name Input  */}

                    <div className="my-4">
                        <label className="text-xs font-bold text-gray-200" htmlFor="name">Name</label>
                        <p className="text-xs text-red-900">{error.userNameError}</p>
                        <input onChange={(e)=>{setFormData((prev)=>({...prev , userName:e.target.value})) , setError((prev)=>({...prev , userNameError:''}))}} 
                         placeholder='Enter your name.....' className="w-full p-3 mt-2 outline-none rounded-lg bg-white/40 text-white placeholder-gray-200 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 transform hover:bg-white/50" type="text"/>
                    </div>

{/*---------------------------- Mail Input  */}

                    <div className="my-4">
                        <label className="text-xs font-bold text-gray-200" htmlFor="email">Mail</label>
                        <p className="text-xs text-red-900">{error.MailError}</p>
                        <input onChange={(e)=>{setFormData((prev)=>({...prev , Mail:e.target.value })) , setError((prev)=>({...prev , MailError:''}))}}
                         placeholder='Enter your G-mail.....' className="w-full p-3 mt-2 outline-none rounded-lg bg-white/40 text-white placeholder-gray-200 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 transform hover:bg-white/50" type="email"/>
                    </div>

{/*---------------------------- Password Input */}

                    <div className="my-4 relative">
                        <label className="text-xs font-bold text-gray-200" htmlFor="password"> Password </label>
                        <p className="text-xs text-red-900">{error.PassError}</p>
                        <input onChange={(e)=>{setFormData((prev)=>({...prev , Pass:e.target.value})) , setError((prev)=>({...prev , PassError:''}))}}
                         placeholder='Enter yout password.....'  className="w-full p-3 mt-2 outline-none rounded-lg bg-white/40 text-white placeholder-gray-200 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 transform hover:bg-white/50" type={show?'text':'password'} />
                       {
                            show?
                           <VscEye onClick={()=>setShow(false)} className="absolute top-[70%] right-4 transform -translate-y-1/2 text-[#3a3938]" />
                        :
                            <RiEyeCloseFill onClick={()=>setShow(true)}  className="absolute top-[70%] right-4 transform -translate-y-1/2 text-[#3a3938]" />
                       }
                      
                    </div>

{/*---------------------------- Link to Login  */}

                    <Link to="/log" className="text-sm text-orange-300 hover:text-orange-900 text-center mb-6">Already have an account? <span className="font-bold text-orange-100">Login</span></Link>

{/*----------------------------- Register Button   */}
                    <button onClick={handelSubmit} className="w-full rounded-lg bg-gradient-to-r from-orange-700 via-orange-500 to-orange-400 text-white p-3 text-center font-semibold hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 mt-6 transition-all duration-300 transform hover:scale-105" type="submit" > Register </button>
                </div>
            </form>
        </div>
    </div>



    
    
    
    
    
    
    
    </>
  )
}

export default Register