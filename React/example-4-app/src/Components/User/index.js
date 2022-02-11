import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

function User() {
    console.log("function")
    const params = useParams();
    const [user, setUsers] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Effect")
        axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(res => setUsers(res.data))
            .catch(e => console.log(e))
            .finally(() => setLoading(false));
    }, [params])


    return (
        <div>
            {console.log("return")}
            <h1>User Detail</h1>
            {isLoading && <div>Loading...</div>}
            {!isLoading && <pre>{JSON.stringify(user, null, 2)}</pre>}
        </div>
    )
}

export default User
