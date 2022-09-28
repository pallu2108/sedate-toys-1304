import { Input } from '@chakra-ui/input'
import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import searchBackgroundImage from "../img/homemarSearch.webp"
const Search = () => {
  return (
    <>
    <Flex m={"auto"} w={'70%'}
 
    h={'384px'}
    backgroundImage={
      `url(${searchBackgroundImage})`
    }
    backgroundSize={'cover'}
    backgroundPosition={'center center'}>
    </Flex>
       <Input type="text" placeholder='Akash code here'/>
</>
  )
}

export default Search