import { Box } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from './Navbar'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const Layout = () => {
  return (
    <Box>
        <Navbar/>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
    </Box>
  )
}
