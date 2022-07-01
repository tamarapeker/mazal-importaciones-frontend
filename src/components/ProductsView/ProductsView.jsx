import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router";
import { connect } from "react-redux";
import Header from '../Header/Header'
import bannerCamioneta from '../../images/banner-camioneta.png'
import {Grid, Card, CardHeader, CardContent, Link} from '@material-ui/core';
import {GetProductsForSubcat} from '../../store/product/productActions'
import './ProductsView.css'


const ProductsView = (props) => {

    let path = useLocation().pathname;
    path =
      path.charAt(path.length - 1) === "/"
        ? path.substring(0, path.length - 1)
        : path;
    const pathSplit = path.split("/");
    const location = decodeURIComponent(pathSplit[pathSplit.length - 1]);

useEffect(()=>{
    props.getProductsForSubcat(location)
},[])

  return (
    <Grid container spacing={0} lg={12}>
        <Grid item lg={12}>
        {props.productsForSubcat.loading == false && props.productsForSubcat.productsForSubcat &&<h3 style={{margin:"10px auto"}}>{props.productsForSubcat.productsForSubcat[0].subcategory_name}</h3>}
        </Grid>
        <Grid container spacing={2}>
       
        {props.productsForSubcat.loading == false && props.productsForSubcat.productsForSubcat &&
        props.productsForSubcat.productsForSubcat.map((product) =>{
            return(
                <Grid item lg={4}>
                    <Link href={`/productDetail/${product.product_id}`}>
                        <Card>
                            <CardContent>
                                <Grid item lg={12} className='productImageGrid'>
                                    <img src={`data:${"image/png"};base64,${Buffer.from(product.product_image).toString("base64")}`} className='productImage'/>
                                </Grid>
                                {product.product_name}
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            )
        })}
        
        </Grid>
    </Grid>
  )
}

const mapStateProps = (state) => {
    return{
        productsForSubcat: state.productsForSubcat,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
        getProductsForSubcat: (idSubcat) => dispatch(GetProductsForSubcat(idSubcat)),
    }
  }

export default connect( mapStateProps, mapDispatchToProps)(ProductsView)