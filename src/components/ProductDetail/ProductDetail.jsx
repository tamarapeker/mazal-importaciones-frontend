import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router";
import { connect } from "react-redux";
import Header from '../Header/Header'
import bannerCamioneta from '../../images/banner-camioneta.png'
import {Grid, Card, CardHeader, CardContent, List, ListItem} from '@material-ui/core';
import {GetProductById} from '../../store/product/productActions'
import './productDetail.css'


const ProductDetail = (props) => {

    let path = useLocation().pathname;
    path =
      path.charAt(path.length - 1) === "/"
        ? path.substring(0, path.length - 1)
        : path;
    const pathSplit = path.split("/");
    const location = decodeURIComponent(pathSplit[pathSplit.length - 1]);

    const [product, setProduct] = useState({})

useEffect(()=>{
    props.getProductById(location)
},[])

useEffect(()=>{
    if(props.productById.loading == false && props.productById.productById){
        setProduct(props.productById.productById[0])
    }
},[props.productById.loading, props.productById.productById, location])

console.log(product)



  return (
    <Grid container spacing={0} lg={12}>
        <Grid item lg={12}>
        {product.product_name && <h3 style={{margin:"10px auto"}}>{product.product_name}</h3>}
        </Grid>
        <Grid container spacing={2}>
       
        {product.product_name &&
            
                <Grid item lg={4}>
                <Card>
                    <CardContent>
                    <Grid item lg={12} className='productImageGrid'>
                    <img src={`data:${"image/png"};base64,${Buffer.from(product.product_image).toString("base64")}`} className='productImage'/>
                    </Grid>
                        <List>
                            <ListItem>
                                {product.product_description}
                            </ListItem>
                            <ListItem>
                                Medidas: 
                                <List>
                                {product.product_measures.length > 0 &&
                                    product.product_measures.map(med => {
                                        return (
                                            <ListItem>{med}</ListItem>
                                        )
                                    })
                                }
                                </List>
                            </ListItem>
                            <ListItem>
                                {product.product_unit}
                            </ListItem>
                            <ListItem>
                                Cantidad mínima: 
                                {product.product_min_cant}
                            </ListItem>
                            <ListItem>
                                Unidades por bulto: 
                                {product.product_cant_bulto}
                            </ListItem>
                            <ListItem>
                                Observaciones: 
                                {product.product_observations}
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
                </Grid>
            
        }
        
        </Grid>
        
       
      
    
    </Grid>
  )
}

const mapStateProps = (state) => {
    return{
        productById: state.productById,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
        getProductById: (id) => dispatch(GetProductById(id)),
    }
  }

export default connect( mapStateProps, mapDispatchToProps)(ProductDetail)