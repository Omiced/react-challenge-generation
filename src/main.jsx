import React from 'react'
import ReactDOM from 'react-dom/client'
import { Instrucciones } from './components/Instrucciones';
import { Map } from './components/Map'
import "./style.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Instrucciones/>
    <Map/>
  </React.StrictMode>,
)
