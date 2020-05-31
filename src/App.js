import React from 'react';
// import './App-css.css';
import './App-scss.scss';

import img from './assets/images/logo.svg'

export function App() {
  return (
    <div className="app">
      <img className="app-logo" src={img} alt="logo"/>
      <h1>中后台管理系统</h1>
    </div>
  )
}
