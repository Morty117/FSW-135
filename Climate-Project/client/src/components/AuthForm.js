import React from "react";

export default function AuthForm(props){
    const {
        handleChange,
        handleSubmit,
        btnText,
        inputs: {
            user,
            password
        }
    } = props

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={user}
                name="user"
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="text"
                value={password}
                name="password"
                onChange={handleChange}
                placeholder="Password"
            />
            <button>{ btnText }</button>
        </form>
    )
}