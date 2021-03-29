import logo from './logo.svg';
import './App.css';
import Counter1 from './components/Couter1'
import Counter from './components/Counter'

import SeachResults from './components/Search'
import Search from './components/FormSearch'

import SearchReducer from './components/FormSearchReducer'


function App() {
  return (
    <div className="App">
      <SearchReducer />
      <Search />
      <SeachResults />
      <Counter />
      <Counter1 />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
