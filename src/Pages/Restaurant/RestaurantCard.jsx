import { Box, Divider, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const RestaurantCard = ({ id, mainImage, name, review, review1, review2, type }) => {
    return (
        <Box marginBottom={"10px"} width={["100%", "100%", "100%"]} borderRadius="5px" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} backgroundColor="white" color={"black"}>
            <Flex flexWrap={"wrap"} width={"100%"} >
                <Box width={["100%", "30%"]} position={"relative"} >
                    <Image w={["100%", "100%", "100%"]} src={mainImage} alt='' />
                    <Image position={"absolute"} top="10px" right={"10px"} width={"8%"} backgroundColor={"white"} padding={"5px"} borderRadius={"50%"} src="https://i.ibb.co/gwYJT9q/heart-1.png" alt="" />
                </Box>
                <Box padding={"10px"} width={["100%", "70%"]} align={"left"} alignItems={"flex-start"} justifyContent={"flex-start"}>
                    <Text _hover={{ textDecoration: "underline" }} fontWeight={"500"} fontSize={["16px", "18px", "20px"]} align={"left"} paddingBottom={"5px"}> {name}</Text>
                    <HStack alignSelf={"flex-start"} spacing={1}>
                        <Image width={"3%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"3%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"3%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"3%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                        <Image width={"3%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                        <Text fontWeight={"500"}
                            fontSize={["12px"]}
                            lineHeight={"10px"}
                            align={"center"}>{review} reviews</Text>
                    </HStack>
                    <Text paddingY={"3px"}>
                        {type}
                    </Text>
                    <Divider borderColor={"gray"} paddingY={"3px"} />
                    <Text fontSize={["12px", "13px", "14px"]} paddingY={"3px"} >{review1}</Text>
                    <Text fontSize={["12px", "13px", "14px"]} paddingY={"3px"} >{review2}</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default RestaurantCard