import React, { useState, useEffect, useContext } from 'react';
import { addUser } from "../api/tasky-api";
import { signup } from "../api/movie-api";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";

const SignUpPage = props => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const signUpHandler = (user, pass) => {
        signup(userName, password);

    };

    return (
        <>
            <h2>Login page</h2>
            <p>You must log in to view the protected pages </p>
            <input id="username" placeholder="user name" onChange={e => {
                setUserName(e.target.value);
            }}></input><br />
            <input id="password" type="password" placeholder="password" onChange={e => {
                setPassword(e.target.value);
            }}></input><br />
            <input id="password" type="password" placeholder="password again" onChange={e => {
                setPassword(e.target.value);
            }}></input><br />
            {/* Login web form  */}
            <button onClick={signUpHandler()}>Sign Up</button>
        </>
    );
};

export default SignUpPage;
