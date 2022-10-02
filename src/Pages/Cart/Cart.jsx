import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Divider,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./cart.css";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Components/Footer";
import { useRef } from "react";
import { getCartData, getPlacesData, removeFromBasket } from "../../Redux/AppRedux/action";
import { FaMobileAlt } from "react-icons/fa";

export const Cart = () => {
  const toast = useToast();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // dispatch(getPlacesData());
    dispatch(getCartData());
  }, [location.search]);
  const basket = useSelector((state) => state.AppReducer.basket);
  let totalPrice = 0;

  // console.log(basket, "basket")
  // const deleteFromCart = (id) => {
  //   if (alert(`Cart Item will be removed,item Id ${id}`)) {
  //     // let newBasket = basket.filter((item) => item.id !== id);
  //     dispatch(removeFromBasket(id))
  //       .then(() => {
  //         dispatch(getCartData());
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }
  // };
  //-----------------------------------------
  const deleteFromCart = (id, name) => {
    dispatch(removeFromBasket(id))
    dispatch(getCartData());
    toast({
      position: 'top',
      title: 'Removed Successfully.',
      description: `${name} hasbeen removed from the cart`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  };

  return (
    <>
      <br />
      {/* <>{basket.map((item) => {
        return (<Box>
          <Image key={item.id} src={item.Image} />
        </Box>)
      })}
      </> */}
      <Divider width="100%" />

      <Container maxW="90%" padding="1rem" className="top">
        {/* ----------------------------Header----------------------------- */}
        <Heading as="h2" size="2xl" padding="0.75rem">
          Basket
        </Heading>
        <Link to="/things">
          <Flex>
            <Box>
              <ArrowBackIcon />
            </Box>
            <Box>
              <u>See all things to do</u>
            </Box>
          </Flex>
        </Link>
        {/* -----------------------------Main Cart------------------------------ */}
        {basket?.length === 0 ? (
          <Heading>Your Basket is Empty!</Heading>
        ) : (
          <Box className="cart">
            <Flex direction="column">
              {/* -----------------------Left side for items added--------------------- */}
              {basket?.map((item) => {
                totalPrice = totalPrice + 2 * Number(item.price);
                return (
                  <Box key={item.id}>
                    <Flex gap="1rem">
                      <Box >
                        <Flex direction="column" p={2}>
                          <Box >
                            <img src={item.Image} alt="img" width="250px" />
                          </Box>
                          <Box>
                            <Box
                              // onClick={() => deleteFromCart(item.id)}
                              onClick={() => deleteFromCart(item.id, item.title)}
                              _hover={{ cursor: "pointer" }}
                            >
                              <b>
                                <u style={{ color: "red" }}>Remove</u>
                              </b>
                            </Box>
                          </Box>
                        </Flex>
                      </Box>
                      <Box>
                        <Flex direction="column" p={2}>
                          <Box>
                            <Heading size="md">
                              <b>{item.name}</b>
                            </Heading>
                          </Box>

                          <Box>
                            <Text fontWeight={"600"}>
                              {item.title}
                            </Text>
                            <Flex gap={10}>
                              <Box>
                                2 Adults * <b>₹{item.price}</b>
                              </Box>

                              <Box>
                                <b>Total <span style={{ color: "Red" }}> ₹{2 * item.price}</span></b>
                              </Box>
                            </Flex>
                          </Box>
                          <br />
                          <Box>
                            <Flex>
                              <Box alignItems={"flex-start"}>
                                <FaMobileAlt color='black' />
                              </Box>
                              <Box>Mobile Ticket Accepted</Box>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                    <br />
                    <Divider width="100%" />
                    <br />
                  </Box>
                );
              })}
              {/* -----------------------Right side for total amount------------------------ */}
              <Box p={8} shadow="md" borderWidth="1px" className="review">
                <Heading as="h2" size="lg" padding="0.75rem">
                  Review Order Details
                </Heading>
                <br />
                <Flex gap="8rem">
                  {/* ------------------------------headings-------------------------------- */}
                  <Box>
                    <Flex direction="column">
                      <Box>Booking Fee</Box>
                      <Box>Subtotal</Box>
                      <Divider color={"gray.500"} />
                      <Box>
                        <b>Total ({basket?.length})</b>
                      </Box>
                    </Flex>
                  </Box>
                  {/* -------------------------amounts-------------------------------- */}
                  <Box>
                    <Box> ₹0.00</Box>
                    <Box> ₹{totalPrice}</Box>
                    <Divider color={"gray.500"} />
                    <Box>
                      <b>₹{totalPrice}</b>
                    </Box>
                  </Box>
                </Flex>
                <br />
                <p style={{ fontSize: "12px", color: "gray" }}>
                  No additional taxes and fees
                </p>
                <Link to="/travellerdetails">
                  <Button
                    p={7}
                    colorScheme="#f2b203"
                    borderRadius="25px"
                    marginTop="5%"
                    color="black"
                    className="checkout-btn"
                  >
                    Checkout
                  </Button>
                </Link>
                <br />
                <Container>
                  <Box padding="5% 0%" textAlign="left">
                    <b>Reserve Now and Pay Later</b>
                  </Box>
                  <p className="unsure">
                    Unsure of your plans? You can reserve a spot and pay for it
                    later. Just click on "Checkout" to see more payment options.
                    <b>Learn more</b>
                  </p>
                </Container>
              </Box>
            </Flex>
          </Box>
        )
        }
      </Container >

      <Box className="bottom">
        <Box p={3}>
          <Heading as="h2" size="lg" padding="0.75rem">
            Book with Confidence
          </Heading>
        </Box>
        <Divider w="100%" color="gray" />
        <br />
        <Box>
          <Flex gap={5}>
            <Box>
              <Flex gap={2}>
                <Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-wallet2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                  </svg>
                </Box>
                <Box>
                  <Flex direction="column">
                    <Box>
                      <b>Lowest Price Guarantee</b>
                    </Box>
                    <Box>Find it cheaper? We'll refund the difference</Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex gap={2}>
                <Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-file-lock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224zM6.105 8.125A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175z" />
                    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                  </svg>
                </Box>
                <Box>
                  <Flex direction="column">
                    <Box>
                      <b>24/7 Global Support</b>
                    </Box>
                    <Box>Get the answers you need, when you need them</Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex gap={2}>
                <Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-headphones"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z" />
                  </svg>
                </Box>
                <Box>
                  <Flex direction="column">
                    <Box>
                      <b>Book Securely</b>
                    </Box>
                    <Box>We use SSL encryption to keep your data secure</Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex gap={2}>
                <Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </Box>
                <Box>
                  <Flex direction="column">
                    <Box>
                      <b>Call to Book</b>
                    </Box>
                    <Box>
                      We're here to help and happy to assist you with your
                      booking
                    </Box>
                    <Box>
                      <u>Call now: +1 855 275 5071</u>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

