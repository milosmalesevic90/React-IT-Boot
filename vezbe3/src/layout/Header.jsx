import React from "react"
import Logo from "../components/Logo"

const Header = ({ logedIn }) => {
    if (logedIn) {
        return (
            <header>
                <h1>Gejmer</h1>
                <Logo />
                <button>Logout</button>
            </header>
        )


    }
    // moze else{} da stoji
    return (
        <header>
            <h1>Gejmer</h1>
            <Logo />
            <button>Register</button>
            <button>LogIn</button>

        </header>
    )
}

export default Header