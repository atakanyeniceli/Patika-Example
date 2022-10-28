export const typeUser = `
type User{
    id: Int,
    userName: String,
    email: String,
    event: [Event]
}
`;
export const inputUser = `
input addUserInput {
    id: Int
    userName: String
    email: String
    event: [addEventInput]
}
`;
