import { useEffect } from 'react';
import { connect } from "react-redux";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { GetCategories } from './store/category/categoryActions';

import PageInContruction from './components/pageInContruction/PageInContruction';
import MainView from './components/MainView/MainView';
import Subcategory from './components/Subcategory/Subcategory'
import ProductDetail from './components/ProductDetail/ProductDetail';

import './App.css';

function App(props) {

useEffect(()=>{
  props.getCategories()
},[])

useEffect(()=>{
  console.log(props.category.category)
},[props.category.loading, props.category.category])


  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/home" element={<MainView />}/>
            <Route exact path="/subcategory/:cateogry" element={<Subcategory />}/>
            <Route exact path="/product/:subcategory" element={<ProductDetail />}/>
            <Route exact path="/" element={<PageInContruction />}/>
        </Routes>
          </Router>
    </div>
  );
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


export default connect( mapStateProps, mapDispatchToProps)(App);
