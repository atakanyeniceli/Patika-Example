const typeDefs = `#graphql

type User {
    id: Int
    userName: String
    email: String
    event: [Event]
}
input addUserInput {
    id: Int
    userName: String
    email: String
    event: [addEventInput]
}


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


type Location{
    id: Int,
    name: String,
    desc: String
    lat: Float,
    lng: Float
}
input addLocationInput{
    id: Int,
    name: String,
    desc: String
    lat: Float,
    lng: Float
}

type Participant{
    id: Int,
    userID: Int,
    eventID: Int
}
input addParticipantInput{
    id: Int,
    userID: Int,
    eventID: Int
}


type Mutation{
    addUser(user:addUserInput):User
    deleteUser(id:Int):User
    updateUser(user:addUserInput):User
    deleteAllUser:Int

    addEvent(event:addEventInput):Event
    deleteEvent(id:Int):Event
    updateEvent(event:addEventInput):Event
    deleteAllEvent:Int

    addLocation(location:addLocationInput):Location
    deleteLocation(id:Int):Location
    updateLocation(location:addLocationInput):Location
    deleteAllLocation:Int

    addParticipant(participant:addParticipantInput):Participant
    deleteParticipant(id:Int):Participant
    updateParticipant(participant:addParticipantInput):Participant
    deleteAllParticipant:Int
}

type Query{

    Users:[User],
    User(id:Int!):User,

    Events:[Event],
    Event(id:Int!):Event,

    Locations:[Location],
    Location(id:Int!):Location,

    Participants:[Participant],
    Participant(id:Int!):Participant

}
`


export default typeDefs