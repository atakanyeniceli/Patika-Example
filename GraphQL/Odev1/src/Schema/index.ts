const typeDefs = ` #graphql
type User {
    id: Int
    userName: String
    email: String
    event: [Event]
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


type Location{
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