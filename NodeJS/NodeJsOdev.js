import axios from "axios"

const getData =async (number)=>{
     if (number > 0 && number<11){
        const {data:user}= await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
        const {data:post}= await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
        return ({user,post})
     }
     return {}
      
}

export default getData;