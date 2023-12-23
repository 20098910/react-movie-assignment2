import React, { useState, useEffect,useContext } from 'react';
import { addUser } from "../api/tasky-api";
import { login } from "../api/movie-api";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";

const LogInPage = props => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = (user,pass) =>{
        login(userName,password);

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
            {/* Login web form  */}
            <button onClick={loginHandler()}>Log in</button>
            <p>Not Registered?
                <Link to="/signUp">Sign Up!</Link></p>
        </>
    );
};

export default LogInPage;


/*
const SignUpPage = (props) => {

    const [nameInput, setNameInput] = useState('');

    const [passwordInput, setPasswordInput] = useState('');

    const handleNameChange = (e) => {
        setNameInput(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    };


    const handleButtonClick = async () => {
        try {
            const user = await addUser(nameInput, passwordInput);
            console.log(user + ' successfully added');
            console.log(nameInput, passwordInput);

            // Insert additional logic here if needed
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <>
            <h3>UserName: </h3>
            <input value={nameInput} type="name" placeholder="name" onChange={e => {
                setNameInput(e.target.value);
            }}></input><br />


            <h3>Password: </h3>
            <input value={passwordInput} type="password" placeholder="password" onChange={e => {
                setPasswordInput(e.target.value);
            }}></input><br />

           
            <button onClick={handleButtonClick}>Log In</button>

        </>
    )
}

export default SignUpPage;

*/