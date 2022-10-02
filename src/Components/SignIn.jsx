import { Tabs, TabList, TabPanels, Tab, TabPanel, Alert, Box, Button, Center, Checkbox, Container, FormLabel, HStack, Icon, Img, Input, InputGroup, InputLeftAddon, Radio, RadioGroup, Text, useToast, VStack, Stack, Divider, useDisclosure } from "@chakra-ui/react";
// import { AuthContext } from '../Context/AuthContext'
import React, { useContext, useState } from 'react'
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signIn } from "../Redux/AuthRedux/action";
const SignIn = () => {
    let initialReg = {
        name: "",
        email: "",
        password: "",
        mobile: ""
    }
    let initialLog = {

        email: "",
        password: "",

    }
    const [userRegister, setUserRegister] = useState(initialReg)
    const [userLogin, setUserLogin] = useState(initialLog)
    const toast = useToast();
    const navigate = useNavigate();
    let userData = JSON.parse(localStorage.getItem("userData")) || [];
    function SignUp() {
        let data = {
            name: userRegister.name,
            email: userRegister.email,
            password: userRegister.password,
            mobile: userRegister.mobile,
            // sub: form.sub.value,
        }
        if (checkMail(data.email) === true) {
            toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 3000,
                position: 'top',
                isClosable: true,
            })
            userData.push(data);
            localStorage.setItem("userData", JSON.stringify(userData));
        } else {
            toast({
                title: 'Alert',
                description: "Email Already Exist in database .",
                status: 'warning',
                duration: 3000,
                position: 'top',
                isClosable: true,
            })
        }
    }

    function checkMail(email) {
        let filtered = userData.filter(function (elem) {
            return email === elem.email;
        })
        if (filtered.length > 0) {
            return false;
        } else {
            return true;
        }
    }

    const handle = (e) => {
        // event.preventDefault();
        const { name: key, value } = e.target
        setUserRegister({ ...userRegister, [key]: value })
    }
    // --------------------------------------------------------------------------------------------

    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const dispatch = useDispatch();
    // const toast = useToast()

    // const [user, setuser] = useState(initial)
    // const navigate = useNavigate()
    // const {isAuth,loginUser,token} = useContext(AppContex)

    // const { isAuth, setisAuth, toggleUser } = useContext(AuthContext)
    let userDataLogin = JSON.parse(localStorage.getItem("userData")) || [];
    const logout = () => {
        // setisAuth(false);
        localStorage.removeItem("login")
        localStorage.removeItem("CurrentUser")
        navigate("/")
        // console.log(isAuth,email)
    }
    function signIn() {
        // console.log(isAuth, "isAuth")
        let data = {
            email: userLogin.email,
            password: userLogin.password,
            isAuth: true
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
            navigate("/");
            // let x = user.email.slice(0, 11)
            // toggleUser()

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

        let filter = userDataLogin.filter(function (elem) {
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
    const handleLogin = (event) => {
        // event.preventDefault();
        const { name, value } = event.target
        setUserLogin({
            ...userLogin,
            [name]: value
        })

    }
    // console.log(userDataLogin);
    return (
        <Box paddingY={"100px"} margin={"auto"} width={"80%"}>
            <Tabs size='md' isFitted variant='enclosed'>
                <TabList >
                    <Tab>Sign Up</Tab>
                    <Tab>Sign In</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <VStack margin={"auto"} zIndex={"0"} padding={"10"} width={"80%"}
                            align={"center"}>
                            <Text fontFamily={"sans-serif"} fontWeight={"700"} fontSize={"4xl"}>Find Top destinations for your next holiday</Text>
                            <br />
                            <Box paddingY={"3"}>
                                <FormLabel fontSize={"15px"}>Full Name</FormLabel>
                                <Input onChange={handle} value={userRegister.name} name="name" type="text" size={"lg"} style={{ width: "650px" }}
                                    id='name'
                                    placeholder='What is your Name ?'
                                />
                            </Box>
                            <Box paddingY={"3"}>
                                <FormLabel fontSize={"15px"} >EmailID</FormLabel>
                                <Input onChange={handle} name="email" value={userRegister.email} type="email" size={"lg"} style={{ width: "650px" }}
                                    id='email'
                                    placeholder='Tell us your EmailID'
                                />
                            </Box>
                            <Box paddingY={"3"}>
                                <FormLabel fontSize={"15px"} >Password</FormLabel>
                                <Input onChange={handle} name="password" value={userRegister.password} type="password" size={"lg"} style={{ width: "650px" }}
                                    id='password'
                                    placeholder='Create a password for your account'
                                />
                                <FormLabel fontSize={"13px"}>Minimum 6 Charachter required</FormLabel>
                            </Box>
                            <Box paddingY={"3"}>
                                <FormLabel fontSize={"15px"} >Mobile Number</FormLabel>
                                <InputGroup size={"lg"}>
                                    <InputLeftAddon children='+91' />
                                    <Input onChange={handle} name="mobile" value={userRegister.mobile} style={{ width: "590px" }} type='tel' placeholder='phone number' />
                                </InputGroup>
                            </Box>
                            <Box paddingY={"3"}>
                                <HStack>
                                    <Checkbox fontSize={"15px"}>Send me important updates on </Checkbox>
                                    <Img width={"15px"} src="https://static.naukimg.com/s/7/104/assets/images/whatsappicon.0011d8c1.png" alt="logo" />
                                    <FormLabel >WhatsApp</FormLabel>
                                </HStack>
                            </Box>
                            <p>By clicking Register, you agree to the Terms and Conditions & Privacy Policy of tripadvisor.com</p>
                            <Box paddingY={"3"}>
                                <Button onClick={() => SignUp()} bg={"#457eff"} borderRadius="50px" paddingX={"30px"} paddingY={"25px"} fontSize={"18px"} color="white">
                                    Register Now
                                </Button>
                            </Box>
                        </VStack>
                    </TabPanel>
                    <TabPanel>
                        <Stack width={"60%"} margin={"auto"} spacing='24px'>
                            <Text align={"end"} cursor={"pointer"} color={"blue"}>Register for Free</Text>
                            <Box>
                                <FormLabel fontSize={"13px"} htmlFor='username'>EmailID/Username</FormLabel>
                                <Input name="email" onChange={handleLogin} value={userLogin.email} type={"email"}
                                    ref={firstField}
                                    id='username'
                                    placeholder='Please enter active EmailID/Username'
                                />
                            </Box>
                            <Box>
                                <FormLabel fontSize={"13px"} htmlFor='password'>Password</FormLabel>
                                <Input name="password" onChange={handleLogin} value={userLogin.password}
                                    type={"password"}
                                    ref={firstField}
                                    id='password'
                                    placeholder='Please enter password'
                                />
                                <Text align={"end"} fontSize={"13px"} color={"blue"} htmlFor='password'>Forget Password ?</Text>

                            </Box>
                            <Box>
                                <Button onClick={() => {
                                    signIn()
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
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default SignIn