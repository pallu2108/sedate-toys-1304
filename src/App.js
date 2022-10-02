import SignIn from './Components/SignIn';
import MainRoutes from './Routes/MainRoutes';



function App() {
  return (
    <div>
      <MainRoutes />
    </div>
  );
}

export default App;


// import React from 'react'
// import Search from './Search'
// import {Box,Flex,Avatar,HStack,Link,IconButton,Button,Menu,MenuButton,MenuList,MenuItem,MenuDivider,useDisclosure,useColorModeValue,Stack,} from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { NavLink } from 'react-router-dom';
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { AiOutlineHeart } from "react-icons/ai";
// import { FiEdit2 } from "react-icons/fi";

// const Links = [
//   {titel:'Review',
//    logo:<FiEdit2/>,
//   to:"/review"},
//  {titel:'Trips',
// logo:<AiOutlineHeart/>,
// to:"/trips"},
//  {titel:'Alert',
//  logo:<IoMdNotificationsOutline/>,
// to:"/alert"}
// ];