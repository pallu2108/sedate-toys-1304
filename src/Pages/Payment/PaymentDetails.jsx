import { Box, Button, Input, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { emptyBasket, getCartData } from '../../Redux/AppRedux/action'
import "../Payment/payment.css"
export const PaymentDetails = () => {
    const [name, setName] = useState("")
    let totalPrice = 0;
    const current = new Date();

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();
    useEffect(() => {
        // dispatch(getPlacesData());
        dispatch(getCartData());
    }, [location.search]);
    const basket = useSelector((state) => state.AppReducer.basket);
    console.log(basket, "1304")
    const handleSubmit = (event) => {
        event.preventDefault();
        toast({
            position: 'top',
            title: 'Booking Successfull.',
            description: `Your Booking Id is ${Date.now()}`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
        dispatch(emptyBasket(basket));
        setTimeout(() => {
            navigate("/")
        }, 3000);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='main-div'>
                <div className='sub-div-1'>
                    <div className='sub-div-1-A'>
                        <img className='logo' src='https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg' alt='' />
                    </div>
                    {/* <div className='sub-div-1-B'>
            <div >
                <Input className='line-1' ></input>
                <p className='line-1-1'>Traveller Details</p>
            </div>
            <div className='line-div-2'>
            <Input className='line-2' ></input>
                <p className='line-1-1'>Payment Details</p>
            </div>
        </div> */}
                </div>
                {/* <hr className='main-line'></hr> */}
                <div className='sub-div-2'>
                    <div className='sub-div-2-A'>
                        <h1 className='header-2-A'>Payment Details</h1>
                        {/* <Input className='input-div-2' placeholder='Checkout securely - it takes only a few minutes.'/> */}
                        <p>This form is encrypted and your information is always guaranteed secure.</p>
                    </div>
                    <div className='sub-div-2-B'>
                        <div className='sub-div-2-BA'>
                            <h1 className='header-2-A'>Credit card</h1>
                            <div className='contact-div'>
                                <div className='email-div'>
                                    <h1 className='header-2-card'>Cardholder Name</h1>
                                    <Input className='card-input' value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                {/* <div className='phone-div'>
                    <h1 className='header-2-email'>Phone Number</h1>
                        <Input className='email-input'/>
                    </div> */}
                            </div>
                            {/* <Input type="checkbox"/>
                <label className='label-1'>You will receive  text message updates  about your booking.</label> */}

                            {/* <h1 className='header-2-A'>Travel Details</h1>
                <h1 className='heading-2'>Lead Traveller</h1> */}
                            <div className='contact-div'>
                                <div className='email-div'>
                                    <h1 className='header-2-email'>Credit/Debit Card Number</h1>
                                    <Input className='card-input' max={16} />
                                </div>
                                {/* <div className='phone-div'>
                    <h1 className='header-2-email'>Last Name</h1>
                        <Input className='email-input'/>
                    </div> */}
                            </div>

                            {/* <h1 className='header-2-A'>Tours Specifics</h1>
                <h1 className='heading-2'>Hotel Pickup</h1>
                <h1 className='heading-3'>The provider offers pickup from select hotels</h1> */}
                            <div className='contact-div'>
                                <div className='email-div'>
                                    <h1 className='header-2-email'>Expiration Date</h1>
                                    <Input className='code-input' />
                                </div>
                                <div className='phone-div'>
                                    <h1 className='header-2-email'>   &nbsp;</h1>
                                    <Input className='code-input' />
                                </div>
                                <div className='email-div'>
                                    <h1 className='header-2-email1'>CVC Code</h1>
                                    <Input className='code-input1' max={3} />
                                </div>
                            </div>
                            <h1 className='header-2-A2'>Billing Address</h1>
                            <div className='contact-div'>
                                <div className='email-div'>
                                    <h1 className='header-2-email'>Country</h1>
                                    <Input className='add-input' />
                                </div>
                                <div className='phone-div'>
                                    <h1 className='header-2-email'>Postal/Zip COde</h1>
                                    <Input className='add-input' />
                                </div>
                            </div>
                            <Input type="checkbox" />
                            <label className='label-1'>Add this card to your account for future use.</label>

                            {/* <button className='submit'>Submit</button> */}
                            <Button color={"white"} colorScheme={"black"} type="submit" placeholder='Submit' className='submit' >Submit</Button>
                        </div>

                        <div className='sub-div-2-BB'>
                            <h1 className='review-heading'>Review Order Details</h1>
                            <Box gap={1}>
                                {basket.map((item) => {
                                    totalPrice = Math.ceil(totalPrice + 2 * Number(item.price));
                                    return (<div className='review-order'>

                                        <div className='description-div'>
                                            <img className='descr-img' src={item.Image} alt={item.title} />
                                            <div className='descr'>
                                                <h1 >{item.title}</h1>
                                                <p className='descr-para1'>Car Only - 2.30 am </p>
                                                <p className='descr-para'> {current.getDate()}/{current.getMonth() + 2}/{current.getFullYear()}</p>
                                                <p className='descr-para'>2 Adults</p>
                                                <p className='descr-para'>Non-refundable</p>
                                            </div>
                                        </div>
                                    </div>)
                                })}
                            </Box>
                            <div className='description-div-2'>
                                <div className='descr-div2-1'>
                                    <p className='descr-para1'>Booking Fee</p>
                                    <p className='descr-para1'>Subtotal</p>
                                    <p className='descr-para2'>Total :</p>
                                </div>
                                <div className='descr-div2-2'>
                                    <p className='descr-para1'>₹0.00</p>
                                    <p className='descr-para1'>₹ {totalPrice}</p>
                                    <p className='descr-para2'>₹ {totalPrice}</p>
                                </div>
                            </div>
                            <div className='booking'>
                                <h1 className='review-heading'>Book with confidence</h1>
                                <hr className='hr-1'></hr>
                                <p className='main-para1'> 1. &nbsp;&nbsp;&nbsp;&nbsp; Lowest price guarantee</p>
                                <p className='main-para2'>Find it cheaper? We'll refund the</p>
                                <p className='main-para2'>difference</p>
                                <p className='main-para1'> 2. &nbsp;&nbsp;&nbsp;&nbsp; Privacy Protection</p>
                                <p className='main-para2'>We use SSL encryption to keep your</p>
                                <p className='main-para2'>data secure</p>
                                <p className='main-para1'> 3. &nbsp;&nbsp;&nbsp;&nbsp; 24/7 global support</p>
                                <p className='main-para2'>Get the answers you need, when</p>
                                <p className='main-para2'>you need them</p>
                                <p className='main-para1'> 4. &nbsp;&nbsp;&nbsp;&nbsp; Give us a call</p>
                                <p className='main-para2'>We'd be happy to help you out with</p>
                                <p className='main-para2'>your booking</p>
                                <p className='main-para2'>Call now:000-0800-100-6999</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
        </form >
    )
}


