

export const typeEvent = `
type Event {
    id: Int
    title: String
    desc: String
    date: String
    from: String
    to: String
    locationID: Int
    userID: Int
    user: User
    location: Location
    participant: [Participant]
}
`


export const inputEvent = `
input addEventInput{
    id: Int
    title: String
    desc: String
    date: String
    from: String
    to: String
    locationID: Int
    userID: Int
    user: addUserInput
    location: addLocationInput
    participant: [addParticipantInput]
}
`
