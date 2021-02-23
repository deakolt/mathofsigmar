import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import DiceRoller from './components/diceroller/DiceRoller';
import ExpectedDamage from './components/ExpectedDamage';
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
			<DiceRoller />
			<StatsForm />
			<ExpectedDamage />
			<Simulation />
			</main>
		  </div>
		</Provider>
	);
}

export default App;
