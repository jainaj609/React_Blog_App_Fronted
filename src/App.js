import './App.css';
import React,{ useContext } from 'react';
import RouteFile from './Components/Routes/RouteFile';
import SpecialHeader from './Components/Pages/HandleLogin';

import { Store } from './Components/ContextAPI/ConTextAPI';


function App() {
  const [ , , token, setToken] = useContext(Store);
  if (!token) {
    return <SpecialHeader token={token} setToken={setToken}/>
  }
  return (
    <div className="App">
        <RouteFile />
    </div>
  );
}

export default App;
