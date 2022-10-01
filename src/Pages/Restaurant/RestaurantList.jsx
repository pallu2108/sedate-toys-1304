import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getRestaurantData } from '../../Redux/AppRedux/action';
import RestaurantCard from './RestaurantCard'

const RestaurantList = () => {
    const [searchParam] = useSearchParams();
    const location = useLocation();

    const restaurant = useSelector((state) => {
        // console.log(state.AppReducer.hotel)
        return state.AppReducer.restaurant
    });

    const dispatch = useDispatch();
    useEffect(() => {

        if (location || restaurant.length === 0) {
            const sortBy = searchParam.get('sortBy');
            let getRestaurantParams = {
                params: {
                    type: searchParam.getAll('type'),
                    _sort: sortBy && "review",
                    _order: sortBy 
                },
            };
            console.log(getRestaurantParams)
            dispatch(getRestaurantData(getRestaurantParams));
        }
    }, [location.search])
    return (
        <Box width={"100%"} >
            {restaurant.length > 0 && restaurant.map((item) => {
                return <RestaurantCard key={item.id} id={item.id} name={item.name} mainImage={item.mainImage} review={item.review} review1={item.review1} review2={item.review2} type={item.type} />;
            })}
        </Box>
    )
}

export default RestaurantList