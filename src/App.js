import './App.css';
import Portfolio from './Component/portfolia'
import Calculator from './Component/calculator'
import React from 'react';
import DataList from './Component/data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/NavBar';

class App extends React.Component{

  render(){
    return (
      <BrowserRouter>
      <div className='App'>
      <Navbar />
    <Routes>
    <Route exact path='/' element={<Portfolio />}/>
      <Route exact path='/portfolio' element={<Portfolio />}/>
      <Route path='/calculator' element={<Calculator />}/>
      <Route path='/data' element={<DataList />}/>
      </Routes>
      </div>
  </BrowserRouter>

    )
  }
}

export default App;
