import PropTypes from "prop-types";


function Users({name,surname,isLoggedIn,age,adress}){
    return <h1>{isLoggedIn ? `User = Adım ${name} Soyadım ${surname} Yaşım ${age} Adres ${adress.title}` :'Giriş yapmadınız.'}</h1>;
}

//prop için tip belirleme işlemi
Users.propTypes={
    name:PropTypes.string.isRequired,//zorunlu alan
    surname:PropTypes.string.isRequired,//zorunlu alan
    isLoggedIn:PropTypes.bool.isRequired,//zorunlu alan
    age:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),// bir prop için birden fazla tip belirtme işlemi
    adress:PropTypes.shape({
        title:PropTypes.string,
        zip:PropTypes.number
    })//Prop olarak bir object verildiğin objenin Proplarını belirtme
}

//Prop için default değer vermek
Users.defaultProps={
    name:'İsimsiz',
    surname:'İsimsiz',
    age:1,
}

export default Users;