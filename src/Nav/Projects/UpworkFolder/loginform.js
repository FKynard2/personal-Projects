import React, { useState, useEffect } from "react";
import { FormControl, InputLabel } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import {
    PrimaryButton,
    LoginBox,
    LoginContainer,
    LoginInput,
} from "../../../Styling/StyledComponents";

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/jobs");
        }
    }, [isLoggedIn, navigate]);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();

        // Check if the username and password are correct
        if (username === "upworklogin" && password === "upworkPW") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid username or password.");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <LoginContainer>
                <LoginBox>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{ fontWeight: "bold", color: "#666666" }}
                    >
                        Log in
                    </Typography>
                    <FormControl>
                        <InputLabel htmlFor="username"></InputLabel>
                        <LoginInput
                            id="username"
                            name="username"
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="Username or Email"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="password"></InputLabel>
                        <LoginInput
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="start">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="start"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                            placeholder="Password"
                        />
                    </FormControl>
                    <br />
                    <PrimaryButton
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Continue with email
                    </PrimaryButton>
                    <Typography
                        variant="Body1"
                        gutterBottom
                        sx={{
                            paddingTop: "2rem",
                            fontWeight: "bold",
                            color: "#666666",
                        }}
                    >
                        Username: upworklogin <br /> Login: upworkPW
                    </Typography>
                </LoginBox>
            </LoginContainer>
        </form>
    );
}

export default LoginForm;
