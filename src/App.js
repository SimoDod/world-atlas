import React, { useState } from 'react';
import "./App.css";
import MapChart from "./components/Map/MapChart";
import NavTool from "./components/UI/NavTool";

function App() {
  const [selectedColor, setSelectedColor] = useState('green');

  return (
    <div className="App">
      <NavTool setSelectedColor={setSelectedColor}/>
      <main>
        <MapChart selectedColor={selectedColor}/>
      </main>
    </div>
  );
}

export default App;
