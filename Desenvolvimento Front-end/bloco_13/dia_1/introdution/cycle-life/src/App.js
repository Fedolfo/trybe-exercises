import './App.css';
import DadJoke from './components/ApiJokes';
import ApiRick from './components/ApiRickMorty';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <DadJoke />
      <ApiRick />
      <Counter />
    </div>
  );
}

export default App;
