import { useState, useMemo, useCallback } from 'react';
import Header from './Components/Header'
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const data1 = useMemo(() => { return { name: 'Atakan' }; }, []);
  const increment = useCallback(() => { setNumber((prevState) => prevState + 1) }, [])

  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} data={data1} increment={increment}></Header>
      <hr />
      <div>{number}</div>
    </div>
  );
}

export default App;
