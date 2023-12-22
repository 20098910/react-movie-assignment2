import React from "react";
import { getPopular } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import { useState } from "react";


const SignUpPage = (props) => {

    const [nameInput, setNameInput] = useState('');

    const [passwordInput, setPasswordInput] = useState('');

    const handleNameChange = (e) => {
        setNameInput(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    };


    const handleButtonClick = () => {
        console.log(nameInput , passwordInput)

        //Insert the code here for validating the data and create/logging into an account
    }

    return (
        <>
        
            <h3>UserName: </h3>
            <input
                type="text"
                id="nameInput"
                value={nameInput}
                onChange={handleNameChange}
            />


            <h3>Password: </h3>
            <input
                type="text"
                id="passwordInput"
                value={passwordInput}
                onChange={handlePasswordChange}
            />

            <button onClick={handleButtonClick}>Log In</button>

        </>
    )
}

export default SignUpPage;