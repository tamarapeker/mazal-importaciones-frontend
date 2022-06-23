import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import {InputBase, IconButton, Typography, Grid, Button,Popper, Grow, Paper, Menu, MenuItem, 
    ClickAwayListener } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { MenuRounded } from '@material-ui/icons';
// import logoMazal from '../../images/logo-mazal.png'
import logoMazal from '../../images/logoMazal.png'
import './Header.css'

const dotenv = require('dotenv');

dotenv.config()


function Header(){
    const [inputValue, setInputValue] = useState("")
    const [categories, setCategories] = useState([])
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClickMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };
  

    useEffect(async()=>{
        const categoriesData = await axios.get(process.env.backend+"/category")
        setCategories(categoriesData.data)
    },[])
  

    const handleChange = e =>{
        setInputValue(e.target.value)
    }
    
    const handleSearch = () =>{
        console.log(inputValue)
    }


    return(
        <Grid container spacing={0} lg={12}>
            <Grid container spacing={2} xl={12} lg={12} md={12} sm={12} xs={12} className='gridHeader'>
                <Grid item xl={3} lg={3} md={3} sm={12} xs={12} className='imageGridHeader'>
                    <img src={logoMazal} className="imageHeader"/>
                </Grid>
                <Grid item xl={5} lg={5} md={5} sm={12} xs={1} className='menuOptContHeader'>
                    <Typography className='menuOptHeader' variant="body1" component="div" sx={{ flexGrow: 1 }}>
                        INICIO
                    </Typography>
                    <Typography className='menuOptHeader' variant="body1" component="div" sx={{ flexGrow: 1 }}>
                        PRODUCTOS
                    </Typography>
                    <Typography className='menuOptHeader' variant="body1" component="div" sx={{ flexGrow: 1 }}>
                        NOSOTROS
                    </Typography>
                    <Typography className='menuOptHeader' variant="body1" component="div" sx={{ flexGrow: 1 }}>
                        CONTACTO
                    </Typography>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={12} xs={1} className='contactInfoGridHeader'>
                    <Typography Typography className='menuOptHeader' variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    <a href="https://wa.me/5491145376452" target="_blank" className="linkHeader text-dark"><WhatsAppIcon/> 114537-6452</a>
                    </Typography>
                    <Typography Typography className='menuOptHeader' variant="body1" component="div" sx={{ flexGrow: 1 }}>
                        info@mazalimportaciones.com.ar
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={0} lg={12} className='gridBottomBarHeader'>
                <Grid item lg={1} className=''>
                </Grid>
                <Grid item lg={2} className=''>
                    <Button 
                        color="inherit"
                        id="basic-button"
                        className='p-0 text-light menuHamGridHeader'
                        aria-controls={openMenu ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openMenu ? 'true' : undefined}
                        onClick={handleClickMenu}
                    >
                        <MenuRounded fontSize="large" />
                        <Typography Typography className='ms-2' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                         CATEGORÍAS
                    </Typography>
                    </Button>
                    
                  
                </Grid>
                <Grid item lg={3} className=''>
                </Grid>
                <Grid item lg={6} className='searchGridHeader'>
                <div className="searchHeader">
                     <InputBase
                         type="text"
                         placeholder="¿Qué estás buscando?"
                         className="inputHeader"
                         onChange={(e) => handleChange(e)}
                     />
                     <IconButton 
                         size="small" 
                         onClick={handleSearch}
                         className="searchIconHeader"
                         >
                             <SearchIcon/>
                     </IconButton>
                 </div> 
                </Grid>
            </Grid>
        </Grid>
       
    )
}

export default Header;