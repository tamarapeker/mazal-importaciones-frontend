import React from 'react';
import { useEffect } from 'react';
import { connect } from "react-redux";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { GetCategories } from './store/category/categoryActions';
import {GetProducts} from './store/product/productActions';

import PageInContruction from './components/pageInContruction/PageInContruction';
import MainView from './components/MainView/MainView';
import Subcategory from './components/Subcategory/Subcategory'
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductsView from './components/ProductsView/ProductsView';

import './App.css';
import { CategoryDefaultStateI } from './store/category/categoryReducer';

const App: React.FC = ()  => {

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/home" element={<MainView />}/>
            <Route path="/subcategory/:cateogry" element={<Subcategory />}/>
            <Route path="/products/:subcategory" element={<ProductsView />}/>
            <Route path="/productDetail/:idProduct" element={<ProductDetail />}/>
            <Route path="/" element={<PageInContruction />}/>
        </Routes>
          </Router>
    </div>
  );
}

interface StateTypes {
  categories: CategoryDefaultStateI;
}

const mapStateProps = (state:StateTypes) => {
  return{
      categories: state.categories,
      // products: state.products
  }
}

interface dispatchTypes {
  getCategories: () => void;
}


const mapDispatchToProps = (dispatch:any) => {
  return{
      getCategories: () => dispatch(GetCategories()),
      //getProducts: () => dispatch(GetProducts()),
  }
}


export default connect( mapStateProps, mapDispatchToProps)(App);
