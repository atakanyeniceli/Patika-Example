import { useState, useEffect } from 'react';
import { Link,Outlet } from "react-router-dom";
import axios from 'axios';


function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .catch(e => console.log(e))
            .finally(() => setLoading(false));
    }, []);


    return <div>
        <h1>Users</h1>
        {isLoading && <div>Loading...</div>}
        <ul>
            {users.map(user => <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>)}
        </ul>
        <Outlet></Outlet>
    </div>;
}

export default Users;
