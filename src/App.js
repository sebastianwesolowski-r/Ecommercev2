import React, {useEffect, useContext} from 'react';
import {Route} from 'react-router-dom';

import './App.css';

import {GlobalContext} from './context/global.state';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import CartPage from './pages/cartpage/cartpage.component';

function App() {

  const {fetchCollections, collections} = useContext(GlobalContext);

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <>
      <Header/>
      {
        collections ? (
          <>
            <Route exact path="/" render={() => <HomePage collections={collections}/>} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/cart" component={CartPage} />
          </>
        ) : null
      }
    </>
  );
}

export default App;
