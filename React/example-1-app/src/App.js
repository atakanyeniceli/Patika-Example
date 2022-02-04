import './App.css';
import Header from './Components/Header.js'
import {name,surName} from './Components/Variable';
import Users from './Components/Users';

function App() {
  return (
    <div>
      <Header/>
      <h1>{`Benim Adım ${name}, Soyadım ${surName}`}</h1>
      <Users name="Erkan" surname="Yeniceli" isLoggedIn={true} age={'29'} adress={{ title: "Manisa", zip: 4500 }} />
    </div>
  );
}

export default App;
