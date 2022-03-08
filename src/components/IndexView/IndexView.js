import React from 'react'
import Header from '../Header/Header'
import bannerCamioneta from '../../images/banner-camioneta.png'
import {Grid} from '@material-ui/core';
import './IndexView.css'

function IndexView() {
  return (
    <Grid container spacing={0} lg={12}>
        <Header/>
            <Grid item lg={12}>
                <img src={bannerCamioneta} className='bannerImageIndex'/>
            </Grid>
    
    </Grid>
  )
}

export default IndexView