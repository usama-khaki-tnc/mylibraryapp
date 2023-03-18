import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import React, {useState, useEffect} from 'react';

// import reduxStore
import { Provider } from 'react-redux';
import store from './utils/store';

import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import CreateBook from './pages/CreateBook';
import Catalog from './pages/Catalog';

function App(props) {

  const [searchText, setSearchText] = useState("Bestseller");
  return (
    <div className="App">
      <Header/>
      <Router>
        <Provider store={store}>

        
          <Routes>
            <Route path= "/" element = { <Home
              {...props}
              searchText={searchText}
              setSearchText = {setSearchText}
            /> }> </Route>
            <Route path= "/login" element = { <Login/> }> </Route>
            <Route path= "/register" element = { <Register/> }> </Route>
            <Route path= "/createBook" element = { <CreateBook/> }> </Route>
            <Route path= "/catalog" element = { <Catalog/> }> </Route>
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
