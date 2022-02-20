
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Copyright from './Components/Copyright/Copyright';
import HashLoader from 'react-spinners/HashLoader';
import { useEffect, useState } from 'react';
import {css} from '@emotion/core'


function App() {

  const [loading, setLoading] = useState(false);
  const override=css`
  display: block;
  border-color:red;
  margin-top: 40vh;
  margin-left: 45%;
  `;
  

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])


  return (
    <div className="App">
      {
        loading ? <HashLoader Loading={loading} size={100} color={"#FE211A"} css={override}/> :
          <div>
            <Navbar />
            <Home />
            <About />
            <Products />
            <Contact />
            <Copyright />
          </div>
      }
    </div>
  );
}

export default App;
