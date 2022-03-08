import React, { useState } from 'react';
import {InputBase, IconButton, Typography, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { MenuRounded } from '@material-ui/icons';
// import logoMazal from '../../images/logo-mazal.png'
import logoMazal from '../../images/logoMazal.png'

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
        <Grid container spacing={0} lg={12}>
            <Grid container spacing={2} lg={12} className='gridHeader'>
                <Grid item xl={3} lg={3} md={3} className='imageGridHeader'>
                    <img src={logoMazal} className="imageHeader"/>
                </Grid>
                <Grid item xl={5} lg={5} md={5} className='menuOptContHeader'>
                    <Typography className='menuOptHeader' variant="p" component="div" sx={{ flexGrow: 1 }}>
                        INICIO
                    </Typography>
                    <Typography className='menuOptHeader' variant="p" component="div" sx={{ flexGrow: 1 }}>
                        PRODUCTOS
                    </Typography>
                    <Typography className='menuOptHeader' variant="p" component="div" sx={{ flexGrow: 1 }}>
                        NOSOTROS
                    </Typography>
                    <Typography className='menuOptHeader' variant="p" component="div" sx={{ flexGrow: 1 }}>
                        CONTACTO
                    </Typography>
                </Grid>
                <Grid item xl={4} lg={4} md={4} className='contactInfoGridHeader'>
                    <Typography Typography className='menuOptHeader' variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    <a href="https://wa.me/5491145376452" target="_blank" className="linkHeader text-dark"><WhatsAppIcon/> 114537-6452</a>
                    </Typography>
                    <Typography Typography className='menuOptHeader' variant="p" component="div" sx={{ flexGrow: 1 }}>
                        info@mazalimportaciones.com.ar
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={0} lg={12} className='gridBottomBarHeader'>
                <Grid item lg={1} className=''>
                </Grid>
                <Grid item lg={2} className='menuHamGridHeader'>
                    <MenuRounded fontSize="large"/>
                    <Typography Typography className='' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                         CATEGORÍAS
                    </Typography>
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