import { useEffect } from "react";
import { GoPrimitiveDot } from "react-icons/go"
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import Footer from "../Components/Footer"
import { getPlacesData } from "../Redux/AppRedux/action";


import "./home.css"
function Home() {
  const location = useLocation();

  const places = useSelector((state) => {
    // console.log(state.AppReducer.hotel)
    return state.AppReducer.places
  });
  // console.log(places, "places")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlacesData());
  }, [location.search])

  return (
    <>
      <div className="main-div">
        <div></div>
        <div></div>
        <div className="top-section">
          <img className="top-image" src="https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp" alt="" />
          <input className="where-to" placeholder="Where to?" />
        </div>
        <div className="mid-sec-1">
          <h1 className="header-1">Top experiences on Tripadvisor</h1>
          <div className="mid-sec-1-A">

            {places.length > 0 && places.map((item) => {
              return <div key={item.id} className="mid-sec-1-AA">
                <img className="image-mid" src={item.Image} alt="" />
                <Link to={`/${item.id}`}> <h2 className="content-1">{item.title}</h2></Link>
                <p className="dot-1"><GoPrimitiveDot className="dot" />
                  <GoPrimitiveDot className="dot" />
                  <GoPrimitiveDot className="dot" />
                  <GoPrimitiveDot className="dot" />
                  <GoPrimitiveDot className="dot" />
                </p>
                <h2 className="price-tag">from ₹{item.price} per adult </h2>
              </div>
            })}
          </div>
        </div>
        <div className="mid-sec-B">
          <div className="mid-sec-BB">
            <div className="mid-sec-BB1">
              <h1 className="header-21">Get out there</h1>
              <p className="para-21">Best of the Best tours, attractions & activities you won't want to miss.</p>
              <button className="button-1">see the list</button>
            </div>
            <div className="mid-sec-BB2">
              <img className="image-2" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1" alt="" />
            </div>
          </div>
        </div>
        <div className="mid-sec-2">
          <h1 className="header-1">Scenic autumn spots</h1>
          <div className="mid-sec-1-A">
            <div className="mid-sec-1-AA">
              <img className="image-mid-1" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/68/2b/0f/merkmal-des-dal-sees.jpg?w=300&h=300&s=1" alt="" />
              <h2 className="content-2">Dal Lake</h2>
              <p className="dot-1"><GoPrimitiveDot className="dot" />
                <GoPrimitiveDot className="dot" />
                <GoPrimitiveDot className="dot" />
                <GoPrimitiveDot className="dot" />
                <GoPrimitiveDot className="dot" />
              </p>
              <h2 className="tags">Bodies of Water</h2>
            </div>
            <div className="mid-sec-1-AA">
              <img className="image-mid-1" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/fa/d8/fd/photo2jpg.jpg?w=300&h=300&s=1" alt="" />
              <h2 className="content-2">Paradise Beach</h2>
              <p className="dot-1"><GoPrimitiveDot className="dot" />
                <GoPrimitiveDot className="dot" />
                <GoPrimitiveDot className="dot" />
                <GoPrimitiveDot className="dot" />
                <GoPrimitiveDot className="dot-2" />
              </p>
              <h2 className="tags">Beaches</h2>
            </div>
            <div className="mid-sec-1-AA">
              <img className="image-mid-1" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b0/31/f4/the-beaut.jpg?w=300&h=300&s=1" alt="" />
              <h2 className="content-2">Double Decker Livng Root Bridge</h2>
              {/* <h2 className="content-1">From New Delhi</h2> */}
              <p className="dot-1"><GoPrimitiveDot className="dot" />
                <GoPrimitiveDot className="dot" />
                <GoPrimitiveDot className="dot" />
                <GoPrimitiveDot className="dot" />
                <GoPrimitiveDot className="dot" />
              </p>
              <h2 className="tags">Bridges</h2>
            </div>
            <div className="mid-sec-1-AA">
              <img className="image-mid-1" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f5/cb/a2/the-morning-show.jpg?w=300&h=300&s=1" alt="" />
              <h2 className="content-2">Tiger Hill</h2>
              <p className="dot-1"><GoPrimitiveDot className="dot" />
                <GoPrimitiveDot className="dot" />
                <GoPrimitiveDot className="dot" />
                <GoPrimitiveDot className="dot" />
                <GoPrimitiveDot className="dot-2" />
              </p>
              <p className="tags">Lookouts </p>
            </div>
          </div>
        </div>
        <div className="mid-sec-3">
          <h1 className="header-2">More to explore</h1>
          <div className="mid-sec-3-A">
            <div className="mid-sec-3-AA">
              <img className="image-mid-sec-3" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/ab/94/ba/2de5214a-d5dc-42d2.jpg?w=400&h=-1&s=1" alt="" />
              <p className="para-11">From Tripadvisor</p>
              <h1 className="content-52">5 beautiful hill stations in South India</h1>
            </div>
            <div className="mid-sec-3-AA">
              <img className="image-mid-sec-3" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/20/d4/45276d36-cc36-4a32.jpg?w=400&h=-1&s=1" alt="" />
              <p className="para-11">From Tripadvisor</p>
              <h1 className="content-52">11 beautiful places in India that have to</h1>
              <h1 className="content-52">be seen to be delievered</h1>
            </div>
            <div className="mid-sec-3-AA">
              <img className="image-mid-sec-3" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/2e/9a/2520956e-5665-4e9f.jpg?w=400&h=-1&s=1" alt="" />
              <p className="para-11">From Tripadvisor</p>
              <h1 className="content-52">Best time to visit Dubai for great</h1>
              <h1 className="content-52">weather and deals</h1>
            </div>
          </div>
        </div>
        <div className="mid-sec-4">
          <h1 className="header14">Dream your Next Trip</h1>
          <h1 className="header15">Weekend Gateways from Kalyan</h1>
          <div className="mid-sec-4-A">
            <div className="mid-sec-4-AA">
              <img className="image4A" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/59/ac/b6/lavasa-international.jpg?w=300&h=300&s=1" alt="" />
              <h1 className="header16">Pune,India</h1>
            </div>
            <div className="mid-sec-4-AA">
              <img className="image4A" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/22/31/ba/the-climb-to-the-fort.jpg?w=300&h=300&s=1" alt="" />
              <h1 className="header16">Nashik,India</h1>
            </div>
            <div className="mid-sec-4-AA">
              <img className="image4A" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ab/40/f8/very-beautiful-hill-station.jpg?w=300&h=300&s=1" alt="" />
              <h1 className="header16">Mahabaleshwar,</h1>
              <h1 className="header17">India</h1>
            </div>
            <div className="mid-sec-4-AA">
              <img className="image4A" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/01/alibaug.jpg?w=300&h=300&s=1" alt="" />
              <h1 className="header16">Alibaug,India</h1>
            </div>
          </div>
        </div>
        <div className="mid-sec-4">
          <h1 className="header15">Top destination for your next holiday</h1>
          <div className="mid-sec-4-A">
            <div className="mid-sec-4-AA">
              <img className="image4A" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6a/ff/2a/caption.jpg?w=300&h=300&s=1&cx=7014&cy=3760&chk=v1_14690e40614ca9b48b73" alt="" />
              <h1 className="header16">Dubai,United</h1>
              <h1 className="header17">Arab Emirates</h1>
            </div>
            <div className="mid-sec-4-AA">
              <img className="image4A" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d2/2f/7a/palace-from-the-outside.jpg?w=300&h=300&s=1" alt="" />
              <h1 className="header16">Bengaluru,India</h1>
            </div>
            <div className="mid-sec-4-AA">
              <img className="image4A" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/80/d7/80/caption.jpg?w=300&h=300&s=1" alt="" />
              <h1 className="header16">Pune,India</h1>
              {/* <h1 className="header17">India</h1> */}
            </div>
            <div className="mid-sec-4-AA">
              <img className="image4A" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=300&h=300&s=1" alt="" />
              <h1 className="header16">Hyderabad,India</h1>
            </div>
          </div>
        </div>
        <div className="mid-sec-5">
          <h1 className="header14">Home Rentals Near You</h1>
          <div className="mid-sec-5-A">
            <div className="mid-sec-5-AA">
              <h1 className="header18">We think you'd enjoy</h1>
              <h1 className="header18">these homes for a quick</h1>
              <h1 className="header18">trip out of town.</h1>
            </div>
            <div className="mid-sec-5-AA">
              <img className="image-mid-5" src="https://media-cdn.tripadvisor.com/media/vr-splice-j/07/20/99/ab.jpg" alt="" />
              <h1 className="header19">Rentals in Khandala</h1>
              <h1 className="header20">52 rentals</h1>
            </div>
            <div className="mid-sec-5-AA">
              <img className="image-mid-5" src="https://media-cdn.tripadvisor.com/media/vr-splice-j/02/b3/61/da.jpg" alt="" />
              <h1 className="header19">Rentals in Nashik</h1>
              <h1 className="header20">34 rentals</h1>
            </div>
            <div className="mid-sec-5-AA">
              <img className="image-mid-5" src="https://media-cdn.tripadvisor.com/media/vr-splice-j/07/aa/de/04.jpg" alt="" />
              <h1 className="header19">Rentals in Igatpuri</h1>
              <h1 className="header20">16 rentals</h1>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
        <div></div>
      </div>
    </>
  )
}
export default Home;