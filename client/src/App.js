import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
// Redux
import {getAPI} from './Redux/actions/Product'
import {useDispatch} from 'react-redux'
import AddToCart from './components/AddToCart';


function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
      dispatch(getAPI())
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Route exact path='/' component={ProductList}/>
          <Route path='/ProductDetail/:id' component={ProductDetail}/>
          <Route path='/cart/:id?' component={AddToCart}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
