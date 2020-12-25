import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import LeaveMessage from './components/LeaveMessage';
import PreHeader from './components/PreHeader';
import MainPage from './MainPage';
import AdminScreen from './screens/AdminScreen';
import CartScreen from './screens/CartScreen';
import CategoryAndBrandSreen from './screens/CategoryAndBrandSreen';
import HomeScreen from './screens/HomeScreen';
import Hoodies from './screens/Hoodies';
import LikedScreen from './screens/LikedScreen';
import LoginScreen from './screens/LoginScreen';
import OrderListScreen from './screens/OrderListScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import Posters from './screens/Posters';
import ProductByCategoryScreen from './screens/ProductByCategoryScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import SearchScreen from './screens/SearchScreen';
import ShippingScreen from './screens/ShippingScreen';
import Tshirts from './screens/Tshirts';
import UserEditScreen from './screens/UserEditScreen';
import UserListScreen from './screens/UserListScreen';


const App = () => {
  return (
    <Router>
      <Header />
      <PreHeader />
      <main className="container-xl mobility">
        <Route path='/allProducts' component={HomeScreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/tshirts' component={Tshirts} exact />
        <Route path='/hoodies' component={Hoodies} exact />
        <Route path='/posters' component={Posters} exact />
        <Route path='/cart/:id?' component={CartScreen} exact/>
        <Route path='/liked/:id?' component={LikedScreen} exact/>
        <Route path='/login' component={LoginScreen} exact />
        <Route path='/register' component={RegisterScreen} exact />
        <Route path='/profile' component={ProfileScreen} exact />
        <Route path='/shipping' component={ShippingScreen} exact />
        <Route path='/payment' component={PaymentScreen} exact />
        <Route path='/placeorder' component={PlaceOrderScreen} exact />
        <Route path='/contactus' component={LeaveMessage} exact />
        <Route path='/faq' component={FAQ} exact />
        <Route path='/order/:id' component={OrderScreen} exact />
        <Route path='/AdMIn' component={AdminScreen} exact />
        <Route path='/AdMIn/userList' component={UserListScreen} exact />
        <Route path='/AdMIn/user/:id/edit' component={UserEditScreen} exact />
        <Route path='/AdMIn/product/:id/edit' component={ProductEditScreen} exact />
        <Route path='/AdMIn/productList' component={ProductListScreen} exact />
        <Route path='/AdMIn/productList/:pageNumber' component={ProductListScreen} exact />
        <Route path='/AdMIn/orderList' component={OrderListScreen} exact />
        <Route path='/search/:keyword' component={SearchScreen} exact />
        <Route path='/page/:pageNumber' component={SearchScreen} exact />
        <Route path='/search/:keyword/page/:pageNumber' component={SearchScreen} exact />
        <Route path='/api/products/category/:category' component={ProductByCategoryScreen} exact />
        <Route path='/api/products/category/:category/brand/:brand' component={CategoryAndBrandSreen} exact />
        <Route path='/' component={MainPage} exact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
