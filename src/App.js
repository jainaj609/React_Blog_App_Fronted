import './App.css';
import React from 'react';
import RouteFile from './Components/Routes/RouteFile';
import ConTextAPI from './Components/ContextAPI/ConTextAPI';
function App() {
  return (
    <div className="App">
      <ConTextAPI>
        <RouteFile />
      </ConTextAPI>
    </div>
  );
}

export default App;
