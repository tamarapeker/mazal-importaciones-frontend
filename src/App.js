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

function App(props) {

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/home" element={<MainView />}/>
            <Route exact path="/subcategory/:cateogry" element={<Subcategory />}/>
            <Route exact path="/products/:subcategory" element={<ProductsView />}/>
            <Route exact path="/productDetail/:idProduct" element={<ProductDetail />}/>
            <Route exact path="/" element={<PageInContruction />}/>
        </Routes>
          </Router>
    </div>
  );
}

const mapStateProps = (state) => {
  return{
      category: state.category,
      products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      getCategories: () => dispatch(GetCategories()),
      getProducts: () => dispatch(GetProducts()),
  }
}


export default connect( mapStateProps, mapDispatchToProps)(App);
