import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Restaurants.module.css";
import Footer from "../Components/Footer";
import { getRestuarant } from "../Redux/AppRedux/action";
import HotelCard from "./Hotel/HotelCard";
import Question from "../Components/Question";


export const HotelSearch = () => {
  let dispatch = useDispatch();
  const ResturantsData = useSelector((store) => store.AppReducer.restaurant);
  const [sort, setSort] = useState("");
   
  const handleChangerating = (e) => {
    e.preventDefault();
    setSort(e.target.value);

    if (e.target.value === "rlth") {
      ResturantsData.sort((a, b) => {
        return Number(a.rating) - Number(b.rating);
      });
    } else if (e.target.value === "rhtl") {
      ResturantsData.sort((a, b) => {
        return Number(b.rating) - Number(a.rating);
      });
    }
  };
  const handleChangeprice= (e) => {
    e.preventDefault();
    setSort(e.target.value);
    if (e.target.value === "phtl") {
        ResturantsData.sort((a, b) => {
          return Number(b.price) - Number(a.price);
        });
      }
     else if (e.target.value === "phtl") {
      ResturantsData.sort((a, b) => {
        return Number(b.price) - Number(a.price);
      });
    }
  };


  useEffect(() => {
    dispatch(getRestuarant);
  }, [dispatch]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <p>Restaurants in Delhi</p>
        </div>
        <div className={styles.buttomDiv}>

          <div className={styles.resDiv}>
            <div className={styles.sorting}>
                <label>Short By Rating</label>
              <select onChange={handleChangerating}>
                <option value="rlth">Low to High</option>
                <option value="rhtl">High to Low</option>

              </select>
            </div>
            <div className={styles.sorting}>
            <label>Short By Rating</label>
              <select onChange={handleChangeprice}>
                <option value="plth">Low to High</option>
                <option value="phtl">High to Low</option>
              </select>
            </div>
            <div className={styles.ResturantsDataingDiv}>
            {ResturantsData.filter((r) =>
                    r.type.includes("Hotel")).map((rest, ind) => {
                return (
                  <div key={rest.id} className={styles.res}>
                    <HotelCard imageSrc={rest.imageSrc} name={rest.name} id={rest.id} price={rest.price} rating={rest.rating}/>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Question/>
      <Footer />
    </>
  );
};
