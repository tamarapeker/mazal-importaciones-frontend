import './App.css';
import PageInContruction from './components/pageInContruction/PageInContruction';
import MainView from './components/MainView/MainView';
import Subcategory from './components/Subcategory/Subcategory'
import ProductDetail from './components/ProductDetail/ProductDetail';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
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

export default App;
