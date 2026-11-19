import React, {useEffect,useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {renderPage,initPage} from './page.js';
import './style.css';
function App(){const ref=useRef(null);useEffect(()=>initPage(ref.current),[]);return <div ref={ref} dangerouslySetInnerHTML={{__html:renderPage(`${import.meta.env.BASE_URL}images/`)}}/>;}
createRoot(document.getElementById('root')).render(<App/>);
// ==================================================
// SCROLL TO TOP AO RECARREGAR A PÁGINA
// ==================================================

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  });
});