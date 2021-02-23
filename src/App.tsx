import React from 'react';

import Chart from './components/Chart';
import ExpectedDamage from './components/ExpectedDamage';
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
        <ExpectedDamage />
      </main>
    </div>
  );
}

export default App;
