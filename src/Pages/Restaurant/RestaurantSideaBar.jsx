import {
    Box, Button, Checkbox, Divider, HStack, Input, StackDivider, Text, useMediaQuery, VStack, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    RadioGroup,
    Radio,
    Image,

} from '@chakra-ui/react'
import React, { useRef } from 'react'

const RestaurantSidebarLarge = () => {
    return (
        <Box width={"30%"} position={"sticky"} top="0" borderRadius="5px" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" padding={"20px"} bg={"white"} color={"black"} >
            <VStack borderColor={"black"} alignItems={"flex-start"} justifyContent={"flex-start"} >
                <Text fontWeight={600}>
                    Deals
                </Text>
                <Checkbox borderColor={"black"} colorScheme={"black"} type={"radio"} > Reserver Now,Pay at stay</Checkbox>
                <Checkbox borderColor={"black"} colorScheme={"black"} type={"radio"} > Free Cancellation</Checkbox>
            </VStack>
            <br />
            <Divider borderColor={"black"} />
            <br />
            <VStack alignItems={"flex-start"} justifyContent={"flex-start"} backgroundColor={"white"}>
                <Text fontWeight={600}>
                    Amenities
                </Text>
                <Checkbox borderColor={"black"} colorScheme={"black"} type={"radio"} > Free WiFi</Checkbox>
                <Checkbox borderColor={"black"} colorScheme={"black"} type={"radio"} > Free parking</Checkbox>
                <Checkbox borderColor={"black"} colorScheme={"black"} type={"radio"} > Restaurants</Checkbox>
                <Checkbox borderColor={"black"} colorScheme={"black"} type={"radio"} > value 4</Checkbox>
            </VStack>
            <br />
            <Divider borderColor={"black"} />
            <br />
            <RadioGroup>
                <VStack alignItems={"flex-start"} justifyContent={"flex-start"} backgroundColor={"white"}>
                    <Text fontWeight={600}>
                        Traveller Rating
                    </Text>
                    <Radio borderColor={"black"} colorScheme={"black"} type={"radio"} ><HStack alignItems={"center"} justifyContent={"flex-start"} spacing={0.5}>
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Text fontWeight={"500"}
                            fontSize={["12px"]}
                            lineHeight={"10px"}
                            align={"center"}> & Up</Text>
                    </HStack></Radio>
                    <Radio borderColor={"black"} colorScheme={"black"} type={"radio"} > <HStack alignItems={"center"} justifyContent={"flex-start"} spacing={0.5}>
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                        <Text fontWeight={"500"}
                            fontSize={["12px"]}
                            lineHeight={"10px"}
                            align={"center"}> & Up</Text>
                    </HStack></Radio>
                    <Radio borderColor={"black"} colorScheme={"black"} type={"radio"} > <HStack alignItems={"center"} justifyContent={"flex-start"} spacing={0.5}>
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                        <Text fontWeight={"500"}
                            fontSize={["12px"]}
                            lineHeight={"10px"}
                            align={"center"}> & Up</Text>
                    </HStack></Radio>
                </VStack>
            </RadioGroup>
            <br />
        </Box >

    )
}
const RestaurantSidebarSmall = () => {
    return (
        <Box width={"100%"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingY={"20px"} bg={"white"} color={"black"}>
            <HStack >
                <SortBy />
                <FilterBy />
            </HStack>
        </Box>
    )
}

export const SortBy = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnSortRef = useRef();
    return (
        <>
            <Button width={"100%"} ref={btnSortRef} colorScheme='teal' onClick={onOpen}>
                Sort By
            </Button>
            <Drawer

                isOpen={isOpen}
                placement='bottom'
                onClose={onClose}
                finalFocusRef={btnSortRef}
            >
                <DrawerOverlay />
                <DrawerContent bg={"white"} color="black">
                    <DrawerCloseButton />
                    <DrawerHeader >Sort By</DrawerHeader>
                    <DrawerBody>
                        <RadioGroup value="">
                            <VStack fontSize={"15px"} align={"left"} gap={2}>
                                <Radio value="PriceLowToHigh">Price low To high</Radio>
                                <Radio value="PriceHighToLow">Price high To low</Radio>
                            </VStack>
                        </RadioGroup>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export const FilterBy = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnFilterRef = useRef();
    return (
        <>
            <Button width={"100%"} ref={btnFilterRef} colorScheme='teal' onClick={onOpen}>
                Filter
            </Button>
            <Drawer
                size={"sm"}
                isOpen={isOpen}
                placement='bottom'
                onClose={onClose}
                finalFocusRef={btnFilterRef}
            >
                <DrawerOverlay />
                <DrawerContent bg={"white"} color="black">
                    <DrawerCloseButton />
                    <DrawerHeader>Filter</DrawerHeader>

                    <DrawerBody>
                        <Box width={["90%"]} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" margin={"auto"} padding={"20px"} bg={"white"} color={"black"}>
                            <VStack borderColor={"black"} alignItems={"flex-start"} justifyContent={"flex-start"} >
                                <Text fontWeight={600}>
                                    Deals
                                </Text>
                                <Checkbox borderColor={"black"} colorScheme={"black"} type={"radio"} > Reserver Now,Pay at stay</Checkbox>
                                <Checkbox borderColor={"black"} colorScheme={"black"} type={"radio"} > Free Cancellation</Checkbox>
                            </VStack>
                            <br />
                            <Divider borderColor={"black"} />
                            <br />
                            <VStack alignItems={"flex-start"} justifyContent={"flex-start"} backgroundColor={"white"}>
                                <Text fontWeight={600}>
                                    Amenities
                                </Text>
                                <Checkbox borderColor={"black"} colorScheme={"black"} type={"radio"} > Free WiFi</Checkbox>
                                <Checkbox borderColor={"black"} colorScheme={"black"} type={"radio"} > Free parking</Checkbox>
                                <Checkbox borderColor={"black"} colorScheme={"black"} type={"radio"} > Restaurants</Checkbox>
                                <Checkbox borderColor={"black"} colorScheme={"black"} type={"radio"} > value 4</Checkbox>
                            </VStack>
                            <br />
                            <Divider borderColor={"black"} />
                            <br />
                            <RadioGroup>
                                <VStack alignItems={"flex-start"} justifyContent={"flex-start"} backgroundColor={"white"}>
                                    <Text fontWeight={600}>
                                        Traveller Rating
                                    </Text>
                                    <Radio borderColor={"black"} colorScheme={"black"} type={"radio"} ><HStack alignItems={"center"} justifyContent={"flex-start"} spacing={0.5}>
                                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                        <Text fontWeight={"500"}
                                            fontSize={["12px"]}
                                            lineHeight={"10px"}
                                            align={"center"}> & Up</Text>
                                    </HStack></Radio>
                                    <Radio borderColor={"black"} colorScheme={"black"} type={"radio"} > <HStack alignItems={"center"} justifyContent={"flex-start"} spacing={0.5}>
                                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                        <Image width={"8%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                                        <Text fontWeight={"500"}
                                            fontSize={["12px"]}
                                            lineHeight={"10px"}
                                            align={"center"}> & Up</Text>
                                    </HStack></Radio>
                                    <Radio borderColor={"black"} colorScheme={"black"} type={"radio"} > <HStack alignItems={"center"} justifyContent={"flex-start"} spacing={0.5}>
                                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                                        <Image width={"8%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                                        <Image width={"8%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                                        <Text fontWeight={"500"}
                                            fontSize={["12px"]}
                                            lineHeight={"10px"}
                                            align={"center"}> & Up</Text>
                                    </HStack></Radio>
                                </VStack>
                            </RadioGroup>
                            <br />
                        </Box>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button colorScheme='blue'>Apply</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}



export { RestaurantSidebarLarge, RestaurantSidebarSmall };