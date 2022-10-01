import { Box, Divider, HStack, Image, Input, InputGroup, InputLeftAddon, StackDivider, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'
import { HotelSidebarLarge, HotelSidebarSmall } from './HotelSidebar';
import HotelsList from './HotelsList';

const Hotel = () => {
    const [isLargerThan1280px] = useMediaQuery('(min-width: 1280px)');
    return (
        <Box paddingY={"10px"}>
            <Box position={"relative"} >
                <Image filter={"blur(1.5px)"} width="100%" height={"250px"} overflow={"visible"} src='https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/GTYSdDW/lovatnet-lake-beautiful-nature-norway_rv-0czoz4l_thumbnail-1080_01.png' alt='' />
                <Box position={"absolute"} bottom="20" width={"100%"} margin={"auto"} alignItems={"center"} justifyItems={"center"}>
                    <Text padding={"20px"} align={"center"} color={"white"} fontSize={"22px"} fontWeight={"500"} > Enter dates to find the best prices</Text>
                    <HStack justify={"center"} gap={"10"} width={["80%", "70%", "60%"]} margin={"auto"}>
                        <HStack bg={"green"} borderRadius={"5px"} width={"25%"}>
                            <InputGroup borderRadius={"5px"} marginLeft={"8px"} backgroundColor={"white"} color="black">
                                <InputLeftAddon fontSize={["10px", "11px", "13px"]} children='Check In' />
                                <Divider orientation='vertical' />
                                <Input fontSize={["10px", "11px", "13px"]} type='date' />
                            </InputGroup>
                        </HStack>

                        <HStack bg={"red"} borderRadius={"5px"} width={"25%"}>
                            <InputGroup borderRadius={"5px"} marginLeft={"8px"} backgroundColor={"white"} color="black">
                                <InputLeftAddon fontSize={["10px", "11px", "13px"]} children='Check Out' />
                                <Divider orientation='vertical' />
                                <Input fontSize={["10px", "11px", "13px"]} type='date' />
                            </InputGroup>
                        </HStack>

                        <HStack bg={"gray"} borderRadius={"5px"} width={"25%"}>
                            <InputGroup borderRadius={"5px"} marginLeft={"8px"} backgroundColor={"white"} color="black">
                                <InputLeftAddon fontSize={["10px", "11px", "13px"]} children={<Image width={["50%", "60%", "80%"]} src='https://i.ibb.co/vXG4f7W/team.png' alt='' />} />
                                <Divider orientation='vertical' />
                                <Input fontSize={["10px", "11px", "13px"]} type='text' disabled outline={"none"} cursor="pointer" fontWeight={"500"} color="black" value="1 Room,2 Adults,0 Childrens" />
                            </InputGroup>
                        </HStack>
                    </HStack>
                </Box>
            </Box>
            {isLargerThan1280px ? < HStack width={"75%"} padding="10px" margin={"auto"} alignItems={"flex-start"} justifyContent={"space-evenly"}>
                {isLargerThan1280px ? <HotelSidebarLarge /> : <HotelSidebarSmall />}
                <HotelsList />
            </HStack>
                :
                <VStack width={"100%"} alignItems={"flex-start"} >
                    {isLargerThan1280px ? <HotelSidebarLarge /> : <HotelSidebarSmall />}
                    <HotelsList />
                </VStack>}
        </Box>
    )
}

export default Hotel