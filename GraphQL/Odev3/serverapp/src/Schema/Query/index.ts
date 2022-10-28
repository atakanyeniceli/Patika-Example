

export const typeQuery = `
type Query{

    Users:[User],
    User(id:Int!):User,

    Events:[Event],
    Event(id:Int!):Event,

    Locations:[Location],
    Location(id:Int!):Location,

    Participants:[Participant],
    Participant(id:Int!):Participant

}`