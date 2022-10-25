import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { events } from './Data/events.js'
import { locations } from './Data/location.js'
import { participants } from './Data/participants.js'
import { users } from './Data/users.js'
import { IEvents } from './Interface/IEvents.js'
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
    Mutation: {

        //User
        addUser: (parent, args) => {
            users.push({ ...args.user })
            return { ...args.user }
        },
        deleteUser: (parent, args) => {
            const tempIndex = users.findIndex((user) => user.id === args.id)
            if (tempIndex > -1) {
                const tempUser = users[tempIndex]
                users.splice(tempIndex, 1)
                return tempUser
            }
            throw new Error('User Not Found')
        },
        updateUser: (parent, args) => {
            const tempIndex = users.findIndex((user) => user.id === args.user.id)
            if (tempIndex > -1) {
                users[tempIndex] = {
                    ...users[tempIndex],
                    ...args.user
                }
                return users[tempIndex]
            }
        },
        deleteAllUser: () => {
            const deleteCount = users.length
            users.splice(0)
            if (users.length === 0)
                return deleteCount
            throw new Error('Could not be completed.')
        },

        // Event
        addEvent: (parent, args) => {
            events.push({ ...args.event })
            return { ...args.event }
        },
        deleteEvent: (parent, args) => {
            const tempIndex = events.findIndex((event) => event.id === args.id)
            if (tempIndex > -1) {
                const tempEvent = events[tempIndex]
                events.splice(tempIndex, 1)
                return tempEvent
            }
            throw new Error('Event Not Found')
        },
        updateEvent: (parent, args) => {
            const tempIndex = events.findIndex((event) => event.id === args.event.id)
            if (tempIndex > -1) {
                events[tempIndex] = {
                    ...events[tempIndex],
                    ...args.event
                }
                return events[tempIndex]
            }
        },
        deleteAllEvent: () => {
            const deleteCount = events.length
            events.splice(0)
            if (events.length === 0)
                return deleteCount
            throw new Error('Could not be completed.')
        },

        //Location
        addLocation: (parent, args) => {
            locations.push({ ...args.location })
            return { ...args.location }
        },
        deleteLocation: (parent, args) => {
            const tempIndex = locations.findIndex((location) => location.id === args.id)
            if (tempIndex > -1) {
                const tempUser = locations[tempIndex]
                locations.splice(tempIndex, 1)
                return tempUser
            }
            throw new Error('Location Not Found')
        },
        updateLocation: (parent, args) => {
            const tempIndex = locations.findIndex((location) => location.id === args.location.id)
            if (tempIndex > -1) {
                locations[tempIndex] = {
                    ...locations[tempIndex],
                    ...args.location
                }
                return locations[tempIndex]
            }
        },
        deleteAllLocation: () => {
            const deleteCount = locations.length
            locations.splice(0)
            if (locations.length === 0)
                return deleteCount
            throw new Error('Could not be completed.')
        },

        //Participant
        addParticipant: (parent, args) => {
            participants.push({ ...args.participant })
            return { ...args.participant }
        },
        deleteParticipant: (parent, args) => {
            const tempIndex = participants.findIndex((participant) => participant.id === args.id)
            if (tempIndex > -1) {
                const tempUser = participants[tempIndex]
                participants.splice(tempIndex, 1)
                return tempUser
            }
            throw new Error('Participant Not Found')
        },
        updateParticipant: (parent, args) => {
            const tempIndex = participants.findIndex((participant) => participant.id === args.participant.id)
            if (tempIndex > -1) {
                participants[tempIndex] = {
                    ...participants[tempIndex],
                    ...args.participant
                }
                return participants[tempIndex]
            }
        },
        deleteAllParticipant: () => {
            const deleteCount = participants.length
            participants.splice(0)
            if (participants.length === 0)
                return deleteCount
            throw new Error('Participant not be completed.')
        }
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

