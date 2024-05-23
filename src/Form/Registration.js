import { Box, Grid, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import Electronic from "../Assets/Image/Electronics.png";
import logo from "../Assets/Image/User.png";
import Loginn from "../Assets/Image/Login.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setLoginData, setEmailData } from '../Reducers/UiReducer';
import { useDispatch } from 'react-redux';

const Registration = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const RegistrationResult = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8080/api/v1/user/register', {
                userName,
                email,
                password
            });
            const responseData = response.data;

            dispatch(setLoginData(responseData));
            dispatch(setEmailData(email));
            navigate('/');
            console.log(responseData); // For debugging, remove in production
        } catch (error) {
            console.error("Registration failed:", error);
        }
        setLoading(false);
    }

    return (
        <Grid container style={{ backgroundColor: "rgba(138, 229, 180, 0.2)", height: "100vh" }}>
            <Grid item lg={12}>
                <Box display="flex" padding="20px 40px" justifyContent="space-between" alignItems="center">
                    <Box>
                        <img style={{ width: "80%" }} src={Electronic} alt="Electronic" />
                    </Box>
                    <Box>
                        <img style={{ width: "80%" }} src={logo} alt="Logo" />
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
                                <h4>Register User</h4>
                            </Box>
                            <Box style={{ fontWeight: "600", color: "#525A60" }} mt={3}>UserName</Box>
                            <Box style={{ borderRadius: "10px" }}>
                                <input
                                    placeholder='UserName'
                                    style={{ border: "1px solid #009D48", width: "100%", padding: "10px", borderRadius: "5px" }}
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </Box>
                            <Box style={{ fontWeight: "600", color: "#525A60" }} mt={3}>Email</Box>
                            <Box style={{ borderRadius: "10px" }}>
                                <input
                                    placeholder='Email'
                                    style={{ border: "1px solid #009D48", width: "100%", padding: "10px", borderRadius: "5px" }}
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Box>
                            <Box style={{ fontWeight: "600", color: "#525A60" }} mt={3}>Password</Box>
                            <Box>
                                <input
                                    placeholder='Password'
                                    style={{ border: "1px solid #009D48", width: "100%", padding: "10px", borderRadius: "5px" }}
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Box>
                            <Box onClick={() => navigate('/')} mt={2} style={{ textAlign: "right", color: "#009D48", fontWeight: "600", cursor: "pointer" }}>Already have an account? </Box>
                            <Box onClick={RegistrationResult} mt={3} style={{ textAlign: "center", backgroundColor: "#62D195", color: "white", border: "1px solid #009D48", fontWeight: "600", cursor: "pointer", padding: "10px", borderRadius: "5px" }}>
                                Register
                            </Box>
                        </Grid>
                        <Grid item lg={5} mx="auto">
                            <Box>
                                <img src={Loginn} alt="Login" />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Registration;
