import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Person from './App';
import { Header } from './App';

import { Button } from './App';
import { List } from './App';
// import { List1 } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Person name={"adarsh"} age={18}/>
  <Button />
  <Header title ="This is Title" />
  <List/>
  {/* <List/> */}

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
