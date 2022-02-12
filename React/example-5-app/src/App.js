import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';

const Schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Çok Kısa!')
    .max(50, 'Çok Uzun!')
    .required('Zorunlu'),
  lastName: Yup.string()
    .min(2, 'Çok Kısa!')
    .max(50, 'Çok Uzun!')
    .required('Zorunlu Alan'),
  email: Yup.string().email('Lütfen Geçerli bir Email Adresi Giriniz.').required('Zorunlu Alan'),
});
function App() {
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: 'male',
      hobies: [],
      country: 'turkey'
    },
    validationSchema: Schema,
    onSubmit: values => { alert(JSON.stringify(values, null, 2)); },
  })

  const errorDisplay = (error) => {
    return <div>{error}</div>
  }

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" placeholder="Jane" onChange={handleChange} onBlur={handleBlur} />
        {errors.firstName && touched.firstName && (errorDisplay(errors.firstName))}
        <br /><br />

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Doe" onChange={handleChange} onBlur={handleBlur} />
        {errors.lastName && touched.lastName && (errorDisplay(errors.lastName))}

        <br /><br />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (errorDisplay(errors.email))}

        <br /><br />

        <span>
          <label htmlFor="male">Male</label>
          <input id="male" name="gender" type="radio" value="male" onChange={handleChange} defaultChecked={true} />
          <label htmlFor="female">Female</label>
          <input id="female" name="gender" type="radio" value="female" onChange={handleChange} />
        </span>

        <br /><br />
        <label htmlFor="football">Football</label>
        <input id="football" type="checkbox" name="hobies" value="Football" onChange={handleChange} />
        <br />
        <label htmlFor="cinema">Cinema</label>
        <input id="cinema" type="checkbox" name="hobies" value="cinema" onChange={handleChange} />
        <br />
        <label htmlFor="photography">Photography</label>
        <input id="photography" type="checkbox" name="hobies" value="Photography" onChange={handleChange} />
        <br /><br />

        <select name="country" values={values.country} onChange={handleChange}>
          <option value="turkey">Turkey</option>
          <option value="england">Englad</option>
          <option value="usa">USA</option>
        </select>
        <br /><br />
        <button type="submit">Submit</button>
        <br /><br />
        {JSON.stringify(values)}
      </form>
    </div >
  );
}

export default App;
