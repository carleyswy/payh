
import React, { useState } from 'react';
import './App.css';
import { Menu  } from 'antd';
import Layout from './layout'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { BrowserRouter, Switch, Route, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as storeredux from "./store";



function ListItem(props){
  return (
    <li>{props.iv.toString()+'3'}</li>
  )
}

function R1(){
  const {id} = useParams();
  console.log(77777);
  return (
    <div>{`r1 - ${id}`}</div>
  )
}

function R2(){
  return (
    <>
    <div style={{width: 100, height: 100, backgroundColor: "#ccc"}}>r2</div>
    <Route path="/r2/r3">
      <R3 />
    </Route>
    </>
  )
}

function R3(){
  return (
    <div>r3</div>
  )
}

function App(props) {
  const [cd, setCd] = useState(0);
  const [fd, setFd] = useState(0);
  const {c,f} = props;
  const name = "php";
  const ali = ['a','b','c','d','e'];
  const alitag = ali.map((v)=><li key={v}>{v+'2'}</li>)  
  const alitag2 = ali.map((v) => <ListItem iv={v} key={v} />)
  


  const storestate = useSelector(state => state);
  console.log(storestate);
  const dispatch = useDispatch();

  dispatch(storeredux.action._setLang(1));
  
  const handleCd = (e) => {
    console.log(e.target.value);
    setCd(e.target.value);
    setFd(e.target.value+'cdcd');
  };

  const handleFd = (e) => {
    console.log(e.target.value);
    setFd(e.target.value);
    setCd(e.target.value+'FDFD');
  };

  return ( 
    <div className="App">

      <Layout />


      {/* <BrowserRouter>
      
        <p>
          {name} {f}
        </p>
        <ul>
          {alitag}
        </ul>

        <ul>
          {alitag2}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
<br/>
        <input name="cd" value={cd} onChange={handleCd} />
        <br/>
        <input name="fd" value={fd} onChange={handleFd} />
        <Link to="/r1/9">r1-9</Link>

        
        <Route path="/r1/" exact>
            <R1 />
          </Route>
          <Route path="/r1/:id">
            <R1 />
          </Route>
          <Route path="/r2">
            <R2 />
          </Route>
          <Route path="/r3">
            <R3 />
          </Route>

        </BrowserRouter> */}
      
    </div>

  );
}

export default App;
