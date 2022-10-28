import { gql } from '@apollo/client';


const UsersQuery = gql`
    query getUsers{
        Users{
           id
           userName
           email
        }
    }
`

export default UsersQuery