import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = ({ onSearch, setAccess }) => {

    const [id, setId] = useState('')

    const handleRandom = () => {onSearch(Math.floor(Math.random() * 826)); setId(''); }

    const navigate = useNavigate();

    const handleLogOut = () => {
        setAccess(false);
        navigate('/');
    }

    return(
        <nav id="navBar">
            <SearchBar onSearch={onSearch}/>

            <button onClick={()=>handleRandom()}>Random</button>

            <button>
                <NavLink to='/home'>Home</NavLink>
            </button>

            <button>
                <NavLink to='/favorites'>Favorites</NavLink>
            </button>

            <button>
                <NavLink to='/about'>About</NavLink>
            </button>

            <button onClick={handleLogOut}>Log Out</button>
        </nav>
    )
}

export default Nav;