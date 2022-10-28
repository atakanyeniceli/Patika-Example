import { events } from "../../Data/events.js";
import { locations } from "../../Data/location.js";
import { participants } from "../../Data/participants.js";
import { users } from "../../Data/users.js";
import { pubsub } from "../PubsubClass/index.js";
const Mutation = {
    //User
    addUser: (parent, args) => {
        users.push({ ...args.user });
        pubsub.publish('addUser', { addUser: args.user });
        return { ...args.user };
    },
    deleteUser: (parent, args) => {
        const tempIndex = users.findIndex((user) => user.id === args.id);
        if (tempIndex > -1) {
            const tempUser = users[tempIndex];
            users.splice(tempIndex, 1);
            pubsub.publish('deleteUser', { deleteUser: { ...tempUser } });
            return tempUser;
        }
        throw new Error('User Not Found');
    },
    updateUser: (parent, args) => {
        const tempIndex = users.findIndex((user) => user.id === args.user.id);
        if (tempIndex > -1) {
            users[tempIndex] = {
                ...users[tempIndex],
                ...args.user
            };
            pubsub.publish('updateUser', { updateUser: users[tempIndex] });
            return users[tempIndex];
        }
    },
    deleteAllUser: () => {
        const deleteCount = users.length;
        users.splice(0);
        if (users.length === 0)
            return deleteCount;
        throw new Error('Could not be completed.');
    },
    // Event
    addEvent: (parent, args) => {
        events.push({ ...args.event });
        return { ...args.event };
    },
    deleteEvent: (parent, args) => {
        const tempIndex = events.findIndex((event) => event.id === args.id);
        if (tempIndex > -1) {
            const tempEvent = events[tempIndex];
            events.splice(tempIndex, 1);
            return tempEvent;
        }
        throw new Error('Event Not Found');
    },
    updateEvent: (parent, args) => {
        const tempIndex = events.findIndex((event) => event.id === args.event.id);
        if (tempIndex > -1) {
            events[tempIndex] = {
                ...events[tempIndex],
                ...args.event
            };
            return events[tempIndex];
        }
    },
    deleteAllEvent: () => {
        const deleteCount = events.length;
        events.splice(0);
        if (events.length === 0)
            return deleteCount;
        throw new Error('Could not be completed.');
    },
    //Location
    addLocation: (parent, args) => {
        locations.push({ ...args.location });
        return { ...args.location };
    },
    deleteLocation: (parent, args) => {
        const tempIndex = locations.findIndex((location) => location.id === args.id);
        if (tempIndex > -1) {
            const tempUser = locations[tempIndex];
            locations.splice(tempIndex, 1);
            return tempUser;
        }
        throw new Error('Location Not Found');
    },
    updateLocation: (parent, args) => {
        const tempIndex = locations.findIndex((location) => location.id === args.location.id);
        if (tempIndex > -1) {
            locations[tempIndex] = {
                ...locations[tempIndex],
                ...args.location
            };
            return locations[tempIndex];
        }
    },
    deleteAllLocation: () => {
        const deleteCount = locations.length;
        locations.splice(0);
        if (locations.length === 0)
            return deleteCount;
        throw new Error('Could not be completed.');
    },
    //Participant
    addParticipant: (parent, args) => {
        participants.push({ ...args.participant });
        return { ...args.participant };
    },
    deleteParticipant: (parent, args) => {
        const tempIndex = participants.findIndex((participant) => participant.id === args.id);
        if (tempIndex > -1) {
            const tempUser = participants[tempIndex];
            participants.splice(tempIndex, 1);
            return tempUser;
        }
        throw new Error('Participant Not Found');
    },
    updateParticipant: (parent, args) => {
        const tempIndex = participants.findIndex((participant) => participant.id === args.participant.id);
        if (tempIndex > -1) {
            participants[tempIndex] = {
                ...participants[tempIndex],
                ...args.participant
            };
            return participants[tempIndex];
        }
    },
    deleteAllParticipant: () => {
        const deleteCount = participants.length;
        participants.splice(0);
        if (participants.length === 0)
            return deleteCount;
        throw new Error('Participant not be completed.');
    }
};
export default Mutation;
