import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router";
import Header from '../Header/Header'
import bannerCamioneta from '../../images/banner-camioneta.png'
import {Grid, List, ListItem, Link} from '@material-ui/core';

import axios from 'axios';
import {CONFIG} from '../../config'

const Subcategory = () => {

    let path = useLocation().pathname;
    path =
      path.charAt(path.length - 1) === "/"
        ? path.substring(0, path.length - 1)
        : path;
    const pathSplit = path.split("/");
    const location = decodeURIComponent(pathSplit[pathSplit.length - 1]);

  const [allSubcategories, setAllSubcategories] = useState([])
  const [subcategories, setSubcategories] = useState([])


  const getSubcategories = async () => {
    const res = await axios.get(CONFIG.backend+'/category/subcategory')
    setAllSubcategories(res.data)
  }
  
useEffect(()=>{
  getSubcategories()
},[])

useEffect(()=>{
    if(allSubcategories.length > 0){   
        const subcatFilter = allSubcategories.filter((subcat)=>subcat.category_name == location)
        console.log(subcatFilter)
        setSubcategories(subcatFilter)
    }
},[allSubcategories, location])



  return (
    <Grid container spacing={0} lg={12}>
        {/* <Header/>
        <Grid item lg={12}>
            <img src={bannerCamioneta} className='bannerImageIndex'/>
        </Grid> */}
        <List>
        {subcategories.length > 0 &&
          subcategories.map((subcategory) => {
            return (
              <ListItem>
                  <Link href={`/product/${subcategory.subcategory_id}`}>
                    {subcategory.subcategory_name}
                  </Link>
              </ListItem>
            )
          })
        }
        </List>
      
    
    </Grid>
  )
}

export default Subcategory