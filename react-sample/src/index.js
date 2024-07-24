import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from "react-redux";

import rootReducer from './reducers/index';
import { createStore } from 'redux';

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <App />
   </Provider>
   //<React.StrictMode>

   //</React.StrictMode>
);
// setInterval(()=>{
//    root.unmount();
// },4000)

