import { gql } from "@apollo/client";




const addNewUser = gql`
    mutation AddUser($user:addUserInput){
        addUser(user:$user){
            id
            userName
            email
        }
    }
`


export default addNewUser