import React from 'react'
import { Header } from '../components/header/Header_temp'
import { Outlet } from 'react-router'
import { Footer } from '../components/footer/Footer_temp'

export function Layout() {
  return (
    <>
    <Header/>

    <Outlet/>

    <Footer/>
    </>
  )
}
