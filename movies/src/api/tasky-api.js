//handler for creating an account
//handler for logging in 
//handler for adding a movie to favourites
//handler for removing a movie from favourites





export const addUser = async (userName, password) => {
    const res = await fetch(
        `http://localhost:8080/api/users`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userName,
                password: password,
            }),
        }
    )
    return res.json();
};