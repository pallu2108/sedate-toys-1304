import { Box, HStack, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'
import RestaurantList from './RestaurantList';
import { RestaurantSidebarLarge, RestaurantSidebarSmall } from './RestaurantSideaBar';

const Restaurant = () => {
    const [isLargerThan1280px] = useMediaQuery('(min-width: 1280px)');
    return (
        <Box>
            {isLargerThan1280px ? < HStack width={"75%"} padding="10px" margin={"auto"} alignItems={"flex-start"} justifyContent={"space-evenly"}>
                {isLargerThan1280px ? <RestaurantSidebarLarge /> : <RestaurantSidebarSmall />}
                <RestaurantList />
            </HStack>
                :
                <VStack width={"100%"} alignItems={"flex-start"} >
                    {isLargerThan1280px ? <RestaurantSidebarLarge /> : <RestaurantSidebarSmall />}
                    <RestaurantList />
                </VStack>}
        </Box>
    )
}

export default Restaurant