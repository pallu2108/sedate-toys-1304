import { Box, Button, CheckboxIcon, Container, Divider, Flex, HStack, Icon, Image, Img, SimpleGrid, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'


const HotelCard = () => {
    return (
        <Box width={["100%", "100%", "100%"]} borderRadius="5px" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
            <Flex width={"100%"} flexWrap={"wrap"} bg={"white"} color={"black"} >
                <Box width={["100%", "35%"]} position={"relative"}>
                    <Text backgroundColor={"black"} padding={"3px"} paddingX={"7px"} borderBottomRightRadius={"5px"} borderTopRightRadius={"5px"} color="white" position={"absolute"} top={"5"} left={"0"} fontWeight={"400"} fontSize={["11px"]}> Breakfast Included</Text>
                    <Image position={"absolute"} top="10px" right={"10px"} width={"8%"} backgroundColor={"white"} padding={"5px"} borderRadius={"50%"} src="https://i.ibb.co/gwYJT9q/heart-1.png" alt="" />
                    <Image height={"250px"} align={"right"} w={["100%", "100%"]} src='https://media-cdn.tripadvisor.com/media/photo-s/14/ca/78/b2/oyo-11950-relax-holiday.jpg' alt='' />
                </Box>
                <Box  width={["100%", "65%"]} alignItems={"flex-start"} padding={"10px"}  >
                    <Text _hover={{ textDecoration: "underline" }} fontWeight={"500"} fontSize={["18px", "20px", "22px"]} align={"left"} paddingBottom={"5px"}> OYO 11950 Relax Holiday Home</Text>
                    <HStack alignItems={"flex-start"} justifyContent={"flex-start"} divider={<StackDivider borderColor='gray.200' />}>
                        <VStack wrap={"wrap"} width={"30%"} padding={"10px"} >
                            <Img width={"50%"} src='https://static.tacdn.com/img2/branding/hotels/Agoda.png' alt='' />
                            <Text fontWeight={"500"} fontSize={["18px", "20px", "22px"]} _hover={{ textDecoration: "underline" }}>₹ 2400</Text>
                            <Button size='sm' borderRadius={"20px"} bg="#f2b203" width={"100%"} backgroundColor={"#f2b203"} color={"black"}>
                                View Deal
                            </Button>
                            <Text alignSelf={"start"} lineHeight={"10px"} fontWeight={"400"} fontSize={["12px"]} > &#x2713; Free Cancellation</Text>
                            <Text alignSelf={"start"} lineHeight={"12px"} fontWeight={"400"} fontSize={["12px"]} > &#x2713; Reserve now Pay at Stay</Text>
                        </VStack>

                        <VStack wrap={"wrap"} width={"25%"} padding={"5px"} >
                            <Text
                                _hover={{ textDecoration: "underline" }}
                                fontWeight={"500"}
                                fontSize={["13px"]}
                                align={"center"}
                                lineHeight={"10px"}
                                paddingBottom={"5px"}
                            >
                                Booking.com
                            </Text>
                            <Text fontWeight={"500"}
                                fontSize={["12px"]}
                                lineHeight={"10px"}
                                align={"center"}
                            >
                                ₹ 2400
                            </Text>
                        </VStack>
                        <VStack wrap={"wrap"} width={"40%"} padding={"5px"} >
                            <HStack alignItems={"center"} justifyContent={"flex-start"} spacing={0.5}>
                                <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                <Image width={"8%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                                <Image width={"8%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                                <Text fontWeight={"500"}
                                    fontSize={["12px"]}
                                    lineHeight={"10px"}
                                    align={"center"}>292 reviews</Text>
                            </HStack>
                            <HStack alignItems={"center"} justifyContent={"flex-start"}>
                                <Image width={"10%"} src='https://i.ibb.co/Jq5hfmq/location-pin.png' alt='' />
                                <Text fontWeight={"500"}
                                    fontSize={["12px"]}
                                    lineHeight={"15px"}
                                    align={"center"}>Maharashtra ,India</Text>
                            </HStack>

                        </VStack>
                    </HStack>
                </Box>
            </Flex >
        </Box >
    )
}

export default HotelCard