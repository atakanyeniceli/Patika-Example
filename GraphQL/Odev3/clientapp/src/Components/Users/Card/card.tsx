import { IUsersQuery } from "../../../Interfaces/Apollo/Query/IUser"



const CardUser = ({ user }: { user: IUsersQuery }) => {
    return (
        <div>
            <div>{user.id}</div>
            <div>{user.userName}</div>
            <div>{user.email}</div>
        </div>
    )
}

export default CardUser