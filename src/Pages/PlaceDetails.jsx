import { InfoOutlineIcon, RepeatClockIcon, TimeIcon } from '@chakra-ui/icons';
import {
    Box, Button, Divider, Flex, HStack, Image, ListItem, Text, UnorderedList, VStack, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    useToast,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaGlobe, FaMobileAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postCartData } from '../Redux/AppRedux/action';

const PlaceDetails = () => {
    const { id } = useParams();
    const toast = useToast()
    const [singlePlace, setSinglePlace] = useState({});
    const navigate = useNavigate();
    const place = useSelector(state => {
        // console.log(state.AppReducer.places, "state")
        return state.AppReducer.places
    });
    const dispatch = useDispatch();
    // const placeById = place.find((book) => book.id === Number(id));
    // console.log(id, "id", place, "place", placeById, "placeById")
    useEffect(() => {
        if (id) {
            const placeById = place.find((elem) => elem.id === Number(id));
            // console.log(place, placeById)
            placeById && setSinglePlace(placeById)
        }
    }, [place, id])
    // console.log(singlePlace)
    const cart = [];
    const current = new Date();
    return (
        <Box paddingY={"20px"} width={["100%", "80%"]} bgColor="white" margin={"auto"} color={"black"}>
            <Flex flexWrap={"wrap"} width={"100%"} justifyContent={"space-between"} >
                <Box width={["100%", "45%"]} marginX={"auto"} >
                    <Image w={["100%", "100%", "100%"]} src={singlePlace.Image} alt='' />
                </Box>
                <Box padding={"10px"} width={["100%", "50%"]} align={"left"} alignItems={"flex-start"} justifyContent={"flex-start"}>
                    <Text fontWeight={"700"} fontSize={["22px", "22px", "24px"]} align={"left"} paddingBottom={"5px"}>{singlePlace.title}</Text>
                    <Text fontWeight={"400"} decoration={"underline"} fontSize={["13px", "14px", "15px"]} align={"left"} paddingBottom={"5px"}>{singlePlace.by_way}</Text>
                    <HStack paddingY={1} alignSelf={"flex-start"} spacing={1}>
                        <Image w={["4%", "2.5%"]} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image w={["4%", "2.5%"]} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image w={["4%", "2.5%"]} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image w={["4%", "2.5%"]} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Image w={["4%", "2.5%"]} src='https://i.ibb.co/9NdJ5QQ/new-moon.png' alt='' />
                        <Text fontWeight={"500"}
                            fontSize={["14px"]}
                            lineHeight={"10px"}
                            alignItems={"center"} decoration={"underline"}>{singlePlace.reviews} reviews</Text>
                    </HStack>
                    <HStack paddingY={1} alignSelf={"flex-start"} justifyContent={"flex-start"} spacing={2}>
                        <Image w={["6%", "4%"]} backgroundColor={"#ffc1c1"} padding={"4px"} borderRadius={"50%"} src="https://i.ibb.co/gwYJT9q/heart-1.png" alt="" />
                        <Text fontSize={"12px"}>
                            Recommended by 99% of travellers
                        </Text><InfoOutlineIcon />
                    </HStack>
                    <Text paddingY={"3px"}>
                        {singlePlace.about_trip}
                    </Text>
                    <br />
                    <HStack justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
                        <VStack alignItems={"flex-start"} justifyContent={"flex-start"} lineHeight={"15px"}>
                            <Text fontSize={"12px"}>
                                from
                            </Text>
                            <Text fontSize={"30px"} fontWeight={"900"}>
                                ₹{singlePlace.price}
                            </Text>
                            <Text fontSize={"12px"}>
                                per adult (price varies by group size)
                            </Text>
                        </VStack>
                        <Button size='md' paddingX={"40px"} borderRadius={"20px"} bg="#f2b203" backgroundColor={"#f2b203"} color={"black"} onClick={() => {
                            toast({
                                position: 'top',
                                title: 'Added Successfully.',
                                description: "We've added trip to your account for you. Check Cart",
                                status: 'success',
                                duration: 3000,
                                isClosable: true,
                            })
                            return dispatch(postCartData(singlePlace))
                            navigate("/cart")
                        }}   >
                            Add to Basket
                        </Button>
                    </HStack>
                    <HStack paddingY={4} alignItems={"center"} justifyContent={"flex-start"} spacing={0.5}>
                        <Image width={"3%"} bgColor={"#fee39a"} borderRadius={"50%"} padding="5px" src='https://i.ibb.co/w0WCRfP/wallet.png' alt='' />
                        <Text fontWeight={"400"} fontSize={["13px", "14px", "15px"]} align={"left"}  >Lowest price guarantee • Free cancellation</Text>
                    </HStack>
                    <Divider borderColor={"gray"} />
                    <VStack paddingY={4} alignItems={"flex-start"} justifyContent={"flex-start"} spacing={0.5} >
                        <HStack>
                            <RepeatClockIcon />
                            <Text>Duration : {singlePlace.duration}</Text>
                        </HStack>
                        <HStack>
                            <TimeIcon />
                            <Text> Start time : {current.getDate()}/{current.getMonth() + 2}/{current.getFullYear()}</Text>
                        </HStack>
                        <HStack>
                            <FaMobileAlt color='black' />
                            <Text>Ticket type : Mobile</Text>
                        </HStack>
                        <HStack>
                            <FaGlobe color='black' />
                            <Text> {singlePlace.languages} </Text>
                        </HStack>
                    </VStack>

                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem borderBottom={"1px solid gray"}>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Highlights
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <UnorderedList>
                                    {/* {(singlePlace.highlight).map((item) => {
                                        return <ListItem key={item}>{item}</ListItem>
                                    })} */}
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem borderBottom={"1px solid gray"}>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        What's Included
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <UnorderedList>
                                    <ListItem>Breakfast</ListItem>
                                    <ListItem>Three nights accommodation (If tour booked with option including hotels)</ListItem>
                                    <ListItem>
                                        Transport by private, air-conditioned car
                                    </ListItem>
                                    <ListItem>
                                        Car Type : for one to two people, four-seater sedan
                                        Car Type : for three to four people, six-seater wagon
                                        Car Type : for five to ten people, ten-seater van
                                    </ListItem>
                                    <ListItem>
                                        All sightseeing with private local guides
                                    </ListItem>
                                    <ListItem>
                                        Daily hotel breakfast (If tour booked with option including hotels)
                                    </ListItem>
                                    <ListItem>
                                        Battery bus ride to and from Taj Mahal parking lot up to Taj Mahal monument
                                    </ListItem>
                                    <ListItem>
                                        Fuel surcharge
                                    </ListItem>
                                    <ListItem>
                                        All taxes and service charges
                                    </ListItem>
                                    <ListItem>
                                        All applicable hotel taxes
                                    </ListItem>
                                    <ListItem>
                                        Hotel or airport pick-up and drop-off
                                    </ListItem>
                                    <ListItem>
                                        Bottles of mineral water and soft drinks during journeys
                                    </ListItem>
                                    <ListItem>
                                        Personal care and attention
                                    </ListItem>
                                    <ListItem>
                                        Pickup offered from airport, railway station, hotel or any pickup location in Delhi, Noida, Gurugram
                                    </ListItem>
                                    <ListItem>
                                        Private Tour
                                    </ListItem>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem borderBottom={"1px solid gray"}>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Accessibility
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <UnorderedList>
                                    <ListItem>Wheelchair accessible</ListItem>
                                    <ListItem>Stroller accessible</ListItem>
                                    <ListItem>Near public transportation</ListItem>
                                    <ListItem>Transportation is wheelchair accessible</ListItem>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem borderBottom={"1px solid gray"}>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Cancellation Policy
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text>For a full refund, cancel at least 24 hours in advance of the start date of the experience.</Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem borderBottom={"1px solid gray"}>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Help
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text>
                                    If you have questions about this tour or need help making your booking, we’d be happy to help. Just call the number below and reference the product code: 7667P2
                                </Text>
                                <Text>
                                    000-0800-100-6999
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Flex>
        </Box>
    )
}

export default PlaceDetails