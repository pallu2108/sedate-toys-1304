import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Box, Flex, HStack } from '@chakra-ui/layout'
import axios from  "axios"
import React from 'react'
import { useEffect } from 'react'
import { FaHotel } from "react-icons/fa";
import { GiThink } from "react-icons/gi";
import { IoIosAdd, IoMdHome } from 'react-icons/io'
import { ImSpoonKnife } from "react-icons/im"
import { BsFillChatRightTextFill } from "react-icons/bs"
import searchBackgroundImage from "../img/homemarSearch.webp"



const Search = () => {



  return (
    <Box m={"auto"} mt={2}>
    <Flex alignItems={'center'}  px={[null,null,40]}>
    <HStack spacing={4}>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<FaHotel color='gray.300' />}
    />
    <Input type='text' placeholder='Hotels' />
  </InputGroup>
<InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<GiThink color='gray.300' />}
    />
    <Input type='text' placeholder='Things to do' />
  </InputGroup>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<IoMdHome color='gray.300' />}
    />
    <Input type='text' placeholder='Holidays Home' />
  </InputGroup>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<ImSpoonKnife color='gray.300' />}
    />
    <Input type='text' placeholder='Resturants' />
  </InputGroup>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<BsFillChatRightTextFill color='gray.300' />}
    />
    <Input type='text' placeholder='Travels Fromus' />
  </InputGroup>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<IoIosAdd color='gray.300' />}
    />
    <Input type='text' placeholder='More' />
  </InputGroup>
</HStack>
    </Flex>
</Box>
  )
}

export default Search