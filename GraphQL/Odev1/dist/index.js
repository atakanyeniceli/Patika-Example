import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { events } from './Data/events.js';
import { locations } from './Data/location.js';
import { participants } from './Data/participants.js';
import { users } from './Data/users.js';
import typeDefs from './Schema/index.js';
const resolvers = {
    Query: {
        Users: () => users,
        User: (parent, args) => users.find((user) => user.id === args.id),
        Events: () => events,
        Event: (parent, args) => events.find((event) => event.id === args.id),
        Locations: () => locations,
        Location: (parent, args) => locations.find((location) => location.id === args.id),
        Participants: () => participants,
        Participant: (parent, args) => participants.find((participant) => participant.id === args.id),
    },
    User: {
        event: (parent) => events.filter((event) => event.userID === parent.id)
    },
    Event: {
        user: (parent) => users.find((user) => user.id === parent.userID),
        location: (parent) => locations.find((location) => location.id === parent.locationID),
        participant: (parent) => participants.filter((participent) => participent.eventID === parent.id && participent.userID === parent.userID)
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers
});
startStandaloneServer(server, { listen: { port: 4000 } }).then(({ url }) => console.log('Apollo server is up at ', url));
