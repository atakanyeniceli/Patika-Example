import Header from './Components/Header/';
import Body from './Components/Body/';
import { DataProvider } from './Context/DataContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header></Header>
        <Body></Body>
      </DataProvider>

    </div>
  );
}

export default App;
