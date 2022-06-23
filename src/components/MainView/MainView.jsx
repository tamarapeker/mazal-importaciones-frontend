import React, { useEffect, useState } from 'react'

import Header from '../Header/Header'
import bannerCamioneta from '../../images/banner-camioneta.png'
import {Grid, List, ListItem, Link} from '@material-ui/core';
import './MainView.css'
import axios from 'axios';
import {CONFIG} from '../../config'

const MainView = () => {

  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState([])

  const getCategories = async () =>{
    const res = await axios.get(CONFIG.backend+'/category')
    setCategories(res.data)
  }

  const getSubcategories = async () => {
    const res = await axios.get(CONFIG.backend+'/category/subcategory')
    setSubcategories(res.data)
  }
  
useEffect(()=>{
  getCategories()
  getSubcategories()
},[])

console.log(categories)

  return (
    <Grid container spacing={0} lg={12}>
        {/* <Header/>
        <Grid item lg={12}>
            <img src={bannerCamioneta} className='bannerImageIndex'/>
        </Grid> */}
        <List>
        {categories.length > 0 && subcategories.length > 0 &&
          categories.map((category) => {
            return (
              <ListItem>
                <Link href={`/subcategory/${category.category_name}`}>
                  {category.category_name}
                </Link>
                {/* {
                  subcategories.map((subcategory)=>{
                    return (
                      <List>
                     {subcategory.category_name == category.category_name &&
                      <ListItem>
                        {subcategory.subcategory_name}
                      </ListItem>}
                      </List>
                    )
                  })
                } */}
              </ListItem>
            )
          })
        }
        </List>
      
    
    </Grid>
  )
}

export default MainView