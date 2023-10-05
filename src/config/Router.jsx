import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import TvSeries from '../pages/TvSeries';
import Details from '../pages/Details';

const Router = () => {
    return (
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie' element={<Movies />}/>
          <Route path='/tv' element={<TvSeries />}/>
          <Route path="/:name" element={<Details/>}/>
        </Routes>
    );
}

export default Router;
