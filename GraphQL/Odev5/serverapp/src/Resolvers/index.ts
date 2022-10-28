import { events } from "../Data/events.js";
import { locations } from "../Data/location.js";
import { participants } from "../Data/participants.js";
import { users } from "../Data/users.js";
import { IEvents } from "../Interface/IEvents.js";
import { IUsers } from "../Interface/IUsers.js";
import Mutation from "./Mutations/index.js";
import Query from "./Query/index.js";
import { Subscription } from "./Subscription/index.js";

export const resolvers = {
    Query,
    Mutation,
    Subscription,
    User: {
        event: (parent: IUsers) => events.filter((event) => event.userID === parent.id)
    },
    Event: {
        user: (parent: IEvents) => users.find((user) => user.id === parent.userID),
        location: (parent: IEvents) => locations.find((location) => location.id === parent.locationID),
        participant: (parent: IEvents) => participants.filter((participent) => participent.eventID === parent.id && participent.userID === parent.userID)
    }
}