import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router";
import { connect } from "react-redux";
import Header from '../Header/Header'
import bannerCamioneta from '../../images/banner-camioneta.png'
import {Grid, List, ListItem, Link} from '@material-ui/core';
import {GetSubcatForCat} from '../../store/category/categoryActions'

import axios from 'axios';
import {CONFIG} from '../../config'

const Subcategory = (props) => {

    let path = useLocation().pathname;
    path =
      path.charAt(path.length - 1) === "/"
        ? path.substring(0, path.length - 1)
        : path;
    const pathSplit = path.split("/");
    const location = parseInt(pathSplit[pathSplit.length - 1]);
    console.log(location)

  const [subcategories, setSubcategories] = useState([])
  
useEffect(()=>{
  props.getSubcatForCat(location)
},[])

console.log(props.subcatForCat.subcatForCat)

useEffect(()=>{
    if(props.subcatForCat.loading == false && props.subcatForCat.subcatForCat){   
        const subcatFilter = props.subcatForCat.subcatForCat.filter((subcat)=>subcat.category_id == location)
        console.log(subcatFilter)
        setSubcategories(subcatFilter)
    }
},[props.subcatForCat.loading, props.subcatForCat.subcatForCat,location])



  return (
    <Grid container spacing={0} lg={12}>
        {/* <Header/>*/}
        <List>
        {subcategories.length > 0 &&
          subcategories.map((subcategory) => {
            return (
              <ListItem>
                  <Link href={`/products/${subcategory.subcategory_id}`}>
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


const mapStateProps = (state) => {
  return{
      subcatForCat: state.subcatForCat,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getSubcatForCat: (id) => dispatch(GetSubcatForCat(id)),
  }
}

export default connect( mapStateProps, mapDispatchToProps)(Subcategory)