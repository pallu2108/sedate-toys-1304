import React from 'react'
import { Box, Button, Center, Container, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, HStack, Img, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Text, Textarea, useDisclosure, useToast, VStack } from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
// import { AuthContext } from "./Context/AuthContext";

let initial = {
    email: "",
    password: ""
}

const login = () => {


    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const toast = useToast()

    const [user, setuser] = useState(initial)
    const navigate = useNavigate()
    // const {isAuth,loginUser,token} = useContext(AppContex)

    const { isAuth, setisAuth, toggleUser } = useContext(AuthContext)
    let userData = JSON.parse(localStorage.getItem("userData")) || [];
    const logout = () => {
        setisAuth(false);
        localStorage.removeItem("login")
        localStorage.removeItem("CurrentUser")
        navigate("/")
        // console.log(isAuth,email)
    }
    function myfun() {
        // console.log(isAuth, "isAuth")
        let data = {
            email: user.email,
            password: user.password,
        }
        // console.log(data, "data")
        if (checklogin(data.email, data.password) === true) {
            localStorage.setItem("login", JSON.stringify(data));
            toast({
                title: 'Yes....',
                description: "You are Successfully Logged In.",
                status: 'success',
                duration: 3000,
                position: 'top',
                isClosable: true,
            })
            navigate("/profilePage");
            // let x = user.email.slice(0, 11)
            toggleUser()

        } else {
            toast({
                title: 'Wrong Credentials....',
                description: "Please check your Email ID and Password.",
                status: 'error',
                duration: 3000,
                position: 'top',
                isClosable: true,
            })
        }
    }
    // console.log(userData, "userData")

    function checklogin(email, password) {

        let filter = userData.filter(function (elem) {
            console.log(elem, "elem")
            localStorage.setItem("CurrentUser", JSON.stringify(elem))
            return elem.email === email && elem.password === password;
        })

        if (filter.length > 0) {
            return true;
        } else {
            console.log("working")
            return false;
        }
    }
    const handle = (event) => {
        // event.preventDefault();
        const { name, value } = event.target
        setuser({
            ...user,
            [name]: value
        })
    }
    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            initialFocusRef={firstField}
            size={"sm"}
            onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth='1px'>
                    Login
                </DrawerHeader>

                <DrawerBody>
                    <Stack spacing='24px'>
                        <Text align={"end"} cursor={"pointer"} color={"blue"}>Register for Free</Text>
                        <Box>
                            <FormLabel fontSize={"13px"} htmlFor='username'>EmailID/Username</FormLabel>
                            <Input name="email" onChange={handle} value={user.email} type={"email"}
                                ref={firstField}
                                id='username'
                                placeholder='Please enter active EmailID/Username'
                            />
                        </Box>
                        <Box>
                            <FormLabel fontSize={"13px"} htmlFor='password'>Password</FormLabel>
                            <Input name="password" onChange={handle} value={user.password}
                                type={"password"}
                                ref={firstField}
                                id='password'
                                placeholder='Please enter password'
                            />
                            <Text align={"end"} fontSize={"13px"} color={"blue"} htmlFor='password'>Forget Password ?</Text>

                        </Box>
                        <Box>
                            <Button onClick={() => {
                                myfun(); onClose();
                            }} width={"100%"} bg={"#457eff"} color={"white"}>
                                Login
                            </Button>
                        </Box>

                        <Divider width={"90%"} />
                        <Center>
                            <VStack>
                                <p>or</p>
                                <br />
                                <Button width={"fit-content"} leftIcon={<Img width={"20px"} src="https://i.ibb.co/VBNmDCK/google.png" />}>Sign in with Google</Button>
                            </VStack>
                        </Center>
                    </Stack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>

    )
}

export default login