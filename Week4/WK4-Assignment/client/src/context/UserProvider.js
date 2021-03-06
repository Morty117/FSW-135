import React, { useState } from "react";
import axios from 'axios'

export const UserContext = React.createContext()

export default function UserProvider(props){
    const initState = { user: {}, token: "" }
    const [userState, setUserState] = useState(initState)

    const signup = (credentials) => {
        axios.post('/auth/signup', credentials)
            .then(res => console.log(res))
            .catch(err => console.dir(err.response.data.errMsg))
    }

    const login = (credentials) => {
        axios.post('/auth/login', credentials)
            .then(res => setUserState({...userState, user: res.data.user, token: res.data.token}))
            .catch(err => console.dir(err.response.data.errMsg))
    }
    
    return (
        <UserContext.Provider value={ {...userState, signup, login} }>
            { props.children }
        </UserContext.Provider>
    )
}