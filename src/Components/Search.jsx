import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Box, Flex, HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaHotel } from "react-icons/fa";
import { GiThink } from "react-icons/gi";
import { IoIosAdd, IoMdHome } from 'react-icons/io'
import { ImSpoonKnife } from "react-icons/im"
import { BsFillChatRightTextFill } from "react-icons/bs"
import { NavLink } from 'react-router-dom'
import { Button } from '@chakra-ui/react';



const Search = () => {
  return (
    <Box  m={"auto"} width={"100%"} paddingTop={1}>
      <Flex alignItems={'center'} justifyContent={"center"} px={[null, null, 40]}>
        <HStack spacing={4}>
          <NavLink to={"/hotels"}>
            <Button width={"100%"} rightIcon={<FaHotel color='gray.300' />} colorScheme='white' color={"black"} variant='outline'>
              Hotels
            </Button>
          </NavLink>
          <NavLink>
            <Button width={"100%"} rightIcon={<GiThink color='gray.300' />} colorScheme='white' color={"black"} variant='outline'>
              Things to do
            </Button>
          </NavLink>
          <NavLink to={"/"} >
            <Button width={"100%"} rightIcon={<IoMdHome color='gray.300' />} colorScheme='white' color={"black"} variant='outline'>
              Holidays Home
            </Button>
          </NavLink>
          <NavLink to={"/restaurants"} >
            <Button width={"100%"} rightIcon={<ImSpoonKnife color='gray.300' />} colorScheme='white' color={"black"} variant='outline'>
              Resturants
            </Button>
          </NavLink>
          <NavLink to={"/"} >
            <Button width={"100%"} rightIcon={<BsFillChatRightTextFill color='gray.300' />} colorScheme='white' color={"black"} variant='outline'>
              Travels Fromus
            </Button>
          </NavLink>
          <NavLink to={"/"} >
            <Button width={"100%"} rightIcon={<IoIosAdd color='gray.300' />} colorScheme='white' color={"black"} variant='outline'>
              More
            </Button>
          </NavLink>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Search