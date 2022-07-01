import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import Header from '../Header/Header'
import bannerCamioneta from '../../images/banner-camioneta.png'
import {Grid, List, ListItem, Link} from '@material-ui/core';
import './MainView.css'
import {GetCategories} from '../../store/category/categoryActions'


const MainView = (props) => {

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    props.getCategories()
  },[])

  useEffect(()=>{
    if(props.category.loading == false && props.category.category){
      setCategories(props.category.category)
    }
  },[props.category.loading,props.category.category])

  return (
    <Grid container spacing={0} lg={12}>
        {/* <Header/>
        <Grid item lg={12}>
            <img src={bannerCamioneta} className='bannerImageIndex'/>
        </Grid> */}
        <List>
        {categories.length > 0 && 
          categories.map((category) => {
            return (
              <ListItem>
                <Link href={`/subcategory/${category.category_id}`}>
                  {category.category_name}
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
      category: state.category,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      getCategories: () => dispatch(GetCategories()),
  }
}

export default  connect( mapStateProps, mapDispatchToProps)(MainView)