import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import Chart from './components/Chart';
import ExpectedDamage from './components/ExpectedDamage';
import MathForm from './MathForm';
import Simulation from './components/Simulation';
import StatsForm from './components/StatsForm';

function App() {
	return (
		<Provider store={store}>
		  <div className="App">
			<header className="App-header">
			  We Math Boys Now
			</header>
			<main>

			<MathForm />
			<Chart />
			<StatsForm />
			<ExpectedDamage />
			<Simulation />
			</main>
		  </div>
		</Provider>
	);
}

export default App;
