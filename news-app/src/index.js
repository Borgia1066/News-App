import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "semantic-ui-css/semantic.min.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Article} from './ArticlePage'

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<App/>} />
         {/* <Route path="/ArticlePage" element={<Article/>} /> */}
      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);