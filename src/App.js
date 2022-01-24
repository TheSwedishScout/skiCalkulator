import logo from './logo.svg';

import { SkiCalkulator } from './components/SkiCalkulator';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Stratsys Ski length</h1>
      </header>
      <main>
        <SkiCalkulator />
      </main>
    </div>
  );
}

export default App;
