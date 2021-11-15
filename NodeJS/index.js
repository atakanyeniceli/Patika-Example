import slugify from 'slugify';
import Topla,{sub,mul,div} from './myModule.js';
import fetch from 'node-fetch';
import axios from 'axios';
import getData from './NodeJsOdev.js';

// console.log(slugify("Hello Word"));
// console.log(Topla(1,2),sub(1,2),mul(2,2),div(5,0))
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(data => data.json())
// .then(userJson =>console.log('User: ',userJson))

// (async () =>{
//     const {data}=await axios('https://jsonplaceholder.typicode.com/posts/2')//Dönen response içindeki data yakalanarak esas veri elde edilebilir.
//     console.log('Data :',data)
//  }
// )();

(async()=>{
    console.log(await getData(10))
})();
