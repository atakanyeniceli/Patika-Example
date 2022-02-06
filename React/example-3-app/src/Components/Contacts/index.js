import {useState,useEffect} from 'react';
import List from './List/index'
import From from './Form/index'
import './styles.css'

function Contacts() {
  const[contacts,setContacts]=useState([])

  useEffect(()=>{
    console.log(contacts)
  },[contacts])

  return <div id='Container'>
    <List contacts={contacts}></List>
    <From addContact={setContacts} contacts={contacts}></From>
    </div>;
}

export default Contacts;

