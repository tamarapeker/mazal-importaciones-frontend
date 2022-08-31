import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router";
import { connect } from "react-redux";
import Header from '../Header/Header'
import bannerCamioneta from '../../images/banner-camioneta.png'
import {Grid, List, ListItem, Link} from '@material-ui/core';
import {GetSubcatForCat} from '../../store/category/categoryActions'
import {SubcatForCatDefaultStateI} from '../../store/category/categoryReducer';

import axios from 'axios';
import {CONFIG} from '../../config'

interface Props extends StateTypes, dispatchTypes {}

const Subcategory: React.FC<Props> = (props): JSX.Element => {

    let path = useLocation().pathname;
    path =
      path.charAt(path.length - 1) === "/"
        ? path.substring(0, path.length - 1)
        : path;
    const pathSplit = path.split("/");
    const location:any = parseInt(pathSplit[pathSplit.length - 1]);
    console.log(location)

  const [subcategories, setSubcategories] = useState<any>([])
  
useEffect(()=>{
  props.getSubcatForCat(location)
},[])

console.log(props.subcatForCat.subcatForCat)

useEffect(()=>{
    if(props.subcatForCat.loading == false && props.subcatForCat.subcatForCat){   
        const subcatFilter = props.subcatForCat.subcatForCat.filter((subcat:any)=>subcat.category_id == location)
        console.log(subcatFilter)
        setSubcategories(subcatFilter)
    }
},[props.subcatForCat.loading, props.subcatForCat.subcatForCat,location])



  return (
    <Grid container spacing={0} lg={12}>
        {/* <Header/>*/}
        <List>
        {subcategories.length > 0 &&
          subcategories.map((subcategory:any) => {
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

interface StateTypes {
  subcatForCat: SubcatForCatDefaultStateI
}

const mapStateProps = (state:StateTypes) => {
  return{
      subcatForCat: state.subcatForCat,
  }
}

interface dispatchTypes {
  getSubcatForCat: (id:any) => void;
}



const mapDispatchToProps = (dispatch:any) => {
  return{
    getSubcatForCat: (id:any) => dispatch(GetSubcatForCat(id)),
  }
}

export default connect( mapStateProps, mapDispatchToProps)(Subcategory)