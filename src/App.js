// import logo from './logo.svg';
import './App.css';
// import Counter1 from './components/Couter1';
// import Counter from './components/Counter';

// import SeachResults from './components/Search';
// import Search from './components/FormSearch';

// import SearchReducer from './components/FormSearchReducer';
import AppP from './components/UseContext';
// import ContextConsumer from './components/ContextConsumer';
import {AppPro as App2} from './components/ProviderApp';

import ThemeSelect from './components/ThemeSelect';
import Counter from './components/Counter';
import TagInput from './components/TagInput';

import Modal from './components/Modal'
import { useState } from 'react';

function App() {
  const [modalVisible,setModalVisible] = useState(false)


  return (
    <div className="App">
      <button onClick={()=> setModalVisible(true)}>show modal</button>
      <Modal 
        isVisible={modalVisible}
        title="Modal title"
        content={<p> Here is the content </p>}
        footer={<button>Cancel</button>}
        onClose={()=>setModalVisible(false)}
      />
      <TagInput tags={['NodeJs','MangoDB']} />
      <Counter />
      <App2 />
      <AppP />
      <hr />
      <ThemeSelect / >
      {/* <SearchReducer />
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
      </header> */}
    </div>
  );
}

export default App;
