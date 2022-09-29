import { Box, Divider, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const RestaurantCard = () => {
    return (
        <Box width={["100%", "100%", "100%"]} borderRadius="5px" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} backgroundColor="white" color={"black"}>
            <Flex flexWrap={"wrap"} width={"100%"} >
                <Box width={["100%", "30%"]} position={"relative"} >
                    <Image w={["100%", "100%", "100%"]} src='https://media-cdn.tripadvisor.com/media/photo-s/1c/27/74/e2/guns-and-roses.jpg' alt='' />
                    <Image position={"absolute"} top="10px" right={"10px"} width={"8%"} backgroundColor={"white"} padding={"5px"} borderRadius={"50%"} src="https://i.ibb.co/gwYJT9q/heart-1.png" alt="" />
                </Box>
                <Box padding={"10px"} width={["100%", "70%"]} align={"left"} alignItems={"flex-start"} justifyContent={"flex-start"}>
                    <Text _hover={{ textDecoration: "underline" }} fontWeight={"500"} fontSize={["18px", "20px", "22px"]} align={"left"} paddingBottom={"5px"}> OYO 11950 Relax Holiday Home</Text>
                    <HStack alignSelf={"flex-start"} spacing={1}>
                        <Image width={"3%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"3%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"3%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"3%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                        <Image width={"3%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                        <Text fontWeight={"500"}
                            fontSize={["12px"]}
                            lineHeight={"10px"}
                            align={"center"}>292 reviews</Text>
                    </HStack>
                    <Text paddingY={"3px"}>
                        Info
                    </Text>
                    <Divider borderColor={"black"} paddingY={"3px"} />
                    <Text paddingY={"3px"} >Review 1</Text>
                    <Text paddingY={"3px"} >Review 2</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default RestaurantCard