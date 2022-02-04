import { useState} from "react";

function InputExample(){
    const[form,setForm]=useState({name:'',surName:''});

    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        console.log(e.target.name)
    }
    return(
        <div>
            Lütfen Isim Giriniz.
            <input name="name" value={form.name} onChange={onChangeInput}></input>
            <br/>
            Lütfen SoyIsim Giriniz.
            <input name="surName"value={form.surName} onChange={onChangeInput}></input>
            <h1>{form.name} {form.surName}</h1>
        </div>
    );
}

export default InputExample;