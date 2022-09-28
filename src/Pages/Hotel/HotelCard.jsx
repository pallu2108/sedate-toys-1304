import { Box, Button, Container, Divider, Flex, HStack, Image, Img, SimpleGrid, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const HotelCard = () => {
    return (
       
            <Box width={"70%"} margin={"auto"} border="1px solid green">
                <SimpleGrid columns={[1, 1, 2, 2]} alignItems={"start"} border="3px solid red" bg={"white"} color={"black"} >
                    {/* <HStack > */}
                    <Box position={"relative"}>
                        <Image src="" alt="" />
                        <Image w={["100%", "100%"]} src='https://media-cdn.tripadvisor.com/media/photo-s/14/ca/78/b2/oyo-11950-relax-holiday.jpg' alt='' />
                    </Box>
                    <Box w={["100%"]}>
                        <VStack border="3px solid red" >
                            <Text alignSelf={"flex-start"} marginBottom="20px"> OYO 11950 Relax Holiday Home</Text>
                            <HStack alignItems={"flex-start"} justifyContent={"space-evenly"} divider={<StackDivider borderColor='gray.200' />}>
                                <VStack width={"40%"} border="3px solid red">
                                    <Text>₹ 2400</Text>
                                    <Img width={"50%"} src='https://static.tacdn.com/img2/branding/hotels/Agoda.png' alt='' />
                                    <Button borderRadius={"20px"} bg="#f2b203" width={"100%"} backgroundColor={"#f2b203"} color={"black"}>
                                        View Deal
                                    </Button>
                                </VStack>

                                <VStack width={"20%"} border="3px solid red">
                                    <Text>₹ 2400</Text>
                                    <Text>₹ 2400</Text>
                                    <Text>₹ 2400</Text>
                                    <Text>₹ 2400</Text>
                                    <Text>₹ 2400</Text>
                                </VStack>

                                <VStack width={"40%"} border="3px solid red">
                                    <Text>₹ 2400</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                    </Box>
                    {/* </HStack> */}
                </SimpleGrid>
            </Box>
    )
}

export default HotelCard