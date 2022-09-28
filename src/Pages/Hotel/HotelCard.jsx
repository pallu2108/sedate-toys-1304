import { Box, Button, CheckboxIcon, Container, Divider, Flex, HStack, Icon, Image, Img, SimpleGrid, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'


const HotelCard = () => {
    return (
        <Box width={["100%", "80%", "60%"]} margin={"auto"} border="1px solid green" _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
            <SimpleGrid width={"fit-content"} columns={[1, 1, 1, 2]} spacing={0} border="1px solid green" bg={"white"} color={"black"} >

                <Box width={"100%"} position={"relative"}>
                    <Text backgroundColor={"black"} padding={"3px"} paddingX={"7px"} borderBottomRightRadius={"5px"} borderTopRightRadius={"5px"} color="white" position={"absolute"} top={"5"} left={"0"} fontWeight={"400"} fontSize={["11px"]}> Breakfast Included</Text>
                    <Image position={"absolute"} bottom="10px" left={"10px"} width={"6%"} backgroundColor={"white"} padding={"5px"} borderRadius={"50%"} src="https://i.ibb.co/gwYJT9q/heart-1.png" alt="" />
                    <Image height={"250px"} align={"right"} w={["100%", "80%"]} src='https://media-cdn.tripadvisor.com/media/photo-s/14/ca/78/b2/oyo-11950-relax-holiday.jpg' alt='' />
                </Box>
                <Box width={"100%"} margin={"auto"} padding={"5px"} paddingRight={"100px"}>

                    <Text _hover={{ textDecoration: "underline" }} fontWeight={"500"} fontSize={["18px", "20px", "22px"]} align={"left"} paddingBottom={"5px"}> OYO 11950 Relax Holiday Home</Text>
                    <HStack alignItems={"flex-start"} justifyContent={"space-evenly"} divider={<StackDivider borderColor='gray.200' />}>
                        <VStack wrap={"wrap"} width={"40%"} padding={"5px"}  >
                            <Img width={"70%"} src='https://static.tacdn.com/img2/branding/hotels/Agoda.png' alt='' />
                            <Text fontWeight={"500"} fontSize={["18px", "20px", "22px"]} _hover={{ textDecoration: "underline" }}>₹ 2400</Text>
                            <Button size='sm' borderRadius={"20px"} bg="#f2b203" width={"100%"} backgroundColor={"#f2b203"} color={"black"}>
                                View Deal
                            </Button>
                            <Text lineHeight={"10px"} fontWeight={"400"} fontSize={["13px"]} > &#x2713; Free Cancellation</Text>
                            <Text lineHeight={"12px"} fontWeight={"400"} fontSize={["13px"]} > &#x2713; Reserve now Pay at Stay</Text>
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
                        <VStack wrap={"wrap"} width={"35%"} padding={"5px"} >
                            <HStack alignItems={"flex-start"} spacing={0.5}>
                                <Image width={"15%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                <Image width={"15%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                <Image width={"15%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                <Image width={"15%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                                <Image width={"15%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                                <Text fontWeight={"500"}
                                    fontSize={["12px"]}
                                    lineHeight={"10px"}
                                    align={"center"}>292 reviews</Text>
                            </HStack>
                            <HStack alignItems={"flex-start"}>
                                < Image width={"15%"} src='https://i.ibb.co/Jq5hfmq/location-pin.png' alt='' />
                                <Text fontWeight={"500"}
                                    fontSize={["12px"]}
                                    lineHeight={"15px"}
                                    align={"center"}>Maharashtra ,India</Text>
                            </HStack>

                        </VStack>
                    </HStack>
                </Box>
            </SimpleGrid >
        </Box >
    )
}

export default HotelCard