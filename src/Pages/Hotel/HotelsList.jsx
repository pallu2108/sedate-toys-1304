import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getHotelData } from '../../Redux/AppRedux/action';
import HotelCard from './HotelCard'

const HotelsList = () => {
    const [searchParam] = useSearchParams();
    const location = useLocation();

    const hotels = useSelector((state) => {
        // console.log(state.AppReducer.hotel)
        return state.AppReducer.hotel
    });

    const dispatch = useDispatch();
    useEffect(() => {

        if (location || hotels.length === 0) {
            const sortBy = searchParam.get('sortBy');
            let getBookParams = {
                params: {
                    type: searchParam.getAll('type'),
                    rating: searchParam.getAll('rating'),
                    _sort: sortBy && "price",
                    _order: sortBy
                },
            };
            console.log(getBookParams)
            dispatch(getHotelData(getBookParams));
        }
    }, [location.search])
    return (
        <Box width={"100%"}>
            {/* <h3>Book List</h3> */}
            {hotels.length > 0 && hotels.map((item) => {
                return <HotelCard key={item.id} free_wifi={item.free_wifi} free_parking={item.free_parking} Reserve_payAtStay={item.Reserve_payAtStay} free_Cancellation={item.free_Cancellation} name={item.name} imageSrc={item.imageSrc} price={item.price} id={item.id} location={item.location} reviews={item.reviews} rating={item.rating} best_site={item.best_site} best_site_url={item.best_site_url} />;
            })}
        </Box>
    )
}

export default HotelsList