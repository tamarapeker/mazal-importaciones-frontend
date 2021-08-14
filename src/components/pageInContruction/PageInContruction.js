import React, { useState } from 'react';
import { AppBar, Toolbar, InputBase, IconButton, Typography } from '@material-ui/core';
import { Card, CardBody, Tooltip, Row, Col } from 'reactstrap';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import logoMazal from '../logo-mazal.png'
import './PageInContruction.css'

function PageInContruction(){
    const [inputValue, setInputValue] = useState("")

  

    return(
        <Row className="w-100 p-0 m-0">
                <div className="blog-image p-0">
                    <img src={logoMazal} alt="img" className="img-fluid p-0 imagePage" />
                </div>
                <h1 className="text-light p-0">Sitio web en construcción</h1>
               
                <p className="mt-3 mb-3 text-light p-0">
                    Por consultas y catálogo comunicarse al: <br/>
                        <a href="https://wa.me/5491145376452" target="_blank" className="linkPage text-light"><WhatsAppIcon/> +5491145376452</a> <br/>
                        <a href="mailto:info@mazalimportaciones.com.ar" target="_blank" className="linkPage text-light"><MailOutlineIcon/> info@mazalimportaciones.com.ar</a>
                </p>
                 
    </Row>
    )
}

export default PageInContruction;