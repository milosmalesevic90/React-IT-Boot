import  React  from "react"
import Logo from "../components/Logo"
import { Link } from 'react-router-dom'

const Header = ({ logedIn, setUser }) => {

    if(logedIn){
        return(
            <header>
                <Logo />
                <h1>Гејмер</h1>
                <Link to ='/profile'><img src=''alt='Profile'/></Link>

                <button onClick={() => setUser()}>Одјави се</button>
            </header>
        )
    }
    else {
        return (
            <header>
                <Logo />
                <h1>Гејмер</h1>

                <Link to='/register'><button>Регистрација</button></Link>
                <Link to='/login'><button>Пријави се</button></Link>
            </header>
        )
    }
}

export default Header
