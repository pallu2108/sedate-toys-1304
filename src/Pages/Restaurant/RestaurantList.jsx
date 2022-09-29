import { Box } from '@chakra-ui/react'
import React from 'react'
import RestaurantCard from './RestaurantCard'

const RestaurantList = () => {
    return (
        <Box width={"100%"} >
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </Box>
    )
}

export default RestaurantList