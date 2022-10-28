import { gql } from "@apollo/client"


const addUserSubscription = gql`
    subscription addUser{
        id
        userName
        email
    }
`
export default addUserSubscription