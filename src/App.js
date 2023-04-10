import './App.css';
import Portfolio from './Components/portfolio'
import Calculator from './Components/calculator'
import React from 'react';
import DataList from './Components/data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

class App extends React.Component{

  render(){
    return (
      <BrowserRouter>
      <div className='App'>
      <Navbar />
    <Routes>
      <Route exact path='/' element={<Portfolio />}/>
      <Route path='/calculator' element={<Calculator />}/>
      <Route path='/data' element={<DataList />}/>
      </Routes>
      </div>
  </BrowserRouter>

    )
  }
}

export default App;
