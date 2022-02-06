import { useState } from 'react';

const initialFromValues={ fullName: '', phoneNumber: '' };
function Form({addContact,contacts}) {

  const [form, setForm] = useState(initialFromValues)

  const onChangeInput = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullName === '' || form.phoneNumber === '') return false;
    addContact([...contacts,form])
    setForm(initialFromValues)
  }


  return <div>
    <form onSubmit={onSubmit}>
      <div>
        <input name='fullName' value={form.fullName} placeholder='Full Name' onChange={onChangeInput} />
      </div>

      <div>
        <input name='phoneNumber' value={form.phoneNumber} placeholder='Phone Number' onChange={onChangeInput} />
      </div>

      <div>
        <button>Add</button>
      </div>
    </form>
  </div>;
}

export default Form;
