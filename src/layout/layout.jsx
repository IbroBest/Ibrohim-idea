import { Box } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from './Navbar'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { BottomHeader } from './BottomHeader'

export const Layout = () => {
  return (
    <Box>
        <Navbar/>
        <Header/>
        <BottomHeader/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
    </Box>
  )
}
