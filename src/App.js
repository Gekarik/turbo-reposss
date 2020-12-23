import './App.css';
import PageWrapper from './page_wrap.js'
import {
  BrowserRouter as Router,
} from "react-router-dom";

const  App = () =>  {
  return (
    <Router>
      <PageWrapper />
    </Router>
  );
}

export default App;
