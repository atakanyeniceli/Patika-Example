import Header from "./Components/Header";
import MoneyBar from "./Components/moneyBar";
import Product from "./Components/Products";
import Sales from "./Components/Sales";



function App() {
  return (
    <div id='App' className='bg-gray-200 px-5'>
      <Header />
      <MoneyBar />
      <Product />
      <Sales />
    </div>
  );
}

export default App;
