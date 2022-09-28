import React from 'react'
import Search from './Search'
import { Box } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <Box>
      <h1>NAvBar</h1>
      <Search/>
    </Box>
  )
}

export default Navbar
