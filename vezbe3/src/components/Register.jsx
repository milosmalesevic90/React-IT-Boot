import React, { useState, useEffect } from "react"

const Register =()=>{

    const[name,setName]=useState('')
    const[lastname,setLastname]=useState('')
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')




    const[validPassword,setValidPassword]=useState(false)
    const [samePw,setSamePw]=useState(false)
function isValidPw(){
    if((/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).test(password)){
        setValidPassword(true)
        console.log(true)
    }
    else{
        setValidPassword(false)
        console.log(false)
    }
}

    return(
        <form>
            
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Lastname"/>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password" required onChange={e=>{
                
                setPassword(e.target.value)
                 isValidPw()
                 //TTODO check same password
                }}/>
            <input type="password" placeholder="Confirm Password" required onChange={e=>{
                setSamePw(e.target.value === password)
                console.log(samePw)
            }}/>

            <input type="submit" value="Regiser" onClick={()=>{}}/>
        </form>

    )
}
export default Register