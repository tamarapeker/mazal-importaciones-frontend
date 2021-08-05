import React, { useState } from 'react';
import { AppBar, Toolbar, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import logoMazal from './logo-mazal.png'
import './Header.css'

function Header(){
    const [inputValue, setInputValue] = useState("")

    const handleChange = e =>{
        setInputValue(e.target.value)
    }
    
    const handleSearch = () =>{
        console.log(inputValue)
    }

    return(
        <AppBar position="static" className="appHeader">
            <Toolbar className="headerToolbar">
                <img src={logoMazal} className="imageHeader"/>
                <div className="searchHeader">
                    <InputBase
                        type="text"
                        placeholder="¿Qué estás buscando?"
                        className="inputHeader"
                        onChange={(e) => handleChange(e)}
                    />
                    <IconButton 
                        size="small" 
                        color="inherit" 
                        onClick={handleSearch}
                        className="searchIconHeader"
                        >
                            <SearchIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;