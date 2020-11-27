import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PreHeader from './components/PreHeader';
import MainPage from './MainPage';
import HomeScreen from './screens/HomeScreen';
import Hoodies from './screens/Hoodies';
import Posters from './screens/Posters';
import ProductScreen from './screens/ProductScreen';
import Tshirts from './screens/Tshirts';


const App = () => {
  return (
    <Router>
      <Header />
      <PreHeader />
      <main className="container-xl">
        <Route path='/allProducts' component={HomeScreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/' component={MainPage} exact />
        <Route path='/tshirts' component={Tshirts} exact />
        <Route path='/hoodies' component={Hoodies} exact />
        <Route path='/posters' component={Posters} exact />


      </main>
      <Footer />
    </Router>
  );
}

export default App;
