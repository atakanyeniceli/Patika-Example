import { events } from "../../Data/events.js";
import { locations } from "../../Data/location.js";
import { participants } from "../../Data/participants.js";
import { users } from "../../Data/users.js";
const Query = {
    Users: () => users,
    User: (parent, args) => users.find((user) => user.id === args.id),
    Events: () => events,
    Event: (parent, args) => events.find((event) => event.id === args.id),
    Locations: () => locations,
    Location: (parent, args) => locations.find((location) => location.id === args.id),
    Participants: () => participants,
    Participant: (parent, args) => participants.find((participant) => participant.id === args.id),
};
export default Query;
