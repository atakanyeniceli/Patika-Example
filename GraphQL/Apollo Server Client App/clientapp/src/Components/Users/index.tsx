import { useQuery } from "@apollo/client";
import UsersQuery from "../../Apollo/Query/user";
import { IUsersQuery } from "../../Interfaces/Apollo/Query/IUser";
import CardUser from "./Card/card";



const Users = () => {
    const { loading, error, data } = useQuery<{ Users: Array<IUsersQuery> }>(UsersQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :{error.message}(</p>;
    return (
        <div className='grid grid-cols-3 gap-3'>
            {data?.Users.map((user, index) => <CardUser key={index} user={user} />)}
        </div >
    )
}

export default Users