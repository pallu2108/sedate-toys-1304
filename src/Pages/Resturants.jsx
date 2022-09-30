import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Restaurants.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Menu,
  MenuButton,
  Button,
  MenuOptionGroup,
  MenuList,
  MenuItemOption,
  MenuDivider,
} from "@chakra-ui/react";
import Footer from "../Components/Footer";
import { getRestuarant } from "../Redux/AppRedux/action";
import HotelCard from "./Hotel/HotelCard";


const Restaurants = () => {
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

  console.log(sort,ResturantsData,77777777);
//   console.log(price,99999999999999999999)
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
              {ResturantsData.map((rest, ind) => {
                return (
                  <div key={rest.id} className={styles.res}>
                    <HotelCard imageSrc={rest.imageSrc} name={rest.name} id={rest.id} price={rest.price} rating={rest.rating}/>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.faq}>
          <p>Frequently asked Question</p>
          <Accordion allowToggle width="xxl">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    What are the best restaurants in Delhi that deliver?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Some of the most popular restaurants in Delhi that deliver are:
                <ul>
                  <li> Three Kitchens Restaurant and Bar</li>
                  <li> MoMo Cafe - Courtyard Delhi Chakan</li>
                  <li> Malaka Spice</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    What are the best restaurants in Delhi that provide takeaway?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Some of the most popular restaurants in Delhi that provide
                takeaway are:
                <ul>
                  <li>Spice Kitchen</li>
                  <li>Alto Vino</li>
                  <li>Mosaic</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    What are the most popular restaurants in Delhi?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                The best restaurants in Delhi include:
                <li>Paasha</li>
                <li>Alto Vino</li>
                <li>Ukiyo</li>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    What are the best restaurants in Delhi for families with
                    children?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Some of the best restaurants in Delhi for families with children
                include:
                <ul>
                  <li>The Market</li>
                  <li>Feast</li>
                  <li>Spice Kitchen</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    What are the best restaurants in Delhi for cheap eats?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Some of the most popular restaurants in Delhi for cheap eats
                include:
                <ul>
                  <li>JJ Garden Vada Pav</li>
                  <li> Vohuman Cafe</li>
                  <li>Marzorin</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Restaurants };



// if (e.target.value === "Rlth") {
//     ResturantsData.sort((a, b) => {
//       return Number(a.rating) - Number(b.rating);
//     });
//   }
//   else if (e.target.value === "Rhtl") {
//     ResturantsData.sort((a, b) => {
//       return Number(b.rating) - Number(a.rating);
//     });
//   }
//   else if (e.target.value === "PLTH") {
//       ResturantsData.sort((a, b) => {
//         return Number(b.price) - Number(a.price);
//       });
//   }
//   else if (e.target.value === "PHTL") {
//       ResturantsData.sort((a, b) => {
//         return Number(b.price) - Number(a.price);
//       });
//   }


//          <Box>
//         <Menu closeOnSelect={false}>
//   <MenuButton as={Button} colorScheme='blue'>
//     Filter
//   </MenuButton>
//   <MenuList minWidth='240px'>
//     <MenuOptionGroup  title='Short by Rating' type='radio'>
//       <MenuItemOption value='Rhtl'>High to Low</MenuItemOption>
//       <MenuItemOption value='Rhtl'>Low to High</MenuItemOption>
//     </MenuOptionGroup>
//     <MenuDivider />
//     <MenuOptionGroup title='Short by Price' type='checkbox'>
//       <MenuItemOption value='PLTH'>Low to High</MenuItemOption>
//       <MenuItemOption value='PHTL'>High to Low</MenuItemOption>
//     </MenuOptionGroup>
//   </MenuList>
// </Menu>
//         </Box> 
{/* <div className={styles.resPic}>
<img
  src={rest.srcImg}
  className={styles.imgRes}
  alt="hotel_photo"
/>
</div>
<div className={styles.aboutResDiv}>
<div className={styles.ResName}>
  {ind + 1}.{rest.name}
</div>
<div className={styles.RatePicDiv}>
  {rest.ratePic.map((ele) => (
    <img
      src={ele.src}
      key={ele.id}
      alt="rate-pic"
      className={styles.ratingPic}
    />
  ))}
</div>
<div className={styles.typeDiv}>
  <p>{rest.type}</p>
</div>
<div className={styles.resDetail}>
  <div className={styles.description}>
    <p className={styles.review}>"{rest.comment}"</p>
    <button className={styles.button}>Check out</button>
  </div>
</div>
</div> */}

        //          <Box>
//         <Menu closeOnSelect={false}>
//   <MenuButton as={Button} colorScheme='blue'>
//     Filter
//   </MenuButton>
//   <MenuList minWidth='240px'>
//     <MenuOptionGroup  title='Short by Rating' type='radio'>
//       <MenuItemOption value='Rhtl'>High to Low</MenuItemOption>
//       <MenuItemOption value='Rhtl'>Low to High</MenuItemOption>
//     </MenuOptionGroup>
//     <MenuDivider />
//     <MenuOptionGroup title='Short by Price' type='checkbox'>
//       <MenuItemOption value='PLTH'>Low to High</MenuItemOption>
//       <MenuItemOption value='PHTL'>High to Low</MenuItemOption>
//     </MenuOptionGroup>
//   </MenuList>
// </Menu>
//         </Box> 