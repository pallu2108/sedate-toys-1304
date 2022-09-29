import { Box } from '@chakra-ui/react'
import React from 'react'
import HotelCard from './HotelCard'

const HotelsList = () => {
    return (
        <Box width={"100%"}>
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
        </Box>
    )
}

export default HotelsList