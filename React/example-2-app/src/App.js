import {useState,useEffect} from 'react'
import InputExample from './Components/InputExample';
import './App.css';

function App() {
  //name=değişken  setName=değişkeni anlık olarak değiştirme işlemi yapacak fonksiyon adı 'Isimsiz' ise default değer.
  const [name,setName]=useState('İsimsiz');
  const [list,setList]=useState(['ahmet','mehmet'])

  useEffect(()=>{
    console.log('Component mount edildi.')
  },[])//>Herhangi bir Component DOM a eklendiğinde çalışır.

  useEffect(()=>{
    console.log('Name State Güncellendi.')
    return ()=>{}//Unmount burada tetikleniyor.Ayrı bir fonkisyon yok.
  },[name])//Belirtilen state değiştirildiğinde çalışır.

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <button onClick={()=>setName('Atakan')}>İsim Değiştir.</button>
      <button onClick={()=>setList([...list,'ekleme'])}>Listeye Ekle.</button> {/* Obje içinde aynı işlem yapılır. */}
      <br></br>

      <h1>Liste Elemanları</h1>
      {list.map((item,key)=><div key={key}>{item}</div>)}
      <br></br>

      <InputExample></InputExample>
      
    </div>
  );
}



export default App;
