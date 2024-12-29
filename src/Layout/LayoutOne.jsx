import React from 'react'
import Nav from '../Components/Nav/Nav'
import { Outlet } from 'react-router-dom'

const LayoutOne = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default LayoutOne