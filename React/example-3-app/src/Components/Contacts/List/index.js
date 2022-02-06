import { useState } from 'react';

function List({ contacts }) {
  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    })
  })

  return <div>
    <input placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)} />
    <ul className='List'>
      {
        filtered.map((item, index) => <li key={index}>{item.fullName} {item.phoneNumber}</li>)
      }
    </ul>
    <p>Total Contacts({filtered.length})</p>
  </div>;
}

export default List;
