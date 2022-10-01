import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Box, Flex, HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaHotel } from "react-icons/fa";
import { GiThink } from "react-icons/gi";
import { IoIosAdd, IoMdHome } from 'react-icons/io'
import { ImSpoonKnife } from "react-icons/im"
import { BsFillChatRightTextFill } from "react-icons/bs"
import { NavLink } from 'react-router-dom'



const Search = () => {
  return (
    <Box m={"auto"} mt={2}>
    <Flex alignItems={'center'}  px={[null,null,40]}>
    <HStack spacing={4}>
  <InputGroup>
  <NavLink to={"/hotels-search"}>
    <Flex justify={"space-between"} >
      <InputLeftElement
      pointerEvents='none'
      children={<FaHotel color='gray.300' />}/>
      <Input pl={10} type='text' placeholder='Hotels' />
    </Flex>
    </NavLink>
    
  </InputGroup>
<InputGroup>
<NavLink>
    <InputLeftElement
      pointerEvents='none'
      children={<GiThink color='gray.300' />}
    />
    <Input  pl={10} type='text' placeholder='Things to do' />
    </NavLink>
  </InputGroup>
  <InputGroup>
  <NavLink to={"/holidays-homes-search"} >
    <InputLeftElement
      pointerEvents='none'
      children={<IoMdHome color='gray.300' />}
    />
    <Input  pl={10} type='text' placeholder='Holidays Home' />
    </NavLink>
  </InputGroup>
  <InputGroup>
  <NavLink to={"/resturants-search"} >
    <InputLeftElement
      pointerEvents='none'
      children={<ImSpoonKnife color='gray.300' />}
    />
    <Input  pl={10} type='text' placeholder='Resturants' />
    </NavLink>
  </InputGroup>
  <InputGroup>
  <NavLink to={"/"} >
    <InputLeftElement
      pointerEvents='none'
      children={<BsFillChatRightTextFill color='gray.300' />}
    />
    <Input  pl={10} name='x' type='text' placeholder='Travels Fromus' />
    </NavLink>
  </InputGroup>
  <InputGroup>
  <NavLink to={"/"} >
    <InputLeftElement
      pointerEvents='none'
      children={<IoIosAdd color='gray.300' />}
    />
    <Input  pl={10} name='x' placeholder='More' />
    </NavLink>
  </InputGroup>
</HStack>
    </Flex>
</Box>
  )
}

export default Search