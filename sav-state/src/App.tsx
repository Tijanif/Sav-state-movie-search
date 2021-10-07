import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './Components/Header';
import DetailsPage from './Page/DetailsPage';

import MainPage from './Page/MainPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/detail-page/:id' exact>
          <DetailsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
