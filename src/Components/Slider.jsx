import React, { useState } from 'react';
import { Box, Button, Flex, IconButton, Spacer, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import { FaHotel } from 'react-icons/fa';
import { GiThink } from 'react-icons/gi';
import { IoIosAdd, IoMdHome } from 'react-icons/io';
import { ImSpoonKnife } from 'react-icons/im';
import { BsFillChatRightTextFill } from 'react-icons/bs';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 100,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [slider, setSlider] = useState(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  return (
    <Box
      position={'relative'}
      height={"100px"}
      width={'full'}
      overflow={'hidden'}
      pb={20}
      mb={200}>
      
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        <Flex align={"center"} justify="center">
      <NavLink to={"/hotels"}>
            <Button rightIcon={<FaHotel color='gray.300' />} colorScheme='white' color={"black"} variant='outline'>
              Hotels
            </Button>
          </NavLink>
          <NavLink>
            <Button rightIcon={<GiThink color='gray.300' />} colorScheme='white' color={"black"} variant='outline'>
              Things to do
            </Button>
          </NavLink>
          </Flex>
          <NavLink to={"/"} >
            <Button rightIcon={<IoMdHome color='gray.300' />} colorScheme='white' color={"black"} variant='outline'>
              Holidays Home
            </Button>
          </NavLink>
          <NavLink to={"/restaurants"} >
            <Button rightIcon={<ImSpoonKnife color='gray.300' />} colorScheme='white' color={"black"} variant='outline'>
              Resturants
            </Button>
          </NavLink>
          <NavLink to={"/"} >
            <Button rightIcon={<BsFillChatRightTextFill color='gray.300' />} colorScheme='white' color={"black"} variant='outline'>
              Travels Fromus
            </Button>
          </NavLink>
          <NavLink to={"/"} >
            <Button  rightIcon={<IoIosAdd color='gray.300' />} colorScheme='white' color={"black"} variant='outline'>
              More
            </Button>
          </NavLink>

      </Slider>
    </Box>
  );
}