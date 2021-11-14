import slugify from 'slugify';
import Topla,{sub,mul,div} from './myModule.js';
import fetch from 'node-fetch';


console.log(slugify("Hello Word"));
console.log(Topla(1,2),sub(1,2),mul(2,2),div(5,0))
fetch('https://jsonplaceholder.typicode.com/posts')
.then(data => data.json())
.then(userJson =>console.log(userJson))