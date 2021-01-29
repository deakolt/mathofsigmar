import React from 'react';

import Chart from './components/Chart';
import MathForm from './MathForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        We Math Boys Now
      </header>
      <main>
        <MathForm />
        <Chart />
      </main>
    </div>
  );
}

export default App;
