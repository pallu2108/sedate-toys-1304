
import { Badge, Box, Button, Flex, HStack, Image, Img, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import {  POST_CART } from '../../Redux/AppRedux/action'
import { CircleIcon } from './Rating/rating'


  const HotelCard = ({ id, srcImg, name, price, reviews, imageSrc, rating, best_site, best_site_url, free_wifi, free_parking, location, Reserve_payAtStay, free_Cancellation }) => {
    return (
        <Box marginBottom={"10px"} width={["100%", "100%", "100%"]} borderRadius="5px" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
            <Flex width={"100%"} flexWrap={"wrap"} bg={"white"} color={"black"} >
                <Box width={["100%", "35%"]} position={"relative"}>
                    <Text backgroundColor={"black"} padding={"3px"} paddingX={"7px"} borderBottomRightRadius={"5px"} borderTopRightRadius={"5px"} color="white" position={"absolute"} top={"5"} left={"0"} fontWeight={"400"} fontSize={["11px"]}> Breakfast Included</Text>
                    <Image position={"absolute"} top="10px" right={"10px"} width={"8%"} backgroundColor={"white"} padding={"5px"} borderRadius={"50%"} src="https://i.ibb.co/gwYJT9q/heart-1.png" alt="" />
                    <Image height={"250px"} align={"right"} w={["100%", "100%"]} src={imageSrc} alt={name} />
                </Box>
                <Box width={["100%", "65%"]} alignItems={"flex-start"} padding={"10px"}  >
                    <Text _hover={{ textDecoration: "underline" }} fontWeight={"500"} fontSize={["18px", "20px", "22px"]} align={"left"} paddingBottom={"5px"}> {id}{`. `} {name}</Text>
                    <HStack alignItems={"flex-start"} justifyContent={"flex-start"} divider={<StackDivider borderColor='gray.200' />}>
                        <VStack wrap={"wrap"} width={"30%"} padding={"10px"} >
                            <Img width={"50%"} src={best_site_url} alt='' />
                            <Text fontWeight={"500"} fontSize={["18px", "20px", "22px"]} _hover={{ textDecoration: "underline" }}>Price: ₹{price ? Math.ceil(price - (price * 30 / 100)) : 2400}</Text>
                            <Button size='sm' borderRadius={"20px"} bg="#f2b203" width={"100%"} backgroundColor={"#f2b203"} color={"black"}>
                                <HStack spacing={3}> <Text>View Deal</Text> <Badge fontSize={"10px"} borderRadius='full' p='1' colorScheme='teal'>30% off</Badge></HStack>
                            </Button>
                            {free_Cancellation ? <Text alignSelf={"start"} lineHeight={"10px"} fontWeight={"400"} fontSize={["12px"]} >  &#x2713; Free Cancellation </Text> : ""}
                            {Reserve_payAtStay ? <Text alignSelf={"start"} lineHeight={"12px"} fontWeight={"400"} fontSize={["12px"]} > &#x2713; Reserve now Pay at Stay</Text> : ""}
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
                                {best_site ? best_site : "agoda.com"}
                            </Text>
                            <HStack>
                                <Text fontWeight={"700"}
                                    fontSize={["14px"]}
                                    lineHeight={"10px"}
                                    align={"center"}
                                >
                                    Price:
                                </Text>
                                <Text textColor={"red.900"} fontWeight={"bold"} fontSize={"14px"}>₹ {price ? price : 2400}</Text>
                            </HStack>
                        </VStack>
                        <VStack wrap={"wrap"} width={"40%"} padding={"5px"} >
                            <HStack alignItems={"center"} justifyContent={"flex-start"} spacing={0.5}>
                                <Box display='flex' mt='2' alignItems='center' spacing={"2px"}>
                                    {Array(5)
                                        .fill('')
                                        .map((_, i) => (
                                            <CircleIcon
                                                key={i}
                                                color={i < rating ? 'teal' : 'gray.300'}
                                                borderColor={"teal"}
                                                borderWidth={"2px"}
                                                borderRadius={"50%"}
                                                boxSize={8}
                                                padding={"0px"}
                                            />
                                        ))}
                                </Box>

                            </HStack>
                            <HStack>
                                <Text fontWeight={"500"}
                                    fontSize={["12px"]}
                                    lineHeight={"10px"}
                                    align={"center"}>{rating ? `${rating}/5 ratings &` : "ratings & "}</Text>
                                <Text fontWeight={"500"}
                                    fontSize={["12px"]}
                                    lineHeight={"10px"}
                                    align={"center"}>{reviews ? reviews : "296 reviews"}</Text>
                            </HStack>
                            <HStack alignItems={"center"} justifyContent={"flex-start"}>
                                <Image width={"10%"} src='https://i.ibb.co/Jq5hfmq/location-pin.png' alt='' />
                                <Text fontWeight={"500"}
                                    fontSize={["12px"]}
                                    lineHeight={"15px"}
                                    align={"center"}>{location}</Text>
                            </HStack>
                            <VStack>
                                {free_wifi ? <Text alignSelf={"start"} lineHeight={"10px"} fontWeight={"400"} fontSize={["12px"]} >  &#x2713; Free wifi </Text> : ""}
                                {free_parking ? <Text alignSelf={"start"} lineHeight={"12px"} fontWeight={"400"} fontSize={["12px"]} > &#x2713; Free Parking</Text> : ""}

                            </VStack>

                        </VStack>
                    </HStack>
                </Box>
            </Flex >
        </Box >
    )
}

export default HotelCard