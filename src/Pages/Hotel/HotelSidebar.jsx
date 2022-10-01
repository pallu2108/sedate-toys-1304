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
import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const HotelSidebarLarge = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const initialTypeFilters = searchParam.getAll("type")
    const [type, setType] = useState(initialTypeFilters || []);
    const initialRatingFilters = searchParam.getAll("rating")
    const [rating, setRating] = useState(initialRatingFilters || []);
    const initialSort = searchParam.getAll("sortBy")
    const [sortBy, setSortBy] = useState(initialSort[0] || "");


    const handleSort = (e) => {
        setSortBy(e.target.value)
    }

    const handleFilterCheckbox = (e) => {
        let newTypes = [...type];
        let newRating = [...rating];
        // console.log(newTypes)
        if (newTypes.includes(e.target.value)) {
            newTypes.splice(newTypes.indexOf(e.target.value), 1);
        } else {
            newTypes.push(e.target.value);
        }
        if (newRating.includes(e.target.value)) {
            newRating.splice(newRating.indexOf(e.target.value), 1);
        } else {
            newRating.push(e.target.value);
        }
        setRating(newRating)
        setType(newTypes);
    }
    useEffect(() => {
      
            let params = {};
            type && (params.type = type);
            rating && (params.rating = rating);
            sortBy && (params.sortBy = sortBy);
            setSearchParam(params);
        
    }, [type, rating, sortBy, setSearchParam])

    return (
        <Box width={"30%"} borderRadius="5px" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" position={"sticky"} top="0" padding={"20px"} bg={"white"} color={"black"} >
            <VStack borderColor={"black"} alignItems={"flex-start"} justifyContent={"flex-start"} >
                <Text fontWeight={600}>
                    Deals
                </Text>
                <HStack>
                    <input type={"checkbox"} checked={type.includes('Guesthouse')} value="Guesthouse" onChange={handleFilterCheckbox} /><label>Guesthouse</label>
                </HStack>
                <HStack>
                    <input type={"checkbox"} checked={type.includes('Hotel')} value="Hotel" onChange={handleFilterCheckbox} /><label>Hotel</label>
                </HStack>
                <HStack>
                    <input type={"checkbox"} checked={type.includes('Ranch')} value="Ranch" onChange={handleFilterCheckbox} /><label>Ranch</label>
                </HStack>

            </VStack>
            <br />
            <Divider borderColor={"black"} />
            <br />
            <RadioGroup>
                <VStack alignItems={"flex-start"} justifyContent={"flex-start"} backgroundColor={"white"}>
                    <Text fontWeight={600}>
                        Traveller Rating
                    </Text>
                    <HStack alignItems={"center"} justifyContent={"flex-start"} spacing={0.5}>
                        <input type={"checkbox"} checked={rating.includes('5')} value="5" onChange={handleFilterCheckbox} />&nbsp; &nbsp;&nbsp;&nbsp;
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Text fontWeight={"500"}
                            fontSize={["12px"]}
                            lineHeight={"10px"}
                            align={"center"}> & Up</Text>
                    </HStack>
                    <HStack alignItems={"center"} justifyContent={"flex-start"} spacing={0.5}>
                        <input type={"checkbox"} checked={rating.includes('4')} value="4" onChange={handleFilterCheckbox} />
                        &nbsp; &nbsp;&nbsp;&nbsp;
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                        <Text fontWeight={"500"}
                            fontSize={["12px"]}
                            lineHeight={"10px"}
                            align={"center"}> & Up</Text>
                    </HStack>
                    <HStack alignItems={"center"} justifyContent={"flex-start"} spacing={0.5}>
                        <input type={"checkbox"} checked={rating.includes('3')} value="3" onChange={handleFilterCheckbox} />
                        &nbsp; &nbsp;&nbsp;&nbsp;
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                        <Image width={"8%"} src='https://i.ibb.co/2yfTqhz/rec.png' alt='' />
                        <Text fontWeight={"500"}
                            fontSize={["12px"]}
                            lineHeight={"10px"}
                            align={"center"}> & Up</Text>
                    </HStack>
                </VStack>
                <br />
                <Divider borderColor={"black"} />
                <br />
                <VStack borderColor={"black"} alignItems={"flex-start"} justifyContent={"flex-start"} onChange={handleSort} >
                    <Text fontWeight={600}>
                        Sort
                    </Text>
                    <HStack>
                        <input defaultChecked={sortBy === "asc"} type="radio" value="asc" name='sortBy' /><label>Price Low To High</label>
                    </HStack>
                    <HStack>
                        <input defaultChecked={sortBy === "desc"} type="radio" value="desc" name='sortBy' /><label>Price High To Low</label>
                    </HStack>
                </VStack>
            </RadioGroup>
            <br />
        </Box >

    )
}
const HotelSidebarSmall = () => {
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



export { HotelSidebarLarge, HotelSidebarSmall };