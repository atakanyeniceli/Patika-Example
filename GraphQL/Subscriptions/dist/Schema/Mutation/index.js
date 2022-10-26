export const typeMutation = `
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
`;
