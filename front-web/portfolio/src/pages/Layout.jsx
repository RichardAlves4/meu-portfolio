import React from 'react'
import { Header } from '../components/header/header'
import { Outlet } from 'react-router'
import { Footer } from '../components/footer/Footer'

export function Layout() {
  return (
    <>
    <Header/>

    <Outlet/>

    <Footer/>
    </>
  )
}
