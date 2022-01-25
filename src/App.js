import { SkiCalculator } from './components/SkiCalculator';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Ski length calculator</h1>
      </header>
      <main>
        <SkiCalculator />
      </main>
    </div>
  );
}

export default App;
