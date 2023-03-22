import React from 'react'
import Header from './components/Header'


import './scss/app.scss';
import Categories from "./components/Categories";
import Sort from "./components/Sort";

function App() {
  return (
    <div className="wrapper">
    <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories value={1} onChangeCategory={idx => 1}/>
            <Sort/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
