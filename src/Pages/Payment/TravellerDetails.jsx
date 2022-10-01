import React from 'react'
import "../Payment/payment.css"
import { Link } from 'react-router-dom'
const TravelDetails = () => {
  return (
    <div className='main-div'>
      <div className='sub-div-1'>
        <div className='sub-div-1-A'>
            <img className='logo' src='https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg' alt=''/>
        </div>
        <div className='sub-div-1-B'>
            <div >
                <input className='line-1' ></input>
                <p className='line-1-1'>Traveller Details</p>
            </div>
            <div className='line-div-2'>
            <input className='line-2' ></input>
                <p className='line-1-1'>Payment Details</p>
            </div>
        </div>
      </div>
      <hr className='main-line'></hr>
      <div className='sub-div-2'>
        <div className='sub-div-2-A'>
           <h1 className='header-2-A'>Secure Checkout</h1> 
           <input className='input-div-2' placeholder='Checkout securely - it takes only a few minutes.'/>
        </div>
        <div className='sub-div-2-B'>
            <div className='sub-div-2-BA'>
                <h1 className='header-2-A'>Contact Details</h1>
                <div className='contact-div'>
                    <div className='email-div'>
                        <h1 className='header-2-email'>Email</h1>
                        <input className='email-input'/>
                    </div>
                    <div className='phone-div'>
                    <h1 className='header-2-email'>Phone Number</h1>
                        <input className='email-input'/>
                    </div>
                </div>
                <input type="checkbox"/>
                <label className='label-1'>You will receive  text message updates  about your booking.</label>

                <h1 className='header-2-A'>Travel Details</h1>
                <h1 className='heading-2'>Lead Traveller</h1>
                <div className='contact-div'>
                    <div className='email-div'>
                        <h1 className='header-2-email'>First Name</h1>
                        <input className='email-input'/>
                    </div>
                    <div className='phone-div'>
                    <h1 className='header-2-email'>Last Name</h1>
                        <input className='email-input'/>
                    </div>
                </div>
                
                <h1 className='header-2-A'>Tours Specifics</h1>
                <h1 className='heading-2'>Hotel Pickup</h1>
                <h1 className='heading-3'>The provider offers pickup from select hotels</h1>
                <div className='contact-div'>
                    <div className='email-div'>
                        {/* <h1 className='header-2-email'>First Name</h1> */}
                        <input className='location-input' placeholder='Enter your pickup location'/>
                    </div>
                </div>
                <div className='email-div'>
                        <h1 className='header-2-email'>Tour/Activity Language</h1>
                        <input className='activity-input' placeholder='English-Guide'/>
                 </div>
                 <h1 className='heading-4'>Promo Code</h1>
                 <hr className='main-line2'></hr>
                 <p className='para-1'>Enter Promo Code</p>

              <Link to="/payment-details"><button className='next'>Next</button></Link>
            </div> 
            
            <div className='sub-div-2-BB'>
                <div className='review-order'>
                    <h1 className='review-heading'>Review Order Details</h1>
                    <div className='description-div'>
                        <img className='descr-img' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5a/ea/82/caption.jpg?w=300&h=300&s=1' alt=''/>
                        <div className='descr'>
                            <h1 className='descr-head'>All Inclusive Day Trip</h1>
                            <h1 className='descr-head'>to Taj Mahal, Agra Fort</h1>
                            <h1 className='descr-head'>and Baby Taj from</h1>
                            <h1 className='descr-head'>Delhi by Car</h1>
                            <p className='descr-para1'>Car Only - 2.30 am </p>
                            <p className='descr-para'>Sunday, 2 October, 2022 </p>
                            <p className='descr-para'>2 Adults</p>
                            <p className='descr-para'>Non-refundable</p>
                        </div>
                       </div>
                       <div className='description-div-2'>
                      <div className='descr-div2-1'>
                        <p className='descr-para1'>Booking Fee</p>
                        <p className='descr-para1'>Subtotal</p>
                        <p className='descr-para2'>Total :</p>
                      </div>
                      <div className='descr-div2-2'>
                      <p className='descr-para1'>₹0.00</p>
                        <p className='descr-para1'>₹9,224</p>
                        <p className='descr-para2'>₹9,224</p>
                        </div>  
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
  )
}

export default TravelDetails;
