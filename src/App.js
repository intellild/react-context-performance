import logo from './logo.svg';
import './App.css';
import { createContext, Fragment, memo, useContext, useState } from 'react';

const list = Array(1000000).fill(null);

const Context = createContext();

const ContextB = createContext();

console.log(Context, ContextB)

const DummyComponent = () => {
  useContext(ContextB);
  return null;
};

const Children = memo(() => list.map((_, index) => <DummyComponent key={index} />));

const Consumer = memo(() => {
  const count = useContext(Context);
  return <div>Consumer Count: {count}</div>
})

function App() {
  const [state, setState] = useState(0);
  return (

    <div className="App">
      <button onClick={() => setState(count => count + 1)}>Counter: {state}</button>
      <Context.Provider value={state}>
        <ContextB.Provider value={null}>
          <Consumer />
          <Children />
        </ContextB.Provider>
      </Context.Provider>
    </div>

  );
}

export default App;
