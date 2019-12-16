import React from "react"

const Login =()=>{
    return (
        <>
        <h3>Login</h3>
        <input type="email" placeholder="Email" required></input>
        <input type="password" placeholder="Password" required></input><br/>
        <input type="submit" value="Login" onClick={()=>{}}/>
        </>
    )
}
export default Login