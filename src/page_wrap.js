import React from 'react';
import Head from './screen/head/head.jsx'
import st from './page_wrap.module.css'
import MainPage from './screen/main/main'
import KeepPage from './pages/keep-page/KeepPage'
import {
  Switch,
  Route,
} from "react-router-dom";


const  PageWrap = () =>  {
  return (
    <div className={st.container}>
    <Head />
        <Switch>
           <Route path="/app">
             <KeepPage/>
          </Route>
          <Route path="/">
           <MainPage/>
          </Route>
        </Switch>
    </div>
  );
}

export default PageWrap;
