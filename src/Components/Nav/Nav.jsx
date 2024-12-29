import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'



const Nav = () => {
  return (
    <>
    
        <div className=" bg-[#FEFCFB] ">
          <div className=" container ">
            <div className="">
              <div className="MainNav">
                <div className=""><img src="imgs/logo.png" alt="logo" className="Mlogo  " /></div>
                <div className="menus">
                    <ul>
                      <li><Link to='/'> Home </Link></li>
                      <li><Link to='/sub'> About </Link></li>
                      <li><Link to=''> Destination </Link></li>
                      <li><Link to=''> Tour </Link></li>
                      <li><Link to=''> Blog </Link></li>
                    </ul>
                </div>
                <div className=" Nav_buttons">
                  <Link className='a1' to='/log'>Login</Link>
                  <Link className='a2' to='/reg'>Signup</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default Nav