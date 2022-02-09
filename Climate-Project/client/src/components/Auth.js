import React, { useContext, useState } from "react";
import AuthForm from "./AuthForm";
import { UserContext } from "../context/UserProvider";

const initInputs = {user: "", password: ""}

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const { signup, login, errMsg, resetErr } = useContext(UserContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInput => ({
            ...prevInput,
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    function toggleForm(){
        setToggle(prev => !prev)
        resetErr()
    }

    return(
        <div>
            <h1>Climate Action</h1>
            { !toggle ?
                <>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        errMsg={ errMsg }
                        btnText="Sign Up"
                    />
                    <button onClick={() => toggleForm()}>Already have an account?</button>
                </>

                :

                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        errMsg={ errMsg }
                        btnText="Login"
                    />
                    <button onClick={() => toggleForm()}>Have issues? Sign Up</button>
                </>
            }
        </div>
    )
}