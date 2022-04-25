import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Body from '../src/component/body/Body';
import Header from './component/header/Header';
import Latest from './component/trend/Latest';
import List from './List/List';
import { useState } from 'react';


function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <div style={{ backgroundColor: "#141A28"}}>
        <Header setData={setData} />
        <Body />
        {/* <Latest /> */}
        {/* <div style={{ border: "2px solid green" }}> */}
          <List data={data} />
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
