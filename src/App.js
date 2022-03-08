import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import PageInContruction from './components/pageInContruction/PageInContruction';
import IndexView from './components/IndexView/IndexView';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/home" element={<IndexView />}/>
            <Route exact path="/" element={<PageInContruction />}/>
        </Routes>
          </Router>
    </div>
  );
}

export default App;
