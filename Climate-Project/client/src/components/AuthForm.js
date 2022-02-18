import React from "react";

export default function AuthForm(props){
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            user,
            password
        }
    } = props

    return(
        <form className="authform" onSubmit={handleSubmit}>
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
            <p style={{color: "#c00000", textAlign: "center"}}>{ errMsg }</p>
        </form>
    )
}