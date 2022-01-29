import React, { useState } from "react";
import axios from 'axios'
export const UserContext = React.createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = { 
        user: JSON.parse(localStorage.getItem('user')) || {}, 
        token: localStorage.getItem('token') || "",
        issue: []
    }
    const [userState, setUserState] = useState(initState)

    const signup = (credentials) => {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState({...userState, user: res.data.user, token: res.data.token})
                // setUserState(prevUserState => ({
                //     ...prevUserState,
                //     user,
                //     token
                // }))
            })
            .catch(err => console.dir(err.response.data.errMsg))
    }

    const login = (credentials) => {
        axios.post('/auth/login', credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                getAllIssue()
                setUserState({...userState, user: res.data.user, token: res.data.token})
                // setUserState(prevUserState => ({
                //     ...prevUserState,
                //     user,
                //     token
                // }))
            })
            .catch(err => console.dir(err.response.data.errMsg))
    }
    
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({ user: {}, token: "", issue: [] })
    }

    const addIssue = (newIssue) => {
        userAxios.post('/api/issues', newIssue)
        .then(res => setUserState({...userState, issue: [...userState.issue, res.data]}))
        .catch(err => console.log(err.response.data.errMsg))
    }

    const getAllIssue = () => {
        userAxios.get('/api/issues/user')
            .then(res => setUserState(prevState => ({
                ...prevState,
                issue: res.data
            })))
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <UserContext.Provider value={ {...userState, signup, login, logout, addIssue} }>
            { props.children }
        </UserContext.Provider>
    )
}