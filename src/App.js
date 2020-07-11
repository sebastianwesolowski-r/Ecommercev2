import React, {useEffect, useContext} from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import {GlobalContext} from './context/global.state';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import CartPage from './pages/cartpage/cartpage.component';
import NotFound from './pages/notfound/notfound.component';

import ErrorBoundary from './components/error-boundary/error-boundary.component';

function App() {

  const {fetchCollections, collections} = useContext(GlobalContext);

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <>
      <Header/>
      <ErrorBoundary>
      {
        collections ? (
          <>
            <Switch>
              <Route exact path="/" render={() => <HomePage collections={collections}/>} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/cart" component={CartPage} />
              <Route component={NotFound} />
            </Switch>
          </>
        ) : null
      }
      </ErrorBoundary>
    </>
  );
}

export default App;
