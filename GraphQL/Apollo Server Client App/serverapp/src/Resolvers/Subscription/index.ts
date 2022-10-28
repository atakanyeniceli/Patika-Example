import { pubsub } from "../PubsubClass/index.js"

export const Subscription = {
    addUser: {
        subscribe: () => pubsub.asyncIterator('addUser')
    },
    updateUser: {
        subscribe: () => pubsub.asyncIterator('updateUser')
    },
    deleteUser: {
        subscribe: () => pubsub.asyncIterator('deleteUser')
    }
}