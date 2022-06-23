import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router";
import Header from '../Header/Header'
import bannerCamioneta from '../../images/banner-camioneta.png'
import {Grid, Card, CardHeader, CardContent, List, ListItem} from '@material-ui/core';

import axios from 'axios';
import {CONFIG} from '../../config'

const ProductDetail = () => {

    let path = useLocation().pathname;
    path =
      path.charAt(path.length - 1) === "/"
        ? path.substring(0, path.length - 1)
        : path;
    const pathSplit = path.split("/");
    const location = decodeURIComponent(pathSplit[pathSplit.length - 1]);

  const [allProducts, setAllProducts] = useState([])
  const [products, setProducts] = useState([])


  const getProducts = async () => {
    const res = await axios.get(CONFIG.backend+'/products/subcategory/'+location)
    setProducts(res.data)
  }
  
useEffect(()=>{
    getProducts()
},[])

console.log(products)

// useEffect(()=>{
//     if(allProducts.length > 0){   
//         const productsFilter = allProducts.filter((product)=>product.subcategory_name == location)
//         console.log(productsFilter)
//         setProducts(productsFilter)
//     }
// },[allProducts, location])



  return (
    <Grid container spacing={0} lg={12}>
        <Grid item lg={12}>
        {products.length > 0 &&<h3 style={{margin:"10px auto"}}>{products[0].subcategory_name}</h3>}
        </Grid>
        <Grid container spacing={2}>
       
        {products.length > 0 &&
        products.map((product) =>{
            return(
                <Grid item lg={4}>
                <Card>
                    <CardContent>
                    {product.product_name}
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
            )
        })}
        
        </Grid>
        
       
      
    
    </Grid>
  )
}

export default ProductDetail