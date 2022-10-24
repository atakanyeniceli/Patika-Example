import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { events } from './Data/events.js'
import { locations } from './Data/location.js'
import { participants } from './Data/participants.js'
import { users } from './Data/users.js'
import { IEvents } from './Interface/IEvents.js'
import { Ilocations } from './Interface/ILocations.js'
import { IUsers } from './Interface/IUsers.js'
import typeDefs from './Schema/index.js'


const resolvers = {
    Query: {
        Users: () => users,
        User: (parent, args: { id: number }) => users.find((user) => user.id === args.id),

        Events: () => events,
        Event: (parent, args: { id: number }) => events.find((event) => event.id === args.id),

        Locations: () => locations,
        Location: (parent, args: { id: number }) => locations.find((location) => location.id === args.id),

        Participants: () => participants,
        Participant: (parent, args: { id: number }) => participants.find((participant) => participant.id === args.id),
    },
    User: {
        event: (parent: IUsers) => events.filter((event) => event.userID === parent.id)
    },
    Event: {
        user: (parent: IEvents) => users.find((user) => user.id === parent.userID),
        location: (parent: IEvents) => locations.find((location) => location.id === parent.locationID),
        participant: (parent: IEvents) => participants.filter((participent) => participent.eventID === parent.id && participent.userID === parent.userID)
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

startStandaloneServer(server, { listen: { port: 4000 } }).then(({ url }) => console.log('Apollo server is up at ', url))

