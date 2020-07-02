import React, {useEffect, useContext} from 'react';
import {Route} from 'react-router-dom';

import './App.css';

import {GlobalContext} from './context/global.state';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';

function App() {

  const {fetchCollections, collections} = useContext(GlobalContext);

  useEffect(() => {
    fetchCollections();
  }, []);

  console.log(collections);

  return (
    <>
      <Header/>
      <Route exact path="/" component={HomePage} />
    </>
  );
}

export default App;
