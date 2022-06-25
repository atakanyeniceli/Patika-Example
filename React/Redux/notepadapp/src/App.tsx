import Header from "./Components/Header";
import Input from "./Components/Input";
import List from "./Components/List";


function App() {
  return (
    <div className='h-full bg-slate-100'>
      <Header />
      <div className='grid grid-cols-4 gap-1 my-5 px-2'>
        <Input customClass='col-span-1' />
        <List customClass='col-span-3 overflow-hidden' />
      </div>
    </div>
  );
}

export default App;
