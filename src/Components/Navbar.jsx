import React from 'react'

import {Box,Flex,HStack,IconButton,Button,useDisclosure,useColorModeValue,Stack, Image, useColorMode,} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import Weblogo from "../img/Tripadvisor_lockup_horizontal_secondary_registered.svg"
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Search from './Search';
import HotelCard from '../Pages/Hotel/HotelCard';

const Links = [
  {titel:'Review',
   logo:<FiEdit2/>,
  to:"/review"},
 {titel:'Trips',
logo:<AiOutlineHeart/>,
to:"/trips"},
 {titel:'Alert',
 logo:<IoMdNotificationsOutline/>,
to:"/alert"}
];

export const Navbar=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
    <div   >
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} as="header"  >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} px={[2,200,200]} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
       
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Image w={200} src={Weblogo} alt='LOGO'/></Box>

          </HStack>
          <Flex alignItems={'center'}>
          <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.titel} to={link.to}><Flex justify={"center"} align="center" gap={2} >{link.logo}{link.titel}</Flex></NavLink>
              ))}
              <Button borderRadius={30}>Sign in</Button>
              <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />} </Button>
            </HStack>
            </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={9} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <Flex pl={9} justify={"center"} align={"center"}><Button borderRadius={30} >Sign in</Button> <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />} </Button></Flex>
              {Links.map((link) => (
                 <NavLink key={link.titel} to={link.to}><Flex justify={"center"} align="center" gap={2} >{link.logo}{link.titel}</Flex></NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
    < Search/>
    
    </>
  );
}