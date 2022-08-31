import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import Header from '../Header/Header'
import bannerCamioneta from '../../images/banner-camioneta.png'
import {Grid, List, ListItem, Link} from '@material-ui/core';
import './MainView.css'
import {GetCategories} from '../../store/category/categoryActions'
import { CategoryDefaultStateI } from '../../store/category/categoryReducer';



interface Props extends StateTypes, dispatchTypes {}

const MainView: React.FC<Props> = (props): JSX.Element => {

  const [categories, setCategories] = useState<any>([])

  useEffect(()=>{
    props.getCategories()
  },[])

  useEffect(()=>{
    if(props.categories.loading == false && props.categories.categories){
      setCategories(props.categories.categories)
    }
  },[props.categories.loading,props.categories.categories])

  return (
    <Grid container spacing={0} lg={12}>
        <Header/>
        <Grid item lg={12}>
            <img src={bannerCamioneta} className='bannerImageIndex'/>
        </Grid>
        <List>
        {categories.length > 0 && 
          categories.map((category:any) => {
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

interface StateTypes {
  categories: CategoryDefaultStateI
}

const mapStateProps = (state:StateTypes) => {
  return{
    categories: state.categories,
  }
}

interface dispatchTypes {
  getCategories: () => void;
}

const mapDispatchToProps = (dispatch:any) => {
  return{
      getCategories: () => dispatch(GetCategories()),
  }
}

export default  connect( mapStateProps, mapDispatchToProps)(MainView)