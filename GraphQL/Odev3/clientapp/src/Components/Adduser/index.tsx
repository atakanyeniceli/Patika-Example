import { useMutation } from "@apollo/client";
import { useState } from "react"
import addNewUser from "../../Apollo/Mutation/user";
import { INewUser } from "../../Interfaces/Apollo/Mutation/INewUser";


const AddUser = () => {

    const [userValues, setUserValues] = useState<INewUser>({ id: 0, userName: '', email: '' })
    const [addUser, { loading, error }] = useMutation(addNewUser);

    const addUserClick = () => {
        if (!loading && error === undefined) {
            addUser({
                variables: {
                    user: {
                        id: userValues.id,
                        userName: userValues.userName,
                        email: userValues.email
                    }
                }
            })
        }
    }

    return (
        <div className=''>

            <div className='my-2'>
                <span>ID:</span>
                <input className='border border-black px-2' type="number" onChange={(e) => setUserValues({ ...userValues, id: Number(e.target.value) })} />
            </div>

            <div className='my-2'>
                <span>UserName:</span>
                <input className='border border-black px-2' type="text" onChange={(e) => setUserValues({ ...userValues, userName: e.target.value })} />
            </div>

            <div className='my-2'>
                <span>Email:</span>
                <input className='border border-black px-2' type="email" onChange={(e) => setUserValues({ ...userValues, email: e.target.value })} />
            </div>

            <div className='pb-5'>
                <button onClick={addUserClick}>Add New User</button>
            </div>

        </div>
    )
}

export default AddUser