import { Box, Grid, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import Electronic from "../Assets/Image/Electronics.png"
import logo from "../Assets/Image/User.png"
import Loginn from "../Assets/Image/Login.png"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { setLoginData, setEmailData } from '../Reducers/UiReducer'
import { useDispatch } from 'react-redux'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const LoginResult = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8080/api/v1/user/login', {
                email,
                password
            });
            const responseData = response.data;
            const dataSuccess = responseData.success;
            const userData = responseData.user.email;
            const userPass = responseData.user.password;

            console.log("userData", userData);
            sessionStorage.setItem("dataSuccess", dataSuccess);
            dispatch(setLoginData(userData));
            dispatch(setEmailData(userPass));

            navigate('/dashboard');
            console.log(responseData); // Just for checking, you can do something else with responseData
        } catch (error) {
            console.error("Login failed:", error);
        }
        setLoading(false);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <>
            <Grid style={{ backgroundColor: "rgba(138, 229, 180, 0.2)", height: "100vh" }} container>
                <Grid item lg={12}>
                    <Box style={{ display: "flex", padding: "20px 40px", justifyContent: "space-between", alignItems: "center" }}>
                        <Box>
                            <img style={{ width: "80%" }} src={Electronic} alt="" />
                        </Box>
                        <Box>
                            <img style={{ width: "80%" }} src={logo} alt="" />
                        </Box>
                    </Box>
                </Grid>

                <Grid item lg={8} mx="auto">
                    <Box style={{ backgroundColor: "rgba(138, 229, 180, 0.5)", padding: "50px", boxShadow: "0 0 5px", borderRadius: "10px", height: "80vh", position: "relative" }}>
                        {loading && (
                            <Box
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                    backdropFilter: "blur(5px)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <CircularProgress color="secondary" />
                            </Box>
                        )}
                        <Grid container>
                            <Grid item lg={5} mx="auto">
                                <Box>
                                    <h4>Login User</h4>
                                </Box>
                                <Box style={{ fontWeight: "600", color: "#525A60" }} mt={3}>Email</Box>
                                <Box style={{ borderRadius: "10px" }}>
                                    <input
                                        placeholder='Email'
                                        style={{ border: "1px solid #009D48" }}
                                        type="text"
                                        className='form-control'
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </Box>
                                <Box style={{ fontWeight: "600", color: "#525A60" }} mt={3}>Password</Box>
                                <Box>
                                    <input
                                        placeholder='Password'
                                        style={{ border: "1px solid #009D48" }}
                                        type="password"
                                        className='form-control'
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </Box>
                                <Box onClick={() => navigate('/register')} mt={2} style={{ textAlign: "right", color: "#009D48", fontWeight: "600", cursor: 'pointer' }}>Register ? </Box>
                                <Box onClick={LoginResult} mt={3} style={{ textAlign: "center", backgroundColor: "#62D195", color: "white", border: "1px solid #009D48", fontWeight: "600", cursor: "pointer" }} className="form-control">
                                    Login
                                </Box>
                            </Grid>
                            <Grid item lg={5} mx="auto" >
                                <Box>
                                    <img src={Loginn} alt="" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Login
