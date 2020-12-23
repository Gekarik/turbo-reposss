import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const USers = {
//   id=0,
//   email='',
//   name='',
//   passwor='',
// }

// const notes = {
//   id = 0,
//   idUser=0,
//   type='buy',// или meeting, или task
//   title='',
//   text='',
//   color='',
//   data='', //дата создания
//   active=true//активна или нет
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
