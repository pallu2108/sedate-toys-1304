import React, { useEffect} from 'react'
import { Box, Flex, HStack, IconButton, Button, useDisclosure, useColorModeValue, Stack, Image, useColorMode, Text } from '@chakra-ui/react';
import {  CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import Weblogo from "../img/Tripadvisor_lockup_horizontal_secondary_registered.svg"
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Search from './Search';
import { TiShoppingCart } from "react-icons/ti"
import { useDispatch, useSelector } from 'react-redux';
import { getCartData } from '../Redux/AppRedux/action';
import Carousel from './Slider';

const Links = [
  {
    titel: 'Review',
    logo: <FiEdit2 />,
    to: "/review"
  },
  {
    titel: 'Trips',
    logo: <AiOutlineHeart />,
    to: "/trips"
  },
  {
    titel: 'Alert',
    logo: <IoMdNotificationsOutline />,
    to: "/alert"
  }
];

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const location = useLocation();
  const basket = useSelector((state) => {
    console.log(state.AppReducer.basket)
    return state.AppReducer.basket;
  })
  const count = basket.length;
  // console.log(basket, "basket");
  console.log(basket.length, 956);

  useEffect(() => {
    // dispatch(getPlacesData());
    dispatch(getCartData());
  }, [location.search]);

  return (
    <>
      <div >
        <Box zIndex={"10"} position="sticky" bg={useColorModeValue('white.100', 'gray.900')} px={4} as="header"  >
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'} px={[2, 200, 200]} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
            <HStack spacing={8} alignItems={'center'}>
              <Box><NavLink to="/"><Image pl={[50,null,null]} w={200} src={Weblogo} alt='LOGO' /></NavLink></Box>
              {onOpen ? (
            <Box pb={9} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
               <Flex justify={"center"} align={"center"}> <Link to="/register"><Button bg={"white"} borderRadius={30}>  Register  </Button></Link></Flex>

              </Stack>
              <Link to={"/cart"}>
                  <HStack padding={"10px"} justify={"center"} align={"center"}>
                    <TiShoppingCart size={"23px"} color={"red"} />
                    <Text pright={1.5} fontWeight={700} color={"black"}>{count}
                    </Text>
                  </HStack>
                  </Link>
            </Box>
          ) : null}
            </HStack>
            <Flex alignItems={'center'}>
              <HStack
                as={'nav'}
                spacing={2}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link.titel} to={link.to}><Flex justify={"center"} align="center" gap={2} >{link.logo}{link.titel}</Flex></NavLink>
                ))}
                {/* {flag ? <Button bg={"white"} borderRadius={30}> Logout </Button> :  */}
                <Link to="/register"><Button bg={"white"} borderRadius={30}>  Register  </Button></Link>
                <Link to={"/cart"}>
                  <HStack padding={"10px"} justify={"center"} align={"center"} position={"relative"}>
                    <TiShoppingCart size={"23px"} color={"red"} />
                    <Text position={"absolute"} top={0} right={1.5} fontWeight={700} color={"black"}>{count}
                    </Text>
                  </HStack>
                </Link>
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
      < Search />
      <Carousel/>
    </>
  );
}